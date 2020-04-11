package ua.ibt.employees.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ua.ibt.api.EmployeeAPI;
import ua.ibt.api.ProjectAPI;
import ua.ibt.employees.jpa.Employee;
import ua.ibt.employees.jpa.Project;

import java.util.ArrayList;
import java.util.List;

@Component
public class EmployeeMapper {
    @Autowired
    ProjectMapper projectMapper;

    public Employee toInside(EmployeeAPI inData) {
        Employee employee = null;
        System.out.println("##### inData "+ inData.idEmployee);
        if(inData != null){
            employee = new Employee();
            employee.setIdEmployee(inData.idEmployee);
            employee.setIuadEmployee(inData.iuadEmployee);
            employee.setBirthdayEmployee(inData.birthdayEmployee);
            employee.setIdPosition(inData.idPosition);
            employee.setNameEmployee(inData.nameEmployee);
            employee.setMiddlenameEmployee(inData.middlenameEmployee);
            employee.setSurnameEmployee(inData.surnameEmployee);

            List<Project> projects = new ArrayList<>();
            inData.projects.forEach(project -> {
                projects.add(projectMapper.toInside(project));
            });
            employee.setProjects(projects);
            System.out.println("##### toInside: result Employee = "+ employee);
        }
        return employee;
    }

    public EmployeeAPI toOutside(Employee inData) {
        EmployeeAPI employeeAPI = null;
        if (inData != null) {
            employeeAPI = new EmployeeAPI();
            employeeAPI.idEmployee = inData.getIdEmployee();
            employeeAPI.iuadEmployee = inData.getIuadEmployee();
            employeeAPI.birthdayEmployee = inData.getBirthdayEmployee();
            employeeAPI.idPosition = inData.getIdPosition();
            employeeAPI.nameEmployee = inData.getNameEmployee();
            employeeAPI.middlenameEmployee = inData.getMiddlenameEmployee();
            employeeAPI.surnameEmployee = inData.getSurnameEmployee();

            List<ProjectAPI> projects = new ArrayList<>();
            inData.getProjects().forEach(project -> {
                projects.add(projectMapper.toOutside(project));
            });
            employeeAPI.projects = projects;
            System.out.println("##### toOutside: result EmployeeAPI = "+ employeeAPI);
        }
        return employeeAPI;
    }
}
