using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignalR.BusinessLayer.Abstract;
using SignalR.DataAccessLayer.Concrete;
using SignalR.DtoLayer.ProductDto;
using SignalR.EntityLayer.Entities;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;
        public ProductController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        [HttpGet]

        public IActionResult ProductList()
        {
            var value = _mapper.Map<List<ResultProductDto>>(_productService.TGetAll());
            return Ok(value);
        }
        [HttpGet("ProductCount")]
        public IActionResult ProductCount()
        {
            var value = _productService.TProductCount();
            return Ok(value);
        }

        [HttpGet("ProductNameByMaxPrice")]
        public IActionResult ProductNameByMaxPrice()
        {
            var value = _productService.TProductNameByMaxPrice();
            return Ok(value);
        }
        [HttpGet("ProductNameByMinPrice")]
        public IActionResult ProductNameByMinPrice()
        {
            var value = _productService.TProductNameByMinPrice();
            return Ok(value);
        }

        [HttpGet("ProductCountByHamburger")]
        public IActionResult ProductCountByHamburger()
        {
            var value = _productService.TProductCountByCategoryNameHamburger();
            return Ok(value);
        }
        [HttpGet("ProductCountByDrink")]
        public IActionResult ProductCountByDrink()
        {
            var value = _productService.TProductCountByCategoryNameDrink();
            return Ok(value);
        }

        [HttpGet("ProductPriceAvg")]
        public IActionResult ProductPriceAvg()
        {
            var value = _productService.TProductPriceAvg();
            return Ok(value);
        }

        [HttpGet("GetProductsByCategory")]
        public IActionResult GetProductsByCategory()
        {
            var context = new SignalRContext();
            var values = context.Products.Include(x => x.Category).Select(y => new ResultProductWithCategory
            {
                ProductDescription = y.ProductDescription,
                ProductIMG = y.ProductIMG,
                ProductName = y.ProductName,
                ProductID = y.ProductID,
                ProductStatus = y.ProductStatus,
                ProductPrice = y.ProductPrice,
                CategoryName = y.Category.CategoryName
            });
            return Ok(values.ToList());
        }

        [HttpPost]

        public IActionResult CreateProduct(CreateProductDto createProductDto)
        {
            _productService.TInsert(new Product()
            {
                ProductDescription = createProductDto.ProductDescription,
                ProductIMG = createProductDto.ProductIMG,
                ProductName = createProductDto.ProductName,
                ProductPrice = createProductDto.ProductPrice,
                ProductStatus = createProductDto.ProductStatus,
                CategoryID = createProductDto.CategoryID

            });
            return Ok("Product Added");
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteProduct(int id)
        {
            var value = _productService.TGetById(id);
            _productService.TDelete(value);
            return Ok("Product Deleted");
        }

        [HttpGet("{id}")]

        public IActionResult GetProduct(int id)
        {
            var value = _productService.TGetById(id);
            return Ok(value);
        }

        [HttpPut]

        public IActionResult UpdateProduct(UpdateProductDto updateProductDto)
        {
            _productService.TUpdate(new Product()
            {
                ProductID = updateProductDto.ProductID,
                ProductDescription = updateProductDto.ProductDescription,
                ProductIMG = updateProductDto.ProductIMG,
                ProductName = updateProductDto.ProductName,
                ProductPrice = updateProductDto.ProductPrice,
                ProductStatus = updateProductDto.ProductStatus,
                CategoryID = updateProductDto.CategoryID

            });
            return Ok("Product Updated");
        }
    }
}
