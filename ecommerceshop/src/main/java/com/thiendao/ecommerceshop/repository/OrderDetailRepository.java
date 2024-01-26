package com.thiendao.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiendao.ecommerceshop.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long>{

}
