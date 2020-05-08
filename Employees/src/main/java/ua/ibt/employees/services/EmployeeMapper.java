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

    public Employee toInside(EmployeeAPI inData, boolean bodyFull) {
        Employee employee = null;
        System.out.println("##### idEmployee "+ inData.idEmployee);
        System.out.println("##### iuadEmployee "+ inData.iuadEmployee);
        System.out.println("##### birthdayEmployee "+ inData.birthdayEmployee);
        System.out.println("##### idPosition "+ inData.idPosition);
        System.out.println("##### nameEmployee "+ inData.nameEmployee);
        System.out.println("##### middlenameEmployee "+ inData.middlenameEmployee);
        System.out.println("##### surnameEmployee "+ inData.surnameEmployee);
        System.out.println("##### projects "+ inData.projects);
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
            if(bodyFull) {
                if (inData.projects != null && !inData.projects.isEmpty()) {
                    System.out.println("##### 2 projects " + inData.projects);
                    inData.projects.forEach(project -> {
                        projects.add(projectMapper.toInside(project, false));
                    });
                }
            }
            employee.setProjects(projects);
            System.out.println("##### toInside: result Employee = "+ employee);
        }
        return employee;
    }

    public EmployeeAPI toOutside(Employee inData, boolean bodyFull) {
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
            if(bodyFull) {
                if (inData.getProjects() != null && !inData.getProjects().isEmpty()) {
                    inData.getProjects().forEach(project -> {
                        projects.add(projectMapper.toOutside(project, false));
                    });
                }
            }
            employeeAPI.projects = projects;
            System.out.println("##### toOutside: result EmployeeAPI = "+ employeeAPI);
        }
        return employeeAPI;
    }
}
