﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalR.BusinessLayer.Abstract;
using SignalR.DataAccessLayer.Abstract;
using SignalR.EntityLayer.Entities;

namespace SignalR.BusinessLayer.Concrete
{
    public class MenuTableManager : IMenuTableService
    {
        private readonly IMenuTableDal _menuTableDal;

        public MenuTableManager(IMenuTableDal menuTableDal)
        {
            _menuTableDal = menuTableDal;
        }

        public void TDelete(MenuTable t)
        {
            throw new NotImplementedException();
        }

        public List<MenuTable> TGetAll()
        {
            throw new NotImplementedException();
        }

        public MenuTable TGetById(int id)
        {
            throw new NotImplementedException();
        }

        public void TInsert(MenuTable t)
        {
            throw new NotImplementedException();
        }

        public int TMenuTableCount()
        {
            return _menuTableDal.MenuTableCount();
        }

        public void TUpdate(MenuTable t)
        {
            throw new NotImplementedException();
        }
    }
}
