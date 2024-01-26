package com.thiendao.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiendao.ecommerceshop.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long>{

}