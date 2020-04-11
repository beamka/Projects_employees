package ua.ibt.api;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement
public class ProjectAPI extends SysMessage{
    @XmlElement
    public Long idProject;

    @XmlElement
    public String nameProject;

    @XmlElement
    public String descProject;

    @XmlElement(required = true)
    public List<EmployeeAPI> employees;
}
