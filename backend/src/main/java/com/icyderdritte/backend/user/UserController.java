package com.icyderdritte.backend.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/email")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<String> getEmailOfLoggedInUser() {
        String email = userService.getEmail();
        return ResponseEntity
                .ok(email);
    }
}
