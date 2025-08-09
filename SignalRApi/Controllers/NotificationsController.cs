using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.BusinessLayer.Abstract;
using SignalR.DtoLayer.NotificationDto;
using SignalR.EntityLayer.Entities;

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
        [HttpPost]
        public IActionResult CreateNotification(CreateNotificationDto createNotificationDto)
        {
            Notification notification = new()
            {
                Type = createNotificationDto.Type,
                Icon = createNotificationDto.Icon,
                Description = createNotificationDto.Description,
                Date = createNotificationDto.Date,
                Status = false
            };
            _notificationService.TInsert(notification);
            return Ok("Notification created successfully.");
        }

        [HttpDelete]
        public IActionResult DeleteNotification(int id)
        {
            var notification = _notificationService.TGetById(id);
            if (notification == null)
            {
                return NotFound("Notification not found.");
            }
            _notificationService.TDelete(notification);
            return Ok("Notification deleted successfully.");
        }

        [HttpGet("{id}")]
        public IActionResult GetNotificationById(int id)
        {
            var notification = _notificationService.TGetById(id);
            if (notification == null)
            {
                return NotFound("Notification not found.");
            }
            return Ok(notification);
        }

        [HttpPut]
        public IActionResult UpdateNotification(UpdateNotificationDto updateNotificationDto)
        {
            var notification = _notificationService.TGetById(updateNotificationDto.NotificationId);
            if (notification == null)
            {
                return NotFound("Notification not found.");
            }
            notification.Type = updateNotificationDto.Type;
            notification.Icon = updateNotificationDto.Icon;
            notification.Description = updateNotificationDto.Description;
            notification.Date = updateNotificationDto.Date;
            notification.Status = updateNotificationDto.Status;
            _notificationService.TUpdate(notification);
            return Ok("Notification updated successfully.");
        }

    }
}
