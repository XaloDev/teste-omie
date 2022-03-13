package com.icaro.server.services;

import com.icaro.server.entities.Categoria;
import com.icaro.server.repositories.CategoriaRepository;
import com.icaro.server.services.exceptions.DatabaseException;
import com.icaro.server.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    public List<Categoria> findAll() {
        return repository.findAll();
    }

    public Categoria findById(Long id) {
        Optional<Categoria> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public Categoria insert(Categoria obj) {
        return repository.save(obj);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(id);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException(e.getMessage());
        }
    }

    public Categoria update(Long id, Categoria obj) {
        try {
            Categoria entity = repository.getOne(id);
            updateData(entity, obj);
            return repository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(Categoria entity, Categoria obj) {
        entity.setNome(obj.getNome());
    }


}
