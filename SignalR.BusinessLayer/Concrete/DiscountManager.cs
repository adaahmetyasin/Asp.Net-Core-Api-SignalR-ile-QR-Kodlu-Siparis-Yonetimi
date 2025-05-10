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
    public class DiscountManager : IDiscountService
    {
        private readonly IDiscountDal _discountDal;
        public DiscountManager(IDiscountDal discountDal)
        {
            _discountDal = discountDal;
        }
        public void TDelete(Discount t)
        {
            _discountDal.Delete(t);
        }
        public List<Discount> TGetAll()
        {
            return _discountDal.GetAll();
        }
        public Discount TGetById(int id)
        {
            return _discountDal.GetById(id);
        }
        public void TInsert(Discount t)
        {
            _discountDal.Insert(t);
        }
        public void TUpdate(Discount t)
        {
            _discountDal.Update(t);
        }
    }

}
