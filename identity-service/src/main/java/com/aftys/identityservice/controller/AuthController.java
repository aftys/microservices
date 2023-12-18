package com.aftys.identityservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aftys.identityservice.dto.AuthRequest;
import com.aftys.identityservice.dto.AuthResponse;
import com.aftys.identityservice.model.User;
import com.aftys.identityservice.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;



@RestController
@RequestMapping("/auth")
public class AuthController {
    private AuthService authService;

    @Autowired
    public void setAuthService(AuthService authService) {
        this.authService = authService;
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        try {
            User savedUser = authService.saveUser(user);
            AuthResponse authResponse = authService.authenticate(new AuthRequest(user.getEmail(), user.getPassword()));
            return ResponseEntity.status(HttpStatus.CREATED).body(authResponse);

        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving user");
        }
    }

    @PostMapping("/token")
    public ResponseEntity<?> getToken(@RequestBody AuthRequest authRequest) {
        try {
            AuthResponse authResponse = authService.authenticate(authRequest);
            return ResponseEntity.ok(authResponse);
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestParam("token") String token) {
        try {
            boolean isValid = authService.validateToken(token);
            return ResponseEntity.ok(isValid);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token validation error");
        }
    }

    @GetMapping("/verify-token")
    public ResponseEntity<?> verifyToken(@RequestParam("token") String token) {
        try {
            AuthResponse authResponse = authService.verifyToken(token);
            return ResponseEntity.ok(authResponse);
        } catch (RuntimeException e) {
            String errorMessage = e.getMessage();
            if (errorMessage.equals("Token is either invalid or expired")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token is either invalid or expired");
            } else if (errorMessage.equals("User not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Token verification error");
            }
        }
    }
}
