package ua.ibt.employees.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.ibt.employees.jpa.Employee;
import ua.ibt.employees.jpa.Position;
import ua.ibt.employees.repository.EmployeeRepository;
import ua.ibt.employees.repository.PositionRepository;
import ua.ibt.employees.utils.IdGenerator;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    PositionRepository positionRepository;

    public Employee newEmployee(Employee inData) {
        Long newId;
        do {
            newId = IdGenerator.newId();
        } while(employeeRepository.findOne(newId) != null);
        inData.setIdEmployee(newId);

        Employee outData = employeeRepository.save(inData);

        System.out.println("##### New employee's IUAD: "+outData.getIuadEmployee()+"  ID: "+outData.getIdEmployee());
        return outData;
    }
}
