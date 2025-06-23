using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.BusinessLayer.Abstract;
using SignalR.EntityLayer.Entities;

namespace SignalR.BusinessLayer.Concrete
{
    public class OrderManager : IOrderService
    {
        private readonly IOrderService _orderService;

        public OrderManager(IOrderService orderService)
        {
            _orderService = orderService;
        }

        public void TDelete(Order t)
        {
            throw new NotImplementedException();
        }

        public List<Order> TGetAll()
        {
            throw new NotImplementedException();
        }

        public Order TGetById(int id)
        {
            throw new NotImplementedException();
        }

        public void TInsert(Order t)
        {
            throw new NotImplementedException();
        }

        public void TUpdate(Order t)
        {
            throw new NotImplementedException();
        }
    }
}
