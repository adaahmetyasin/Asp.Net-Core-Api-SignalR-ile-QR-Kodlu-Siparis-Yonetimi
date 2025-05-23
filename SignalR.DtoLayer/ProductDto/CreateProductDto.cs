﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.DtoLayer.ProductDto
{
    public class CreateProductDto
    {
      
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public decimal ProductPrice { get; set; }
        public bool ProductStatus { get; set; }
        public string ProductIMG { get; set; }
        public int CategoryID { get; set; }
    }
}
