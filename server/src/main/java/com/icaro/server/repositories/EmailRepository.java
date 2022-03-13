package com.icaro.server.repositories;

import com.icaro.server.entities.Email;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<Email, Long> {
}
