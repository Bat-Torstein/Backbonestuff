using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestApi.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string title { get; set; }
        public int company_id { get; set; }

        public Employee clone(Employee b) {
            this.name = b.name;
            this.address = b.address;
            this.title = b.title;
            this.company_id = b.company_id;

            return this;
        }
    }
}