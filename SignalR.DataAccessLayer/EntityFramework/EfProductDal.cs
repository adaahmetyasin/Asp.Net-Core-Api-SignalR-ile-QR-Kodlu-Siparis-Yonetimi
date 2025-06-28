using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SignalR.DataAccessLayer.Abstract;
using SignalR.DataAccessLayer.Concrete;
using SignalR.DataAccessLayer.Repositories;
using SignalR.EntityLayer.Entities;

namespace SignalR.DataAccessLayer.EntityFramework
{
    public class EfProductDal : GenericRepository<Product>, IProductDal
    {
        public EfProductDal(SignalRContext context) : base(context)
        {
        }

        public decimal AvgProductPriceByHamburger()
        {
            var context = new SignalRContext();
            return context.Products
                .Where(x => x.Category.CategoryName == "Hamburger")
                .Average(x => x.ProductPrice);
        }

        public List<Product> GetProductsByCategory()
        {
            var context = new SignalRContext();
            var values = context.Products.Include(x => x.Category).ToList();
            return values;

        }

        public int ProductCount()
        {
            using var context = new SignalRContext();
            return context.Products.Count();
        }

        public int ProductCountByCategoryNameDrink()
        {
            using var context = new SignalRContext();
            return context.Products.Count(x => x.Category.CategoryName == "İçecek");
        }

        public int ProductCountByCategoryNameHamburger()
        {
            using var context = new SignalRContext();
            return context.Products.Count(x => x.Category.CategoryName == "Hamburger");
        }

        public string ProductNameByMaxPrice()
        {
            using var context = new SignalRContext();
            return context.Products.OrderByDescending(x => x.ProductPrice).Select(x => x.ProductName).FirstOrDefault();
        }

        public string ProductNameByMinPrice()
        {
            using var context = new SignalRContext();
            return context.Products.OrderBy(x => x.ProductPrice).Select(x => x.ProductName).FirstOrDefault();
        }

        public decimal ProductPriceAvg()
        {
            using var context = new SignalRContext();
            return context.Products.Average(x => x.ProductPrice);
        }
    }
    
    
}
