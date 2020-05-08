package ua.ibt.employees.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.ibt.employees.jpa.Employee;
import ua.ibt.employees.repository.EmployeeRepository;
import ua.ibt.employees.utils.IdGenerator;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
//    @Autowired
//    PositionRepository positionRepository;

    public Employee setEmployee(Employee inData) {
        Long idEmployee = inData.getIdEmployee();
        if (idEmployee == null) {
            System.out.println("##### Create new ID for Employee");
            Long newId;
            do {
                newId = IdGenerator.newId();
            } while (employeeRepository.findByIdEmployee(newId) != null);
            inData.setIdEmployee(newId);
        }

        Employee outData = employeeRepository.save(inData);

        System.out.println("##### Set employee's IUAD: "+outData.getIuadEmployee()+"  ID: "+outData.getIdEmployee());
        return outData;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public void delEmployee(Long id) {
        Employee employee = employeeRepository.findByIdEmployee(id);
        if(employee!=null){
            System.out.println("##### Deleting employee "+employee.getIuadEmployee() + " with id " + employee.getIdEmployee());
            employeeRepository.deleteById(id);
        }
    }
}
