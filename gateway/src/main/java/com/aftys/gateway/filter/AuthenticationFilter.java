package com.aftys.gateway.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;

import java.util.List;
import java.util.logging.Logger;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    private static final Logger logger = Logger.getLogger(AuthenticationFilter.class.getName());

    private RouteValidator validator;
    private RestTemplate restTemplate;

    @Autowired
    public AuthenticationFilter(RouteValidator validator, RestTemplate restTemplate) {
        this.validator = validator;
        this.restTemplate = restTemplate;
    }

    public static class Config {
    }

    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new IllegalArgumentException("Missing authorization header");
                }

                List<String> authHeaderValues = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION);
                if (authHeaderValues != null && !authHeaderValues.isEmpty()) {
                    String authHeader = authHeaderValues.get(0);
                    if (authHeader != null && authHeader.startsWith("Bearer ")) {
                        authHeader = authHeader.substring(7);
                    }
                    try {
                        logger.info("authHeader: " + authHeader);
                        restTemplate.getForObject("http://identity-service/auth/validate?token=" + authHeader, Boolean.class);
                    } catch (Exception e) {
                        logger.warning("Unauthorized access to application");
                        throw new IllegalStateException("Unauthorized access to application");
                    }
                } else {
                    throw new IllegalArgumentException("Missing authorization header");
                }
            }
            return chain.filter(exchange);
        });
    }
}
