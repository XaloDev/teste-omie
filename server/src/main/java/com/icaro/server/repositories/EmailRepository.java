package com.icaro.server.repositories;

import com.icaro.server.entities.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmailRepository extends JpaRepository<Email, Long> {
    @Query(
            value = "SELECT * FROM tb_email as e INNER JOIN tb_cliente as c ON e.cliente_id = c.id WHERE c.id = ?1",
            nativeQuery = true
    )
    List<Email> findAllByCliente(Long clienteId);
}
