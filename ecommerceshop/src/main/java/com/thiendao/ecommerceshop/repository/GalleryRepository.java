package com.thiendao.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiendao.ecommerceshop.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery, Long>{
    
}