package com.icaro.server.services;

import com.icaro.server.entities.Categoria;
import com.icaro.server.entities.Cliente;
import com.icaro.server.entities.Email;
import com.icaro.server.repositories.EmailRepository;
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
public class EmailService {

    @Autowired
    private EmailRepository repository;

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private CategoriaService categoriaService;

    public List<Email> findAll(Long clienteId) {
        System.out.println(clienteId);
        if (clienteId != null) {
            return repository.findAllByCliente(clienteId);
        } else {
            return repository.findAll();
        }
    }

    public Email findById(Long id) {
        Optional<Email> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public Email insert(Email obj, Long clienteId, Long categoriaId) {
        Cliente cliente = clienteService.findById(clienteId);
        Categoria categoria = categoriaService.findById(categoriaId);
        obj.setCliente(cliente);
        obj.setCategoria(categoria);
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

    public Email update(Long id, Email obj, Long categoriaId) {
        try {
            Email entity = repository.getOne(id);
            updateData(entity, obj, categoriaId);
            return repository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(Email entity, Email obj, Long categoriaId) {
        Categoria categoria = categoriaService.findById(categoriaId);
        entity.setEmail(obj.getEmail());
        entity.setCategoria(categoria);
        entity.setNome(obj.getNome());
    }


}
