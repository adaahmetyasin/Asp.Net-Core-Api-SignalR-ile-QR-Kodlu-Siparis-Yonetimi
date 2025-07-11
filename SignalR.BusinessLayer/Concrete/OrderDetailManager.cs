﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.BusinessLayer.Abstract;
using SignalR.DataAccessLayer.Abstract;
using SignalR.EntityLayer.Entities;

namespace SignalR.BusinessLayer.Concrete
{
    public class OrderDetailManager : IOrderDetailService
    {
        private readonly IOrderDetailDal _orderDetailDal;

        public OrderDetailManager(IOrderDetailDal orderDetailDal)
        {
            _orderDetailDal = orderDetailDal;
        }

        public void TDelete(OrderDetail t)
        {
            throw new NotImplementedException();
        }

        public List<OrderDetail> TGetAll()
        {
            throw new NotImplementedException();
        }

        public OrderDetail TGetById(int id)
        {
            throw new NotImplementedException();
        }

        public void TInsert(OrderDetail t)
        {
            throw new NotImplementedException();
        }

        public void TUpdate(OrderDetail t)
        {
            throw new NotImplementedException();
        }
    }
}
