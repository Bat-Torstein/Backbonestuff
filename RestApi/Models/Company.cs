using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestApi.Models
{
    public class Company
    {
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }

        public Company clone(Company b) {
            this.name = b.name;
            this.address = b.address;

            return this;
        }
       
    }
}