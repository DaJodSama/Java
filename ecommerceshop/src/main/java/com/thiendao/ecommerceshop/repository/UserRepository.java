package com.thiendao.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiendao.ecommerceshop.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
}