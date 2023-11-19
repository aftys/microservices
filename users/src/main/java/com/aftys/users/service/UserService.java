package com.aftys.users.service;

import com.aftys.users.model.Notification;
import com.aftys.users.model.User;
import com.aftys.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RestTemplate restTemplate;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUser(String username) {
        return userRepository.findById(username).orElse(null);
    }

    public User addUser(User user) {
        User newUser = userRepository.save(user);
        Notification newNotification = new Notification("New user added: " + newUser.getEmail());
        restTemplate.postForObject("http://notifications/notifications", newNotification, Notification.class);
        return newUser;
    }

    public void deleteUser(String username) {
        userRepository.deleteById(username);
    }
}