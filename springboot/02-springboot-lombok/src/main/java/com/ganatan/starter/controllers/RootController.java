package com.ganatan.starter.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

  @GetMapping("/")
  public String root() {

    System.out.println("00000000001:RootController");
    return "Spring Boot Starter is running!";

  }
}
