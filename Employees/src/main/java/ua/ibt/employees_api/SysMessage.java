package ua.ibt.employees_api;

import javax.xml.bind.annotation.XmlElement;

public class SysMessage {
    @XmlElement(required = true)
    public Integer retcode = 0;
    @XmlElement(required = true)
    public String apiVersion = "1.0.0";
    @XmlElement(required = false)
    public String sys_message;
}
