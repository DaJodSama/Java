package com.thiendao.ecommerceshop.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thiendao.ecommerceshop.entity.Product;
import com.thiendao.ecommerceshop.service.ProductService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/product")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")
public class ProductController {
    
    private ProductService productService;

    // Get All Products REST API with Pagination
    // Create Product REST API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product Product) {
        Product savedProduct = productService.createProduct(Product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // Get ALL Products by id
    // http://localhost:8000/api/product/1
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long ProductId) {
        Product Product = productService.getProductById(ProductId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    }

    // Get ALL Products REST API
    // http://localhost:8000/api/product/1
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "50") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> products = productService.getAllProducts(pageable);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items " + pageable.getOffset() + "-" + (pageable.getOffset() + products.getSize())
                + "/" + products.getTotalElements());

        return ResponseEntity.ok().headers(headers).body(products.getContent());
    }

    // Update Product REST API
    // http://localhost:8000/api/product/1
    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long ProductId, @RequestBody Product Product) {
        Product.setId(ProductId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // Delete Product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long ProductId) {
        productService.deleteProduct(ProductId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Product>> getProductsByCondition(
            @RequestParam(name = "title", required = false) String title,
            @RequestParam(name = "category_id", required = false) Long category) {
        List<Product> products = productService.getProductsByCondition(title, category);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/getlatest")
    public ResponseEntity<List<Product>> getProductsNew(
        @RequestParam(name = "category_id", required = false) Long category,
        @RequestParam(name = "pageSize", required = false, defaultValue = "4") int pagesize) {
            List<Product> products=productService.getLatestProductsInCategory(category, pagesize);
            return ResponseEntity.ok(products);
        }
    
}
