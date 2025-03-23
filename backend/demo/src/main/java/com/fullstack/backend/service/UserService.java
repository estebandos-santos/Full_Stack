package com.fullstack.backend.service;

import com.fullstack.backend.entity.User;
import com.fullstack.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void register(User user) throws Exception {
        if(userRepository.findByUsername(user.getUsername()).isPresent() ||
           userRepository.findByEmail(user.getEmail()).isPresent()){
            throw new Exception("Username or email already exists");
        }
        userRepository.save(user);
    }

    public User login(String username, String password) throws Exception {
        return userRepository.findByUsernameAndPassword(username, password)
            .orElseThrow(() -> new Exception("Invalid credentials"));
    }
}
