package ua.ibt.employees.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ua.ibt.api.*;
import ua.ibt.employees.jpa.Project;
import ua.ibt.employees.services.ProjectMapper;
import ua.ibt.employees.services.ProjectService;

@RestController
public class ProjectController {
    @Autowired
    ProjectService projectService;
    @Autowired
    ProjectMapper projectMapper;

    // Создать/изменить проект
    @RequestMapping(path = "/project/set", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ListProjectAPI newProject(@RequestBody ProjectAPI inData) {
        System.out.println(">>>>>>>>>> ProjectController start newProject >>>>>>>>>>");
        ListProjectAPI outData = new ListProjectAPI();
        try {
            Project project = projectService.setProject(projectMapper.toInside(inData, true));
            outData.projects.add(projectMapper.toOutside(project, true));
        } catch (Exception e) {
            outData.retcode = -1;
            outData.sys_message = e.getMessage();
            System.out.println("### Error seting project ###");
        }
        return outData;
    }

    // Удалить проект
    @RequestMapping(path="/project/del/{id_project}",  method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public SysMessage delProject(@PathVariable Long id_project){
        System.out.println(">>>>>>>>>> EmployeeController start delProject >>>>>>>>>>");
        SysMessage outData = new SysMessage();
        try{
            projectService.delProject(id_project);
        }catch(Exception e){
            outData.retcode = -1;
            outData.sys_message = e.getMessage();
            System.out.println("Error delete project. Expetion: "+e.getMessage());
        }
        return outData;
    }

    // Получить список проектотв
    @RequestMapping(path = "/project/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ListProjectAPI getAllProject() {
        System.out.println(">>>>>>>>>> ProjectController start getAllProject >>>>>>>>>>");
        ListProjectAPI outData = new ListProjectAPI();
        projectService.getAllProject().forEach(project -> outData.projects.add(projectMapper.toOutside(project, true)));
        return outData;
    }
}
