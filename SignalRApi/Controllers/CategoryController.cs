﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.BusinessLayer.Abstract;
using SignalR.DtoLayer.CategoryDto;
using SignalR.EntityLayer.Entities;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        private readonly IMapper _mapper;

        public CategoryController(ICategoryService categoryService, IMapper mapper)
        {
            _categoryService = categoryService;
            _mapper = mapper;
        }

        [HttpGet]

        public IActionResult CategoryList()
        {
            var value = _mapper.Map<List<ResultCategoryDto>>(_categoryService.TGetAll());
            return Ok(value);
        }


        [HttpGet("CategoryCount")]
        public IActionResult CategoryCount()
        {
            var value = _categoryService.TCategoryCount();
            return Ok(value);
        }
        [HttpGet("ActiveCategoryCount")]
        public IActionResult ActiveCategoryCount()
        {
            var value = _categoryService.TActiveCategoryCount();
            return Ok(value);
        }
        [HttpGet("PassiveCategoryCount")]
        public IActionResult PassiveCategoryCount()
        {
            var value = _categoryService.TPassiveCategoryCount();
            return Ok(value);
        }

        [HttpPost]

        public IActionResult CreateCategory(CreateCategoryDto createCategoryDto)
        {
            _categoryService.TInsert(new Category()
            {
                CategoryName = createCategoryDto.CategoryName,
                CategoryStatus = true
            });
            return Ok("Category Added");
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteCategory(int id)
        {
            var value = _categoryService.TGetById(id);
            _categoryService.TDelete(value);
            return Ok("Category Deleted");
        }

        [HttpGet("{id}")]

        public IActionResult GetCategory(int id)
        {
            var value = _categoryService.TGetById(id);
            return Ok(value);
        }

        [HttpPut]

        public IActionResult UpdateCategory(UpdateCategoryDto updateCategoryDto)
        {
            _categoryService.TUpdate(new Category()
            {
                CategoryName = updateCategoryDto.CategoryName,
                CategoryID = updateCategoryDto.CategoryID,
                CategoryStatus = updateCategoryDto.CategoryStatus
            });
            return Ok("Category Updated");
        }
    }
}
