package com.profile.contacts.Controller;


import com.profile.contacts.Config.JwtProvider;
import com.profile.contacts.Exceptions.UserException;
import com.profile.contacts.Model.User;
import com.profile.contacts.Repository.UserRepo;
import com.profile.contacts.Services.CustomUserDetailsServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CustomUserDetailsServiceImp customUserDetailsServiceImp;


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user)  throws UserException {
        String email = user.getEmail();
        String password = user.getPassword();
        String name = user.getName();

        User isEmailExist = userRepo.findByEmail(email);

        if(isEmailExist != null) {
            throw new UserException("Email is already used with another account");
        }

        User createdUser  = new User();
        createdUser.setEmail(email);
        createdUser.setName(name);
        createdUser.setPassword(passwordEncoder.encode(password));

        User savedUser = userRepo.save(createdUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse(token, true);

        return new ResponseEntity<AuthResponse>(response, HttpStatus.CREATED);
    }


    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signIn(@RequestBody User user) {

        String username = user.getEmail();
        String password = user.getPassword();

        Authentication authentication = authenticate(username, password);
        String token = jwtProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse(token, true);

        return new ResponseEntity<AuthResponse>(response, HttpStatus.ACCEPTED);
    }

    private Authentication authenticate(String username, String password){
        UserDetails userDetails = customUserDetailsServiceImp.loadUserByUsername(username);

        if(userDetails == null) {
            throw new BadCredentialsException("Invalid Username");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

}
