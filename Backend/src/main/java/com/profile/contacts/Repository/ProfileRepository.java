package com.profile.contacts.Repository;

import com.profile.contacts.Model.Profiles;
import com.profile.contacts.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfileRepository extends JpaRepository<Profiles, Long> {
//    List<Profiles> findByUser(User user);

//    List<Profiles> findAllByIsProfilesTrueOrderByCreatedAtDesc(User user);
List<Profiles> findAllByUserIdAndIsProfilesTrueOrderByCreatedAtDesc(Long id);
}
