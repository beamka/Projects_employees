package ua.ibt.employees.repository;

import ua.ibt.employees.jpa.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    @Override
    List<Employee> findAll();
    @Override
    void deleteById(Long idEmployee);

    Employee findByIdEmployee(Long idEmployee);

    //void deleteByIdEmployee(Long idEmployee);
}
