﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.EntityLayer.Entities;

namespace SignalR.BusinessLayer.Abstract
{
    public interface IBasketService : IGenericService<Basket>
    {
        List<Basket> TGetBasketsByMenuTableId(int menuTableId);
    }
}
