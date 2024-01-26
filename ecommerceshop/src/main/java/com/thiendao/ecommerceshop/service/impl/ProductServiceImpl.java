package com.thiendao.ecommerceshop.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.thiendao.ecommerceshop.entity.Product;
import com.thiendao.ecommerceshop.repository.ProductRepository;
import com.thiendao.ecommerceshop.service.ProductService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.get();
    }

    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).get();
        existingProduct.setCreatedAt(product.getCreatedAt());
        existingProduct.setDeleted(product.getDeleted());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setDiscount(product.getDiscount());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setThumbnail(product.getThumbnail());
        existingProduct.setTitle(product.getTitle());
        existingProduct.setUpdatedAt(product.getUpdatedAt());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setGallery(product.getGallery());
        existingProduct.setOrderDetail(product.getOrderDetail());
        Product updatedProduct = productRepository.save(existingProduct);
        return updatedProduct;
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public List<Product> getProductsByCondition(String title, Long category) {
        if (title != null && category != null) {
            return productRepository.findByTitleAndCategoryId(title, category);
        } else if (title != null) {
            return productRepository.findByTitle(title);
        } else if (category != null) {
            return productRepository.findByCategoryId(category);
        } else {
            return new ArrayList<>();
        }
    }

    @Override
    public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize) {
        PageRequest pageRequest=PageRequest.of(0,pageSize,Sort.by(Sort.Direction.DESC,"createdAt"));
        return productRepository.findLatestProductsInCategory(categoryId,pageRequest);
    }
}
