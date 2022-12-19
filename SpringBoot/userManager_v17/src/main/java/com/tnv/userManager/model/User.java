package com.tnv.userManager.model;


import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {

    @Transient
    PasswordEncoder enc = new BCryptPasswordEncoder();

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id", nullable = false)
    private Long id;
    private String name;
    private String surname;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private String username;
    private String password;
    private UsersRoles roles;
    private int score;
    private LocalDateTime registered_on;
    private LocalDateTime update_on;
    private LocalDateTime last_log;
    private boolean isEnabled;


    public User() {}

    public User(
            String username,
            UsersRoles roles) {
        this.name = "ft_" + username;
        this.surname = "lt_" + username;
        this.email = username + "@mail.test";
        this.username = username;
        this.password = enc.encode(username);
        this.roles = roles;
        this.registered_on = LocalDateTime.now();
        this.update_on = LocalDateTime.now();
        this.last_log = LocalDateTime.now();
        this.score = (int)(Math.random()*10)*10;
        this.isEnabled = true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UsersRoles getRoles() {
        return roles;
    }

    public void setRoles(UsersRoles roles) {
        this.roles = roles;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public LocalDateTime getRegistered_on() {
        return registered_on;
    }

    public void setRegistered_on(LocalDateTime registered_on) {
        this.registered_on = registered_on;
    }

    public LocalDateTime getUpdate_on() {
        return update_on;
    }

    public void setUpdate_on(LocalDateTime update_on) {
        this.update_on = update_on;
    }

    public LocalDateTime getLast_log() {
        return last_log;
    }

    public void setLast_log(LocalDateTime last_log) {
        this.last_log = last_log;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    @Override
    public String toString() {
        return  "User " + this.id + ": " +
                "\nfirst name = " + this.name +
                "\nlast name = " + this.surname +
                "\nusername = " + this.username +
                "\nemail = " + this.email +
                "\npassword = " + this.password +
                "\nroles = " + this.roles +
                "\nregistered on = " + this.registered_on +
                "\nLast Attributes Update on = " + this.update_on +
                "\nLast Time He Logged in = " + this.last_log +
                "\nscore = " + this.score;
    }
}
