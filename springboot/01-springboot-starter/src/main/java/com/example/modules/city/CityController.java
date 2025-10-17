package com.example.modules.city;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class CityController {

    record City(int id, String name) {}

    @GetMapping("/cities")
    public Map<String, Object> getAllCities() {
        List<City> cities = List.of(
            new City(1, "Paris"),
            new City(2, "New York"),
            new City(3, "Tokyo"),
            new City(4, "Londres"),
            new City(5, "Berlin"),
            new City(6, "Rome"),
            new City(7, "Sydney")
        );

        return Map.of(
            "success", true,
            "data", cities
        );
    }
}
