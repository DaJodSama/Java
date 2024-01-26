package com.thiendao.ecommerceshop.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.thiendao.ecommerceshop.entity.User;
import com.thiendao.ecommerceshop.repository.UserRepository;
import com.thiendao.ecommerceshop.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    
    private UserRepository userRepository;
    
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user) {
        User existingUser =userRepository.findById(user.getId()).get();
        existingUser.setAddress(user.getAddress());
        existingUser.setEmail(user.getEmail());
        existingUser.setCreatedAt(user.getCreatedAt());
        existingUser.setDeleted(user.getDeleted());
        existingUser.setEmail(user.getEmail());
        existingUser.setFullname(user.getFullname());
        existingUser.setPassword(user.getPassword());
        existingUser.setPhoneNumber(user.getPhoneNumber());
        existingUser.setUpdatedAt(user.getUpdatedAt());
        existingUser.setRole(user.getRole());
        existingUser.setOrders(user.getOrders());
        User updatedUser = userRepository.save(existingUser);
        return updatedUser;
    }
    
    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

}
