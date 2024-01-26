package com.thiendao.ecommerceshop.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.thiendao.ecommerceshop.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
    List<Product> findByTitleAndCategoryId(String name, Long categoryId);

    List<Product> findByTitle(String title);

    List<Product> findByCategoryId(Long categoryId);

     @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId ORDER BY p.createdAt DESC")
    List<Product> findLatestProductsInCategory(Long categoryId, Pageable pegeable);
}
