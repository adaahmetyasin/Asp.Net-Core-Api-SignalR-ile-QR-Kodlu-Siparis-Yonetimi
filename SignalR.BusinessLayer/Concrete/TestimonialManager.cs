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
    public class TestimonialManager : ITestimonialService
    {
        private readonly ITestimonialDal _testimonialDal;
        public TestimonialManager(ITestimonialDal testimonialDal)
        {
            _testimonialDal = testimonialDal;
        }
        public void TDelete(Testimonial t)
        {
            _testimonialDal.Delete(t);
        }
        public List<Testimonial> TGetAll()
        {
            return _testimonialDal.GetAll();
        }
        public Testimonial TGetById(int id)
        {
            return _testimonialDal.GetById(id);
        }
        public void TInsert(Testimonial t)
        {
            _testimonialDal.Insert(t);
        }
        public void TUpdate(Testimonial t)
        {
            _testimonialDal.Update(t);
        }
    }

}
