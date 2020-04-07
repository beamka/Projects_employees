package ua.ibt.employees.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ua.ibt.employees.jpa.Employee;
import ua.ibt.employees.jpa.Project;
import ua.ibt.employees_api.EmployeeAPI;
import ua.ibt.employees_api.ProjectAPI;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProjectMapper {

    @Autowired
    EmployeeMapper employeeMapper;

    public Project toInside(ProjectAPI inData) {
        Project project = null;
        if(inData != null){
            project = new Project();
            project.setIdProject(inData.idProject);
            project.setNameProject(inData.nameProject);
            project.setDescProject(inData.descProject);

            List<Employee> employees = new ArrayList<>();
            inData.employees.forEach(employee -> {
                employees.add(employeeMapper.toInside(employee));
            });
            project.setEmployees(employees);
            System.out.println("##### toInside: result Project = "+ project);
        }
        return project;
    }

    public ProjectAPI toOutside(Project inData) {
        ProjectAPI projectAPI = null;
        if (inData != null) {
            projectAPI = new ProjectAPI();
            projectAPI.idProject = inData.getIdProject();
            projectAPI.nameProject = inData.getNameProject();
            projectAPI.descProject = inData.getDescProject();


            List<EmployeeAPI> employees = new ArrayList<>();
            inData.getEmployees().forEach(employee -> {
                employees.add(employeeMapper.toOutside(employee));
            });
            projectAPI.employees = employees;
        }
        return projectAPI;
    }
}
