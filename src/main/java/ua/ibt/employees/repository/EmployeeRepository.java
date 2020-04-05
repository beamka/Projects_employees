package ua.ibt.employees.repository;

import org.springframework.data.repository.CrudRepository;
import ua.ibt.employees.jpa.Employee;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    @Override
    List<Employee> findAll();

    Employee findOne(Long idEmployee);
}
