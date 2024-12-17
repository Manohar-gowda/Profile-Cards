package com.profile.contacts.Controller;

import com.profile.contacts.Exceptions.ProfilesException;
import com.profile.contacts.Exceptions.UserException;
import com.profile.contacts.Model.Profiles;
import com.profile.contacts.Model.User;
import com.profile.contacts.Repository.ProfileRepository;
import com.profile.contacts.Services.ProfileService;
import com.profile.contacts.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/profiles")
//@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Profiles> createProfile(@RequestBody Profiles req, @RequestHeader("Authorization") String jwt) throws UserException, ProfilesException{
        User user = userService.findUserProfileByJwt(jwt);
        System.out.println(user.getName());
        Profiles profiles = profileService.createProfile(req, user);
        return new ResponseEntity<>(profiles, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Profiles>> getUserProfiles(@RequestHeader("Authorization") String jwt) throws UserException, ProfilesException {

        User user = userService.findUserProfileByJwt(jwt);
        List<Profiles> profiles = profileService.getUserProfiles(user);
        return new ResponseEntity<>(profiles, HttpStatus.OK);
    }

    // Update Profile
    @PutMapping("/{profileId}")
    public ResponseEntity<Profiles> updateProfile(
            @PathVariable Long profileId,
            @RequestBody Profiles updatedProfileData,
            Principal principal) throws UserException, ProfilesException {
        // `Principal` provides the logged-in user's email
        Profiles updatedProfile = profileService.updateProfile(principal.getName(), profileId, updatedProfileData);
        return ResponseEntity.ok(updatedProfile);
    }

    @DeleteMapping("/{profileId}")
    public ResponseEntity<Void> deleteProfile(
            @PathVariable Long profileId,
            @RequestHeader("Authorization") String jwt) throws UserException, ProfilesException{
        User user = userService.findUserProfileByJwt(jwt);
        System.out.println(user.getName());
        profileService.deleteProfile(user.getEmail(), profileId);
        return ResponseEntity.noContent().build();
    }


//     @PostMapping
//    public ResponseEntity<String> createUser(@RequestBody Profiles profiles) {
//        profileRepository.save(profiles);
//        return ResponseEntity.ok("User added successfully.");
//    }
//
//    @GetMapping
//    public List<Profiles> getAllUsers() {
//         return profileRepository.findAll();
//    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> deleteUser(@PathVariable(value = "id") Long id) {
//         if(profileRepository.existsById(id)) {
//             profileRepository.deleteById(id);
//             return ResponseEntity.ok("User deleted successfully.");
//         } else {
//             return ResponseEntity.status(404).body("User not found");
//         }
//    }
}