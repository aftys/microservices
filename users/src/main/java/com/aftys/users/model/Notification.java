package com.aftys.users.model;

import java.io.Serializable;

import lombok.Data;

@Data
public class Notification implements Serializable {
    private String message;
    private Long id;

    public Notification(){}
    public Notification(String message){
        this.message = message;
    }
}
