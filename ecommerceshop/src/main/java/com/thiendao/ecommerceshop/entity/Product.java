package com.thiendao.ecommerceshop.entity;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Product")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @CreatedDate
    @Column(nullable = true)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private int deleted;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer discount;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private String thumbnail;

    @Column(nullable = false)
    private String title;

    @LastModifiedDate
    @Column(nullable = true)
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name="category_id",nullable = false)
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Gallery> gallery;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<OrderDetail> OrderDetail;
}