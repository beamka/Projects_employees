package ua.ibt.employees.repository;

import org.springframework.data.repository.CrudRepository;
import ua.ibt.employees.jpa.Position;

import java.util.List;

public interface PositionRepository extends CrudRepository<Position, Long> {
    @Override
    List<Position> findAll();

    Position findOne(Long idPosition);
}
