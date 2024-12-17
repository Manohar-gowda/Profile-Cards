package com.profile.contacts.Services;

import com.profile.contacts.Model.Profiles;
import com.profile.contacts.Model.User;
import com.profile.contacts.Repository.ProfileRepository;
import com.profile.contacts.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private UserRepo userRepository;

    public Profiles createProfile(Profiles req, User user) {
        Profiles profiles = new Profiles();
        profiles.setProfiles(true);
        profiles.setUser(user);
        profiles.setName(req.getName());
        profiles.setEmail(req.getEmail());
        profiles.setCountry(req.getCountry());
        profiles.setGender(req.getGender());
        profiles.setCreatedAt(LocalDateTime.now());
        profiles.setAgreeToTerms(req.isAgreeToTerms());
        profiles.setColor(req.getColor());

        return profileRepository.save(profiles);
    }

    public List<Profiles> getUserProfiles(User user) {
        Long id = user.getId();
        return profileRepository.findAllByUserIdAndIsProfilesTrueOrderByCreatedAtDesc(id);
    }

    // Update Profile
    public Profiles updateProfile(String email, Long profileId, Profiles updatedProfileData) {
        // Fetch the user by email
        User user = Optional.ofNullable(userRepository.findByEmail(email))
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Fetch the profile and validate ownership
        Profiles profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        if (!profile.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized to update this profile");
        }

        // Update profile details
        profile.setName(updatedProfileData.getName());
        profile.setEmail(updatedProfileData.getEmail());
        profile.setCountry(updatedProfileData.getCountry());
        profile.setGender(updatedProfileData.getGender());
        // Save the updated profile
        return profileRepository.save(profile);
    }

    // Delete Profile
    public void deleteProfile(String email, Long profileId) {
        // Fetch the user by email
        User user = Optional.ofNullable(userRepository.findByEmail(email))
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Fetch the profile and validate ownership
        Profiles profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        if (!profile.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized to delete this profile");
        }

        // Delete the profile
        profileRepository.delete(profile);
    }
}
