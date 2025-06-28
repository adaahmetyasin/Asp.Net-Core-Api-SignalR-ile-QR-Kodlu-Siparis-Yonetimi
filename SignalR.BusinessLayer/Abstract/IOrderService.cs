using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.BusinessLayer.Abstract
{
    public interface IOrderService : IGenericService<SignalR.EntityLayer.Entities.Order>
    {
        int TTotalOrderCount();
        int TActiveOrderCount();
    }
}
