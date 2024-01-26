package com.thiendao.ecommerceshop.service;

import java.util.List;

import com.thiendao.ecommerceshop.entity.Gallery;

public interface GalleryService {
    public  Gallery createGallery(Gallery gallery);
    public  Gallery getGalleryById(Long galleryId);
    public  Gallery updateGallery( Gallery gallery);
    public  void deleteGallery(Long galleryId);
    public  List <Gallery> getAllGalleries();
}