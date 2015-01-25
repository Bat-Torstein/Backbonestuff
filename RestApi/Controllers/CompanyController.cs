using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RestApi.Models;
using System.Globalization;

namespace RestApi.Controllers
{
    public class CompanyList
    {
        public List<Company> Companies { get; set;}
        public List<Employee> Employees {get; set;}

        public CompanyList()
        {
            Companies = new List<Company>();
            Companies.Add(new Company {id = 1, name = "Company 1", address = "Address 1"});
            Companies.Add(new Company {id = 2, name = "Company 2", address = "Address 2" });
            Companies.Add(new Company {id = 3, name = "Company 3", address = "Address 3" });
            Companies.Add(new Company {id = 4, name = "Company 4", address = "Address 4" });       
            Companies.Add(new Company {id = 5, name = "Company 5", address = "Address 5"});
            Companies.Add(new Company {id = 6, name = "Company 6", address = "Address 6" });
            Companies.Add(new Company {id = 7, name = "Company 7", address = "Address 7" });
            Companies.Add(new Company {id = 8, name = "Company 8", address = "Address 8" });
            Companies.Add(new Company {id = 9, name = "Company 9", address = "Address 9" });
            Companies.Add(new Company {id = 10, name = "Company 10", address = "Address 10" });

            Employees = new List<Employee>();
            Employees.Add(new Employee { id = 1, name = "Ansatt A", address = "Addresse A", company_id = 1 });
            Employees.Add(new Employee { id = 2, name = "Ansatt B", address = "Addresse B", company_id = 1 });
            Employees.Add(new Employee { id = 3, name = "Ansatt C", address = "Addresse C", company_id = 1 });
            Employees.Add(new Employee { id = 4, name = "Ansatt D", address = "Addresse D", company_id = 2 });
            Employees.Add(new Employee { id = 5, name = "Ansatt E", address = "Addresse E", company_id = 2 });
            Employees.Add(new Employee { id = 6, name = "Ansatt F", address = "Addresse F", company_id = 3 });
            Employees.Add(new Employee { id = 7, name = "Ansatt G", address = "Addresse G", company_id = 4 });
            Employees.Add(new Employee { id = 8, name = "Ansatt H", address = "Addresse H", company_id = 5 });
            Employees.Add(new Employee { id = 9, name = "Ansatt I", address = "Addresse I", company_id = 6 });
            Employees.Add(new Employee { id = 10, name = "Ansatt J", address = "Addresse J", company_id = 7 });
            Employees.Add(new Employee { id = 11, name = "Ansatt K", address = "Addresse K", company_id = 8 });
            Employees.Add(new Employee { id = 12, name = "Ansatt L", address = "Addresse L", company_id = 9 });
            Employees.Add(new Employee { id = 13, name = "MOR Di!", address = "MorDI", company_id = 10 });
        }
    }

    public class CompanyController : ApiController
    {
        private CompanyList companyList = new CompanyList();

        [HttpGet]
        public IEnumerable<Company> GetCompanies()
        {
            return companyList.Companies;
        }

        [HttpGet]
        // GET Company/5
        public HttpResponseMessage GetCompany(int id)
        {
            var company = companyList.Companies.Where(c => c.id == id);
            if (company.Count() > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, company);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }

        [HttpGet]
        public HttpResponseMessage Employee(int companyId, int Id)
        {
            var employee = companyList.Employees.Where(e => e.company_id == companyId && e.id == Id);

            if (employee.Count() > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, employee.First());
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }

        [HttpPut]
        public HttpResponseMessage Employee(Employee employee)
        {
            var existingEmployee = companyList.Employees.Where(e => e.id == employee.id);

            if (existingEmployee.Count() == 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            var existing = existingEmployee.First();
            existing.clone(employee);

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public HttpResponseMessage Employee(int id)
        {
            var employee = companyList.Employees.Where(e => e.id == id);

            companyList.Employees.Remove(employee.First());

            return Request.CreateResponse(HttpStatusCode.OK, employee.First());
        }

        [HttpGet]
        public IEnumerable<Employee> Employees(int companyId)
        {
            var employees = companyList.Employees.Where(e => e.company_id == companyId);

            return employees.ToList();
        }

        [HttpPost]
        public HttpResponseMessage Employees(int companyId, Employee employee)
        {
            employee.company_id = companyId;
            employee.id = companyList.Employees.Count;

            companyList.Employees.Add(employee);

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // PUT Company/5
        public HttpResponseMessage PutCompany(int id, Company company)
        {
            var existingCompany = companyList.Companies.Where(c => c.id == id);
            if (existingCompany != null)
            {
                existingCompany.First().clone(company);
                return Request.CreateResponse(HttpStatusCode.OK);
            }

            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }

        // POST Company
        public HttpResponseMessage PostCompany(int id, Company company)
        {
            companyList.Companies.Add(company);
            
            return Request.CreateResponse(HttpStatusCode.OK, company);
        }
    }
}

