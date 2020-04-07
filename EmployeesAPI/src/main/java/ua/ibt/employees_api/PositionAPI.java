package ua.ibt.employees_api;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement
public class PositionAPI {
    @XmlElement
    public Long idPosition;

    @XmlElement
    public String namePosition;

    @XmlElement
    public String descPosition;

    @XmlElement(required = true)
    public List<EmployeeAPI> employees;
}
