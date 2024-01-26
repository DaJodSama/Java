package com.thiendao.ecommerceshop.service;

import java.util.List;

import com.thiendao.ecommerceshop.entity.Category;

public interface CategoryService {

    Category createCategory(Category category);
    Category getCategoryById(Long categoryId);
    List<Category> getAllCategories();
    Category updateCategory(Category category);
    void deleteCategory(Long categoryId);
}
