using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.EntityLayer.Entities;

namespace SignalR.BusinessLayer.Abstract
{
    public interface IProductService : IGenericService<EntityLayer.Entities.Product>
    {
        List<Product> TGetProductsByCategory();
        int TProductCount();
        int TProductCountByCategoryNameDrink();
        int TProductCountByCategoryNameHamburger();

        decimal TProductPriceAvg();
        string TProductNameByMaxPrice();
        string TProductNameByMinPrice();
    }
}
