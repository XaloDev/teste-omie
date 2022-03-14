package com.icaro.server.services;

import com.icaro.server.entities.Cliente;
import com.icaro.server.repositories.ClienteRepository;
import com.icaro.server.services.exceptions.DatabaseException;
import com.icaro.server.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    public Page<Cliente> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Cliente findById(Long id) {
        Optional<Cliente> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public Cliente insert(Cliente obj) {
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

    public Cliente update(Long id, Cliente obj) {
        try {
            Cliente entity = repository.getOne(id);
            updateData(entity, obj);
            return repository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(Cliente entity, Cliente obj) {
        entity.setApelido(obj.getApelido());
        entity.setInscricao(obj.getInscricao());
        entity.setNome(obj.getNome());
        entity.setStatus(obj.getStatus());
        entity.setFoto(obj.getFoto());
    }
}
