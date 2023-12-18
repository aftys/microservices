package com.aftys.identityservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.aftys.identityservice.dto.AuthRequest;
import com.aftys.identityservice.dto.AuthResponse;
import com.aftys.identityservice.model.User;
import com.aftys.identityservice.repository.UserRepository;
import java.util.Optional;


@Service
public class AuthService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtService jwtService;

    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Autowired
    public void setJwtService(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    public User saveUser(User user) {
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User savedUser = userRepository.save(user);
            return savedUser;
        } catch (Exception e) {
            throw new RuntimeException("Error saving user");
        }
    }

    public AuthResponse authenticate(AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

            if (authentication.isAuthenticated()) {
                User user = userRepository.findByEmail(authRequest.getEmail())
                        .orElseThrow(() -> new RuntimeException("User not found"));
                String token = jwtService.generateToken(authRequest.getEmail(), user.getRole());
                return new AuthResponse(token, user);
            } else {
                throw new RuntimeException("Invalid username or password");
            }
        } catch (Exception e) {
            throw new RuntimeException("Authentication error");
        }
    }

    public AuthResponse verifyToken(String token) {
        try {
            if (!jwtService.validateToken(token)) {
                throw new RuntimeException("Token is either invalid or expired");
            }
            String email = jwtService.getEmailFromToken(token);
            Optional<User> user = userRepository.findByEmail(email);
            if (user.isPresent()) {
                return new AuthResponse(token, user.get());
            } else {
                throw new RuntimeException("User not found");
            }
        } catch (Exception e) {
            throw new RuntimeException("Token verification error");
        }
    }

    public boolean validateToken(String token) {
        try {
            return jwtService.validateToken(token);
        } catch (Exception e) {
            throw new RuntimeException("Token validation error");
        }
    }}
