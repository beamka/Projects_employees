package ua.ibt.employees.jpa;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "position")
public class Position implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_position")
    private Long idPosition;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "name_position")
    private String namePosition;

    @Size(max = 200)
    @Column(name = "desc_position")
    private String descPosition;

    @ManyToMany
    private List<Employee> employees;

    public Position() {

    }

    public Position(Long idPosition) {
        this.idPosition = idPosition;
    }

    public Position(Long idPosition, String namePosition, String descPosition) {
        this.idPosition = idPosition;
        this.namePosition = namePosition;
        this.descPosition = descPosition;
    }

    public Long getIdPosition() {
        return idPosition;
    }

    public void setIdPosition(Long idPosition) {
        this.idPosition = idPosition;
    }

    public String getNamePosition() {
        return namePosition;
    }

    public void setNamePosition(String namePosition) {
        this.namePosition = namePosition;
    }

    public String getDescPosition() {
        return descPosition;
    }

    public void setDescPosition(String descPosition) {
        this.descPosition = descPosition;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPosition != null ? idPosition.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Position)) {
            return false;
        }
        Position other = (Position) object;
        return !((this.idPosition == null && other.idPosition != null)
                || (this.idPosition != null && !this.idPosition.equals(other.idPosition)));
    }

    @Override
    public String toString() {
        return "ua.ibt.employees.jpa.Position[ idPosition=" + idPosition + " ]";
    }
}
