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

import com.thiendao.ecommerceshop.entity.Role;
import com.thiendao.ecommerceshop.service.RoleService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/role")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class RoleController {
    private RoleService RoleService;
    //Create Role REST API
    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody Role Role){
        Role savedRole = RoleService.createRole(Role);
        return new ResponseEntity<>(savedRole,HttpStatus.CREATED);
    }

    //Get Role by id REST API 
    //http://localhost:8080/api/role/1
    @GetMapping("{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable("id")Long RoleId){
        Role Role = RoleService.getRoleById(RoleId);
        return new ResponseEntity<>(Role,HttpStatus.OK);
    }

    //Get All Roles REST API 
    //http://localhost:8080/api/role
    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles(){
        List<Role>Roles = RoleService.getAllRoles();
        HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ Roles.size()+"/"+Roles.size());
    return ResponseEntity.ok().headers(headers).body(Roles);
    }

    //Update Role REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/role/1
    public ResponseEntity<Role>updateRole(@PathVariable("id") Long RoleId,
    @RequestBody Role Role){
        Role.setId(RoleId);
        Role updatedRole = RoleService.updateRole(Role);
        return new ResponseEntity<>(updatedRole,HttpStatus.OK);
    }
    //Delete Role REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteRole(@PathVariable("id") Long RoleId){
        RoleService.deleteRole(RoleId);
        return new ResponseEntity<>("Role successfully deleted",HttpStatus.OK);
    }
}
