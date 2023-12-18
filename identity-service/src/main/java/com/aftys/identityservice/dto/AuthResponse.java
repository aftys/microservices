package com.aftys.identityservice.dto;

import com.aftys.identityservice.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AuthResponse {
    private String token;
    private User user;
}
