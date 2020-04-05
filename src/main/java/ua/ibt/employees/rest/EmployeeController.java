package ua.ibt.employees.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ua.ibt.employees.jpa.Employee;
import ua.ibt.employees.services.EmployeeService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @RequestMapping(path = "/employee/new", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Employee> newEmployee(@RequestBody Employee inData) {
        System.out.println(">>>>>>>>>> EmployeeController start newEmployee >>>>>>>>>>");
        List<Employee> outData = new ArrayList<>();
        try {
            Employee employee = employeeService.newEmployee(inData);
            outData.add(employee);
        } catch (Exception e) {
            System.out.println("### Error adding new employee ###");
        }
        return outData;
    }

}
