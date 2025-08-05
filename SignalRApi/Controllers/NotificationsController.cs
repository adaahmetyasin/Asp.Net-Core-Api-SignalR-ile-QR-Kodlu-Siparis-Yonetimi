using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.BusinessLayer.Abstract;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly INotificationService _notificationService;
        public NotificationsController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }
        [HttpGet]
        public IActionResult GetAllNotifications()
        {
            var notifications = _notificationService.TGetAll();
            return Ok(notifications);
        }

        [HttpGet("NotificationCountByStatusFalse")]
        public IActionResult NotificationCountByStatusFalse()
        {
            var count = _notificationService.TNotificationCountByStatusFalse();
            return Ok(count);
        }
        [HttpGet("GetAllNotificationsByStatusFalse")]
        public IActionResult GetAllNotificationsByStatusFalse()
        {
            var notifications = _notificationService.TGetAllNotificationsByStatusFalse();
            return Ok(notifications);
        }
    }
}
