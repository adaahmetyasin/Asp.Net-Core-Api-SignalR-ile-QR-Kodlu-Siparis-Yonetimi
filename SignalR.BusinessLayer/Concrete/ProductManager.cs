using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.BusinessLayer.Abstract;
using SignalR.DataAccessLayer.Abstract;
using SignalR.EntityLayer.Entities;

namespace SignalR.BusinessLayer.Concrete
{
    public class ProductManager : IProductService
    {
        private readonly IProductDal _productDal;
        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }
        public void TDelete(Product t)
        {
            _productDal.Delete(t);
        }
        public List<Product> TGetAll()
        {
            return _productDal.GetAll();
        }
        public Product TGetById(int id)
        {
            return _productDal.GetById(id);
        }

        public List<Product> TGetProductsByCategory()
        {
           return _productDal.GetProductsByCategory();
        }

        public void TInsert(Product t)
        {
            _productDal.Insert(t);
        }

        public int TProductCount()
        {
            return _productDal.ProductCount();
        }

        public int TProductCountByCategoryNameDrink()
        {
            return _productDal.ProductCountByCategoryNameDrink();
        }

        public int TProductCountByCategoryNameHamburger()
        {
            return _productDal.ProductCountByCategoryNameHamburger();
        }

        public void TUpdate(Product t)
        {
            _productDal.Update(t);
        }
    }

}
