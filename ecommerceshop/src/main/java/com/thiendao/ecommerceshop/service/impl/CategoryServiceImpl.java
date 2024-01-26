package com.thiendao.ecommerceshop.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.thiendao.ecommerceshop.entity.Category;
import com.thiendao.ecommerceshop.repository.CategoryRepository;
import com.thiendao.ecommerceshop.service.CategoryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService{

    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long categoryId){
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        return optionalCategory.get();
    }

    @Override
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    @Override
    public Category updateCategory(Category category){
        Category existingCategory = categoryRepository.findById(category.getId()).get();
        existingCategory.setName(category.getName());
        existingCategory.setProduct(category.getProduct());
        existingCategory.setIsHome(category.getIsHome());
        Category updateCategory = categoryRepository.save(existingCategory);
        return updateCategory;
    }

    @Override
    public void deleteCategory(Long categoryId){
        categoryRepository.deleteById(categoryId);
    }
}
