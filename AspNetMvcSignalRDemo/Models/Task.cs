using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetMvcSignalRDemo.Models
{
    public class Task
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public bool Completed { get; set; }
    }
}