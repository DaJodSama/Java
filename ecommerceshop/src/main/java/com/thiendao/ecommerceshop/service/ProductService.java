package com.thiendao.ecommerceshop.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.thiendao.ecommerceshop.entity.Product;

public interface ProductService {
    
    Product createProduct(Product product);

    Product getProductById(Long productId);

    Page<Product> getAllProducts(Pageable pageable);

    Product updateProduct(Product product);

    void deleteProduct(Long productId);
    
    public List<Product> getProductsByCondition(String title, Long category);
    
    public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize);
}
