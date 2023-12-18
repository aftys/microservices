package com.aftys.gateway.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;
import com.aftys.gateway.model.Role;
import com.aftys.gateway.service.JwtService;
import org.springframework.http.HttpHeaders;
import java.util.List;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    private RouteValidator validator;
    private JwtService jwtService;

    @Autowired
    public void setValidator(RouteValidator validator) {
        this.validator = validator;
    }

    @Autowired
    public void setJwtService(JwtService jwtService) {
        this.jwtService = jwtService;
    }


    public AuthenticationFilter() {
        super(Config.class);
    }

    public static class Config {
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                HttpHeaders headers = exchange.getRequest().getHeaders();
                if (!headers.containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new IllegalArgumentException("Missing authorization header");
                }

                List<String> authHeaderValues = headers.get(HttpHeaders.AUTHORIZATION);
                if (authHeaderValues == null || authHeaderValues.isEmpty()) {
                    throw new IllegalArgumentException("Missing authorization header");
                }

                String authHeader = authHeaderValues.get(0);
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }

                try {
                    jwtService.validateToken(authHeader);
                    String role = jwtService.getRoleFromToken(authHeader);
                    System.out.println(role);
                    if(!Role.valueOf(role).equals(Role.ADMIN)){
                        throw new IllegalStateException("Unauthorized access to application");
                    }
                } catch (Exception e) {
                    throw new IllegalStateException("Unauthorized access to application");
                }
            }
            return chain.filter(exchange);
        };
    }
}
