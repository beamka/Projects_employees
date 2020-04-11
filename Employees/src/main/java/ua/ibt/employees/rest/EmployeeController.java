package ua.ibt.employees.rest;

import ua.ibt.api.EmployeeAPI;
import ua.ibt.api.ListEmployeeAPI;
import ua.ibt.api.SysMessage;
import ua.ibt.employees.services.EmployeeMapper;
import ua.ibt.employees.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ua.ibt.employees.jpa.Employee;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;
    @Autowired
    EmployeeMapper employeeMapper;

    // Создать/изменить сотрудника
    @RequestMapping(path = "/employee/set", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ListEmployeeAPI newEmployee(@RequestBody EmployeeAPI inData) {
        System.out.println(">>>>>>>>>> EmployeeController start newEmployee >>>>>>>>>>");
        ListEmployeeAPI outData = new ListEmployeeAPI();
        try {
            Employee employee = employeeService.setEmployee(employeeMapper.toInside(inData));
            outData.employees.add(employeeMapper.toOutside(employee));
        } catch (Exception e) {
            outData.retcode = -1;
            outData.sys_message = e.getMessage();
            System.out.println("### Error seting employee ###");
        }
        return outData;
    }

    // Удалить сотрудника
    @RequestMapping(path="/employee/del/{id_employee}",  method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public SysMessage delEmployee(@PathVariable Long id_employee ){
        System.out.println(">>>>>>>>>> EmployeeController start delEmployee >>>>>>>>>>");
        SysMessage outData = new SysMessage();
        try{
            employeeService.delEmployee(id_employee);
        }catch(Exception e){
            outData.retcode = -1;
            outData.sys_message = e.getMessage();
            System.out.println("Error delete employee. Expetion: "+e.getMessage());
        }
        return outData;
    }

    // Получить список сотрудников
    @RequestMapping(path = "/employee/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ListEmployeeAPI getAllEmployees() {
        System.out.println(">>>>>>>>>> EmployeeController start getAllEmployees >>>>>>>>>>");
        ListEmployeeAPI outData = new ListEmployeeAPI();
        employeeService.getAllEmployees().forEach(employee -> outData.employees.add(employeeMapper.toOutside(employee)));
        return outData;
    }


}
