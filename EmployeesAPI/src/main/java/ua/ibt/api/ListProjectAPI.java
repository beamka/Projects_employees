package ua.ibt.api;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

@XmlRootElement
public class ListProjectAPI extends SysMessage{
    @XmlElement(required = true)
    public List<ProjectAPI> projects = new ArrayList<>();
}
