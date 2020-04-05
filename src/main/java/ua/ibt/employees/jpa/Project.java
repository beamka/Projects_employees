package ua.ibt.employees.jpa;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "project")
public class Project implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_project")
    private Long idProject;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 40)
    @Column(name = "name_project")
    private String nameProject;

    @Size(max = 200)
    @Column(name = "desc_project")
    private String descProject;

    @ManyToMany
    private List<Employee> employees;

    public Project() {

    }

    public Project(Long idProject) {
        this.idProject = idProject;
    }

    public Project(Long idProject, String nameProject, String descProject) {
        this.idProject = idProject;
        this.nameProject = nameProject;
        this.descProject = descProject;
    }

    public Long getIdProject() {
        return idProject;
    }

    public void setIdProject(Long idProject) {
        this.idProject = idProject;
    }

    public String getNameProject() {
        return nameProject;
    }

    public void setNameProject(String nameProject) {
        this.nameProject = nameProject;
    }

    public String getDescProject() {
        return descProject;
    }

    public void setDescProject(String descProject) {
        this.descProject = descProject;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }
}
