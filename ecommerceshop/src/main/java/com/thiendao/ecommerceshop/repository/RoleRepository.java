package com.thiendao.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiendao.ecommerceshop.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
    
}