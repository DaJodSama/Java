package com.thiendao.ecommerceshop.controller;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.thiendao.ecommerceshop.entity.Category;
import com.thiendao.ecommerceshop.service.CategoryService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/category")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")
public class CategoryController {
    
    private CategoryService categoryService;

    // Create Category REST API
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category Category){
        Category savedCategory = categoryService.createCategory(Category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    // Get Category by id REST API
    // http://localhost:8080/api/category/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getProductById(@PathVariable("id") Long categoryId){
        Category Category = categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(Category, HttpStatus.OK);
    }

    // Get All Category REST API
    // http://localhost:8080/api/category
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategorys(){
        List<Category> Categories=categoryService.getAllCategories();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","items 0-" +Categories.size()+ "/" +Categories.size() );
        return ResponseEntity.ok().headers(headers).body(Categories); 
    }

    // Update Products REST API
    // http://localhost:8080/api/category/1
    @PutMapping("{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long categoryId, @RequestBody Category Category){
        Category.setId(categoryId);
        Category updatedCategory = categoryService.updateCategory(Category);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
    }

    // Delete Category REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long categoryId){
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>("Category successfully deleted!", HttpStatus.OK);
    }

}
