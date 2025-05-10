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
    public class FeatureManager : IFeatureService
    {
        private readonly IFeatureDal _featureDal;
        public FeatureManager(IFeatureDal featureDal)
        {
            _featureDal = featureDal;
        }
        public void TDelete(Feature t)
        {
            _featureDal.Delete(t);
        }
        public List<Feature> TGetAll()
        {
            return _featureDal.GetAll();
        }
        public Feature TGetById(int id)
        {
            return _featureDal.GetById(id);
        }
        public void TInsert(Feature t)
        {
            _featureDal.Insert(t);
        }
        public void TUpdate(Feature t)
        {
            _featureDal.Update(t);
        }
    }
    
}
