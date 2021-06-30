 package com.participants.participants.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.participants.participants.entities.ParticipantEntity;
@Repository
public interface ParticipantsRepository extends CrudRepository<ParticipantEntity, Long> {

	List<ParticipantEntity> findAll();
	//@Query(value="SELECT P.EMAIL FROM PARTICIPANT_ENTITY P",nativeQuery=true)
	List<ParticipantEntity> findByEmail(String email);
	
}
