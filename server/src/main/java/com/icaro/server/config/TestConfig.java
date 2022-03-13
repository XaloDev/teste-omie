package com.icaro.server.config;

import com.icaro.server.entities.Categoria;
import com.icaro.server.entities.Cliente;
import com.icaro.server.entities.Email;
import com.icaro.server.repositories.CategoriaRepository;
import com.icaro.server.repositories.ClienteRepository;
import com.icaro.server.repositories.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private EmailRepository emailRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;


    @Override
    public void run(String... args) throws Exception {

        Cliente cliente1 = new Cliente(null, "35234876087861", "CEA ltda", "C&A", 1, "https://img.icons8.com/ios/50/000000/user--v1.png");
        Cliente cliente2 = new Cliente(null, "79878449878945", "Carrrefour ltda", "Carrefour", 1, "https://img.icons8.com/ios/50/000000/user--v1.png");
        Cliente cliente3 = new Cliente(null, "21321245487897", "Americanas ltda", "Americanas", 0, "https://img.icons8.com/ios/50/000000/user--v1.png");
        Cliente cliente4 = new Cliente(null, "12315467985411", "4Dev company", "4Devs", 1,"https://img.icons8.com/ios/50/000000/user--v1.png");
        Cliente cliente5 = new Cliente(null, "23184987987000", "Loxa koalab Devs", "Koala Soft", 0,"https://img.icons8.com/ios/50/000000/user--v1.png");
        Cliente cliente6 = new Cliente(null, "43702960000106", "Xalo development", "XaloDev", 1,"https://img.icons8.com/ios/50/000000/user--v1.png");
        Cliente cliente7 = new Cliente(null, "68798770001474", "Disney Studios Pictures", "Disney", 2,"https://img.icons8.com/ios/50/000000/user--v1.png");

        clienteRepository.saveAll(Arrays.asList(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7));

        Categoria categoria1 = new Categoria(null, "Dono");
        Categoria categoria2 = new Categoria(null, "Advogado");
        Categoria categoria3 = new Categoria(null, "Funcionário");

        categoriaRepository.saveAll(Arrays.asList(categoria1, categoria2, categoria3));

        Email email1 = new Email(null, "Ícaro", "icarogabriel999@gmail.com", cliente1, categoria1);
        Email email2 = new Email(null, "Graziele", "grazieleloiolamota@gmail.com", cliente1, categoria2);
        Email email3 = new Email(null, "João", "joaomacedo876@gmail.com", cliente1, categoria3);
        Email email4 = new Email(null, "Marcelo", "marcelopimentel765@gmail.com", cliente2, categoria1);

        emailRepository.saveAll(Arrays.asList(email1, email2, email3, email4));

    }
}
