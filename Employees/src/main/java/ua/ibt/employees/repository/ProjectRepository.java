package ua.ibt.employees.repository;

import org.springframework.data.repository.CrudRepository;
import ua.ibt.employees.jpa.Project;

import java.util.List;

public interface ProjectRepository extends CrudRepository<Project, Long> {
    @Override
    List<Project> findAll();
    Project findByIdProject(Long idProject);
    void deleteByIdProject(Long idProject);
}
