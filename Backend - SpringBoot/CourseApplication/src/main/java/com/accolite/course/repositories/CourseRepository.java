package com.accolite.course.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.accolite.course.entities.Count;
import com.accolite.course.entities.CourseEntity;


import java.util.*;



@Repository
public interface CourseRepository extends CrudRepository<CourseEntity, Long> {

	List<CourseEntity> findByLocation(String location);
	
	List<CourseEntity> findAll();
	
	
	
	@Query(value="select count(description) as data, location from course_entity group by location",nativeQuery=true)
					public List<Object[]>groupbylist();
	
}
