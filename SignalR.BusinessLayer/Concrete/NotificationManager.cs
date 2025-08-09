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
    public class NotificationManager : INotificationService
    {
        private readonly INotificationDal _notificationDal;
        public NotificationManager(INotificationDal notificationDal)
        {
            _notificationDal = notificationDal;
        }
        public void TDelete(Notification t)
        {
            _notificationDal.Delete(t);
        }

        public List<Notification> TGetAll()
        {
            return _notificationDal.GetAll();
        }

        public List<Notification> TGetAllNotificationsByStatusFalse()
        {
            return _notificationDal.GetAllNotificationsByStatusFalse();
        }

        public Notification TGetById(int id)
        {
            return _notificationDal.GetById(id);
        }

        public void TInsert(Notification t)
        {
            _notificationDal.Insert(t);
        }

        public int TNotificationCountByStatusFalse()
        {
            return _notificationDal.NotificationCountByStatusFalse();
        }

        public void TUpdate(Notification t)
        {
            _notificationDal.Update(t);
        }
        public void TNotificationStatusChangeToTrue(int id)
        {
            _notificationDal.NotificationStatusChangeToTrue(id);
        }
        public void TNotificationStatusChangeToFalse(int id)
        {
            _notificationDal.NotificationStatusChangeToFalse(id);
        }
    }
}

