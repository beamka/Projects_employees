package ua.ibt.employees_api;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

@XmlRootElement
public class ListEmployeeAPI extends SysMessage{
    @XmlElement(required = true)
    public List<EmployeeAPI> employees = new ArrayList<>();
}
