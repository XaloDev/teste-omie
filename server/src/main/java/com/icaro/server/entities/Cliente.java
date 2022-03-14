package com.icaro.server.entities;

import com.icaro.server.entities.enums.ClienteStatus;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tb_cliente")
public class Cliente implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String inscricao;
    private String nome;
    private String apelido;
    private Integer status;
    private String foto;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
    private List<Email> emails = new ArrayList<>();

    public Cliente() {

    }

    public Cliente(Long id, String inscricao, String nome, String apelido, Integer status, String foto) {
        this.id = id;
        this.inscricao = inscricao;
        this.nome = nome;
        this.apelido = apelido;
        this.status = status;
        this.foto = foto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInscricao() {
        return inscricao;
    }

    public void setInscricao(String inscricao) {
        this.inscricao = inscricao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public ClienteStatus getStatus() {
        return ClienteStatus.valueOf(status);
    }

    public void setStatus(ClienteStatus status) {
        if (status != null) {
            this.status = status.getCode();
        }
    }

    public List<Email> getEmails() {
        return emails;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cliente cliente = (Cliente) o;
        return id.equals(cliente.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
