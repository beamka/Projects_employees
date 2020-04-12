package ua.ibt.employees.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.ibt.employees.jpa.Employee;
import ua.ibt.employees.jpa.Project;
import ua.ibt.employees.repository.ProjectRepository;
import ua.ibt.employees.utils.IdGenerator;

import java.util.List;

@Service
public class ProjectService {
    @Autowired
    ProjectRepository projectRepository;

    public Project setProject(Project inData) {
        Long idProject = inData.getIdProject();
        if (idProject == null) {
            System.out.println("##### Create new ID for Project");
            Long newId;
            do {
                newId = IdGenerator.newId();
            } while (projectRepository.findByIdProject(newId) != null);
            inData.setIdProject(newId);
        }

        Project outData = projectRepository.save(inData);

        System.out.println("##### Set nameProject: "+outData.getNameProject()+"  ID: "+outData.getIdProject());
        return outData;
    }

    public List<Project> getAllProject() {
        return projectRepository.findAll();
    }

    public void delProject(Long id) {
        Project project = projectRepository.findByIdProject(id);
        if(project!=null){
            System.out.println("##### Deleting project "+project.getNameProject() + " with id " + project.getIdProject());
            projectRepository.deleteByIdProject(id);
        }
    }

}
