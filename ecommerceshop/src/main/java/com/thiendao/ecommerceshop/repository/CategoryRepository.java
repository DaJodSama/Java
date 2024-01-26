package com.thiendao.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiendao.ecommerceshop.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}