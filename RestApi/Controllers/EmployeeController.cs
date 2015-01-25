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
    public class EmployeeList
    {
        public List<Employee> Employees { get; set; }

        public EmployeeList()
        {
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

    public class EmployeeController : ApiController
    {
        private EmployeeList employeeList = new EmployeeList();

        // GET
        public IEnumerable<Employee> GetEmployees()
        {
            return employeeList.Employees.ToList();
        }

        // GET
        public HttpResponseMessage GetEmployee(int id)
        {
            var employee = employeeList.Employees.Where(e => e.id == id);
            if (employee != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, employee);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }

        // PUT Employee/5
        public HttpResponseMessage PutCompany(int id, Employee employee)
        {
            var existingEmployee = employeeList.Employees.Where(e => e.id == employee.id);
            if (existingEmployee != null)
            {
                existingEmployee.First().clone(employee);

                return Request.CreateResponse(HttpStatusCode.OK);
            }

            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }

        // POST Company
        public HttpResponseMessage PostCompany(int id, Employee employee)
        {
            employee.id = employeeList.Employees.Count;
            employeeList.Employees.Add(employee);

            return Request.CreateResponse(HttpStatusCode.OK, employee);
        }
    }
}

