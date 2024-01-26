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

import com.thiendao.ecommerceshop.entity.Gallery;
import com.thiendao.ecommerceshop.service.GalleryService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/gallery")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class GalleryController {
    private GalleryService GalleryService;
    //Create Gallery REST API
    @PostMapping
    public ResponseEntity<Gallery> createGallery(@RequestBody Gallery Gallery){
        Gallery savedGallery = GalleryService.createGallery(Gallery);
        return new ResponseEntity<>(savedGallery,HttpStatus.CREATED);
    }

    //Get Gallery by id REST API 
    //http://localhost:8080/api/gallery/1
    @GetMapping("{id}")
    public ResponseEntity<Gallery> getGalleryById(@PathVariable("id")Long GalleryId){
        Gallery Gallery = GalleryService.getGalleryById(GalleryId);
        return new ResponseEntity<>(Gallery,HttpStatus.OK);
    }

    //Get All Gallerys REST API 
    //http://localhost:8080/api/gallery
    @GetMapping
    public ResponseEntity<List<Gallery>> getAllGalleries(){
        List<Gallery>Gallerys = GalleryService.getAllGalleries();
      HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ Gallerys.size()+"/"+Gallerys.size());
    return ResponseEntity.ok().headers(headers).body(Gallerys);
    }

    //Update Gallery REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/gallery/1
    public ResponseEntity<Gallery>updateGallery(@PathVariable("id") Long GalleryId,
    @RequestBody Gallery Gallery){
        Gallery.setId(GalleryId);
        Gallery updatedGallery = GalleryService.updateGallery(Gallery);
        return new ResponseEntity<>(updatedGallery,HttpStatus.OK);
    }
    //Delete Gallery REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteGallery(@PathVariable("id") Long GalleryId){
        GalleryService.deleteGallery(GalleryId);
        return new ResponseEntity<>("Gallery successfully deleted",HttpStatus.OK);
    }
}