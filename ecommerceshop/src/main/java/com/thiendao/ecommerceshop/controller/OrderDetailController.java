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

import com.thiendao.ecommerceshop.entity.OrderDetail;
import com.thiendao.ecommerceshop.service.OrderDetailService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/orderdetail")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class OrderDetailController {
    private OrderDetailService OrderDetailService;
    //Create OrderDetail REST API
    @PostMapping
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail OrderDetail){
        OrderDetail savedOrderDetail = OrderDetailService.createOrderDetail(OrderDetail);
        return new ResponseEntity<>(savedOrderDetail,HttpStatus.CREATED);
    }

    //Get OrderDetail by id REST API 
    //http://localhost:8080/api/orderdetail/1
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id")Long OrderDetailId){
        OrderDetail OrderDetail = OrderDetailService.getOrderDetailById(OrderDetailId);
        return new ResponseEntity<>(OrderDetail,HttpStatus.OK);
    }

    //Get All OrderDetails REST API 
    //http://localhost:8080/api/orderdetail
    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetails(){
        List<OrderDetail>OrderDetails = OrderDetailService.getAllOrderDetails();
            HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ OrderDetails.size()+"/"+OrderDetails.size());
    return ResponseEntity.ok().headers(headers).body(OrderDetails);
    }

    //Update OrderDetail REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/orderdetail/1
    public ResponseEntity<OrderDetail>updateOrderDetail(@PathVariable("id") Long OrderDetailId,
    @RequestBody OrderDetail OrderDetail){
        OrderDetail.setId(OrderDetailId);
        OrderDetail updatedOrderDetail = OrderDetailService.updateOrderDetail(OrderDetail);
        return new ResponseEntity<>(updatedOrderDetail,HttpStatus.OK);
    }
    //Delete OrderDetail REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteOrderDetail(@PathVariable("id") Long OrderDetailId){
        OrderDetailService.deleteOrderDetail(OrderDetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted",HttpStatus.OK);
    }
}
