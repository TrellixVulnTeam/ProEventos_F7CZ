using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        private readonly DataContext Context;
        public EventosController(DataContext context)
        {
            this.Context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return Context.Eventos;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id) 
        {
           return Context.Eventos.Where(value => value.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post!";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put = {id}";
        }

        [HttpDelete]
        public string Delete()
        {
            return "Exemplo de Delete!";
        }
    }
}
