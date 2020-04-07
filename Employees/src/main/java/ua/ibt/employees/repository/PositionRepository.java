package ua.ibt.employees.repository;

import ua.ibt.employees.jpa.Position;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PositionRepository extends CrudRepository<Position, Long> {
    @Override
    List<Position> findAll();

    //Position findOne(Long idPosition);
}
