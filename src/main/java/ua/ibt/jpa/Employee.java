package ua.ibt.employees.jpa;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "employee")
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Basic(optional = false)
    @Column(name = "id_employee")
    private Long idEmployee;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 8)
    @Column(name = "iuad")
    private String iuadEmployee;

    @Size(max = 20)
    @Column(name = "name")
    private String nameEmployee;

    @Size(max = 20)
    @Column(name = "surname")
    private String surnameEmployee;

    @Size(max = 20)
    @Column(name = "middlename")
    private String middlenameEmployee;

    @Column(name = "birthday")
    @Temporal(TemporalType.DATE)
    private Date birthdayEmployee;

    @Column(name = "id_position")
    private Long idPosition;

    public Employee() {
    }

    public Employee(Long idEmployee) {
        this.idEmployee = idEmployee;
    }

    public Employee(Long idEmployee, String iuadEmployee, String nameEmployee, String surnameEmployee, String middlenameEmployee, Date birthdayEmployee, Long idPosition) {
        super();
        this.idEmployee = idEmployee;
        this.iuadEmployee = iuadEmployee;
        this.nameEmployee = nameEmployee;
        this.surnameEmployee = surnameEmployee;
        this.middlenameEmployee = middlenameEmployee;
        this.birthdayEmployee = birthdayEmployee;
        this.idPosition = idPosition;
    }

    public Long getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(Long idEmployee) {
        this.idEmployee = idEmployee;
    }

    public String getIuadEmployee() {
        return iuadEmployee;
    }

    public void setIuadEmployee(String iuadEmployee) {
        this.iuadEmployee = iuadEmployee;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getSurnameEmployee() {
        return surnameEmployee;
    }

    public void setSurnameEmployee(String surnameEmployee) {
        this.surnameEmployee = surnameEmployee;
    }

    public String getMiddlenameEmployee() {
        return middlenameEmployee;
    }

    public void setMiddlenameEmployee(String middlenameEmployee) {
        this.middlenameEmployee = middlenameEmployee;
    }

    public Date getBirthdayEmployee() {
        return birthdayEmployee;
    }

    public void setBirthdayEmployee(Date birthdayEmployee) {
        this.birthdayEmployee = birthdayEmployee;
    }

    public Long getIdPosition() {
        return idPosition;
    }

    public void setIdPosition(Long idPosition) {
        this.idPosition = idPosition;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPosition != null ? idPosition.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Employee)) {
            return false;
        }
        Employee other = (Employee) object;
        return !((this.idEmployee == null && other.idEmployee != null)
                || (this.idEmployee != null && !this.idEmployee.equals(other.idEmployee)));
    }

    @Override
    public String toString() {
        return "ua.ibt.employees.jpa.Employee[ idEmployee=" + idEmployee + " ]";
    }


}
