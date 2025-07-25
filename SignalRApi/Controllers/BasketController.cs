﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using SignalR.BusinessLayer.Abstract;
using SignalR.DataAccessLayer.Concrete;
using SignalR.DtoLayer.BasketDto;
using SignalR.EntityLayer.Entities;
using SignalRApi.Models;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketController : ControllerBase
    {
        private readonly IBasketService _basketService;
        public BasketController(IBasketService basketService)
        {
            _basketService = basketService;
        }
        [HttpGet]
        public IActionResult GetBasketsByMenuTableId(int menuTableId)
        {
            var baskets = _basketService.TGetBasketsByMenuTableId(menuTableId);
            if (baskets == null || !baskets.Any())
            {
                return NotFound("No baskets found for the specified Menu Table ID.");
            }
            return Ok(baskets);
        }
        [HttpGet("BasketListByMenuTableWithProductName")]
        public IActionResult BasketListByMenuTableWithProductName(int id)
        {
            using var context = new SignalRContext();
            var values = context.Baskets.Include(x => x.Product)
                .Where(y => y.MenuTableID == id).Select(z => new ResultBasketListWithProducts
                {
                    MenuTableID = z.MenuTableID,
                    BasketID = z.BasketID,
                    Count = z.Count,
                    Price = z.Price,
                    TotalPrice = z.TotalPrice,
                    ProductID = z.ProductID,
                    ProductName = z.Product.ProductName

                }).ToList();

            return Ok(values);
        }
        [HttpPost]
        public IActionResult CreateBasket(CreateBasketDto createBasketDto)
        {
            using var context = new SignalRContext();
            _basketService.TInsert(new Basket()
            {
                Count = 1,
                MenuTableID = 4,
                Price = context.Products.Where(x=> x.ProductID == createBasketDto.ProductID).Select(y=>y.ProductPrice).FirstOrDefault(),
                TotalPrice = 0,
                ProductID = createBasketDto.ProductID

            });
            return Ok("Basket created successfully.");

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBasket(int id)
        {
            var basket = _basketService.TGetById(id);
            if (basket == null)
            {
                return NotFound("Basket not found.");
            }
            _basketService.TDelete(basket);
            return Ok("Basket deleted successfully.");
        }


    }
}
