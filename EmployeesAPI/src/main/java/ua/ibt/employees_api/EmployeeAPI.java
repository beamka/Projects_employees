package ua.ibt.employees_api;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;
import java.util.List;

@XmlRootElement
public class EmployeeAPI {
    @XmlElement
    public Long idEmployee;

    @XmlElement
    public String iuadEmployee;

    @XmlElement
    public String nameEmployee;

    @XmlElement
    public String surnameEmployee;

    @XmlElement
    public String middlenameEmployee;

    @XmlElement
    public Long idPosition;

    @XmlElement
    public Date birthdayEmployee;

    @XmlElement(required = true)
    public List<ProjectAPI> projects;
}
