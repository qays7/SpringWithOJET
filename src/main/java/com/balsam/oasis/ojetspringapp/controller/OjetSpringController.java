package com.balsam.oasis.ojetspringapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
class OjetSpringController {

    @RequestMapping(value = { "/", "" })
    String home() {
        return "Hello, World!";
    }

}
