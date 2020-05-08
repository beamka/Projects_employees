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
public class ProjectMapper {

    @Autowired
    EmployeeMapper employeeMapper;

    public Project toInside(ProjectAPI inData , boolean bodyFull) {
        Project project = null;
        if(inData != null){
            project = new Project();
            project.setIdProject(inData.idProject);
            project.setNameProject(inData.nameProject);
            project.setDescProject(inData.descProject);

            List<Employee> employees = new ArrayList<>();
            if(bodyFull) {
                if (inData.employees != null && !inData.employees.isEmpty()) {
                    inData.employees.forEach(employee -> {
                        employees.add(employeeMapper.toInside(employee, false));
                    });
                }
            }
            project.setEmployees(employees);
            System.out.println("##### toInside: result Project = "+ project);
        }
        return project;
    }

    public ProjectAPI toOutside(Project inData, boolean bodyFull) {
        ProjectAPI projectAPI = null;
        if (inData != null) {
            projectAPI = new ProjectAPI();
            projectAPI.idProject = inData.getIdProject();
            projectAPI.nameProject = inData.getNameProject();
            projectAPI.descProject = inData.getDescProject();
            List<EmployeeAPI> employees = new ArrayList<>();
            if(bodyFull) {
                if (inData.getEmployees() != null && !inData.getEmployees().isEmpty()) {
                    inData.getEmployees().forEach(employee -> {
                        employees.add(employeeMapper.toOutside(employee, false));
                    });
                }
            }
            projectAPI.employees = employees;
        }
        return projectAPI;
    }
}
