using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignalR.BusinessLayer.Abstract;
using SignalR.DataAccessLayer.Concrete;
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

    }
}
