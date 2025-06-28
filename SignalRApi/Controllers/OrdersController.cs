using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.BusinessLayer.Abstract;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService orderService;
        public OrdersController(IOrderService orderService)
        {
            this.orderService = orderService;
        }

        [HttpGet("TotalOrderCount")]
        public IActionResult TotalOrderCount()
        {
            var orders = orderService.TTotalOrderCount();
            return Ok(orders);
        }
        [HttpGet("ActiveOrderCount")]
        public IActionResult ActiveOrderCount()
        {
            var orders = orderService.TActiveOrderCount();
            return Ok(orders);
        }

        [HttpGet("LastOrderPrice")]
        public IActionResult LastOrderPrice()
        {
            var price = orderService.TLastOrderPrice();
            return Ok(price);
        }
    }
}
