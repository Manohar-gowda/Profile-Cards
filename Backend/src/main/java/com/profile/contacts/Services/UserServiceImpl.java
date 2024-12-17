package com.profile.contacts.Services;

import com.profile.contacts.Config.JwtProvider;
import com.profile.contacts.Exceptions.UserException;
import com.profile.contacts.Model.User;
import com.profile.contacts.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserById(Long userId) throws UserException {
        User user = userRepo.findById(userId).orElseThrow(()->new UserException("user not found with id " + userId));
        return user;
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email = jwtProvider.getEmailFromToken(jwt);
        User user = userRepo.findByEmail(email);
        if(user == null) {
            throw new UserException("user not found with email " + email);
        }
        return user;
    }

}
