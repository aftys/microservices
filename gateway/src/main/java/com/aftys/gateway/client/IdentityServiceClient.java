// package com.aftys.gateway.client;


// import org.springframework.cloud.openfeign.FeignClient;
// import org.springframework.context.annotation.Lazy;
// import org.springframework.stereotype.Component;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;


// @Component
// @Lazy
// @FeignClient(name = "identity-service", url = "http://identity-service")

// public interface IdentityServiceClient {

//     @GetMapping("/auth/validate")
//     boolean validateToken(@RequestParam("token") String token);
// }
