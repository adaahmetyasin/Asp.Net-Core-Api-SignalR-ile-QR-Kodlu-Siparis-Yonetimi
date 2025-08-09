using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.BusinessLayer.Abstract;
using SignalR.DtoLayer.MenuTableDto;
using SignalR.EntityLayer.Entities;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuTablesController : ControllerBase
    {
        private readonly IMenuTableService _menuTableService;
        public MenuTablesController(IMenuTableService menuTableService)
        {
            _menuTableService = menuTableService;
        }
        [HttpGet("MenuTableCount")]
        public IActionResult MenuTableCount()
        {
            return Ok(_menuTableService.TMenuTableCount());
        }
        [HttpGet]
        public IActionResult MenuTableList()
        {
            var result = _menuTableService.TGetAll();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPost]
        public IActionResult CreateMenuTable(CreateMenuTableDto createMenuTableDto)
        {
            MenuTable menuTable = new MenuTable()
            {
                Name = createMenuTableDto.Name,
                Status = createMenuTableDto.Status

            };
            _menuTableService.TInsert(menuTable);
            return Ok("başarılı şekilde masa eklendi");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMenuTable(int id)
        {
            var menuTable = _menuTableService.TGetById(id);
            if (menuTable == null)
            {
                return NotFound();
            }
            _menuTableService.TDelete(menuTable);
            return Ok("başarılı şekilde masa silindi");
        }

        [HttpPut]
        public IActionResult UpdateMenuTable(UpdateMenuTableDto updateMenuTableDto)
        {
            MenuTable menuTable = new MenuTable()
            {
                Name = updateMenuTableDto.Name,
                Status = false,
                MenuTableID = updateMenuTableDto.MenuTableID

            };
            _menuTableService.TUpdate(menuTable);
            return Ok("başarılı şekilde masa güncellendi");
        }

        [HttpGet("{id}")]
        public IActionResult GetMenuTable(int id)
        {
            var menuTable = _menuTableService.TGetById(id);
            if (menuTable == null)
            {
                return NotFound();
            }
            return Ok(menuTable);
        }
    }
}
