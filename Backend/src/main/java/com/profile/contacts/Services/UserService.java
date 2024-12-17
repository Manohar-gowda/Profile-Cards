package com.profile.contacts.Services;

import com.profile.contacts.Exceptions.UserException;
import com.profile.contacts.Model.User;

import java.util.List;

public interface UserService {

    public User findUserById(Long userId) throws UserException ;
    public User findUserProfileByJwt(String jwt) throws UserException;

}
