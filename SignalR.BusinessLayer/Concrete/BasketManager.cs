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
    public class BasketManager : IBasketService
    {
        private readonly IBasketDal _basketDal;
        public BasketManager(IBasketDal basketDal)
        {
            _basketDal = basketDal;
        }
        public void TDelete(Basket t)
        {
            _basketDal.Delete(t);
        }

        public List<Basket> TGetAll()
        {
            throw new NotImplementedException();
        }

        public List<Basket> TGetBasketsByMenuTableId(int menuTableId)
        {
            return _basketDal.GetBasketsByMenuTableId(menuTableId);
        }

        public Basket TGetById(int id)
        {
            return _basketDal.GetById(id);
        }

        public void TInsert(Basket t)
        {
            _basketDal.Insert(t);
        }

        public void TUpdate(Basket t)
        {
            throw new NotImplementedException();
        }
    }
}
