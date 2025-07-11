﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.EntityLayer.Entities;

namespace SignalR.DataAccessLayer.Abstract
{
    public interface IProductDal : IGenericDal<Product>
    {
        List<Product> GetProductsByCategory();

        int ProductCount();

        int ProductCountByCategoryNameDrink();
        int ProductCountByCategoryNameHamburger();

        decimal ProductPriceAvg();

        string ProductNameByMaxPrice();
        string ProductNameByMinPrice();
        decimal AvgProductPriceByHamburger();
    }
}
