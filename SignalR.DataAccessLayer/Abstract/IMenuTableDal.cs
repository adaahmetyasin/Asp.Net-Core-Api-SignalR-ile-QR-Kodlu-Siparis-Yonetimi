﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.EntityLayer.Entities;

namespace SignalR.DataAccessLayer.Abstract
{
    public interface IMenuTableDal :IGenericDal<MenuTable>
    {
        int MenuTableCount();
    }
}
