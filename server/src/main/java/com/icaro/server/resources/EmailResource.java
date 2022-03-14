package com.icaro.server.resources;

import com.icaro.server.entities.Email;
import com.icaro.server.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/emails")
public class EmailResource {

    @Autowired
    private EmailService service;

    @GetMapping
    public ResponseEntity<List<Email>> findAll(@RequestParam(value = "clienteId", required = false) Long clienteId) {
        List<Email> list = service.findAll(clienteId);

        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Email> findById(@PathVariable Long id) {
        Email obj = service.findById(id);

        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Email> insert(@RequestBody Email obj, @RequestParam("clienteId") Long clienteId,
                                        @RequestParam("categoriaId") Long categoriaId) {

        obj = service.insert(obj, clienteId, categoriaId);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Email> update(@PathVariable Long id, @RequestBody Email obj,
                                        @RequestParam("categoriaId") Long categoriaId) {
        obj = service.update(id, obj, categoriaId);
        return ResponseEntity.ok().body(obj);
    }

}
