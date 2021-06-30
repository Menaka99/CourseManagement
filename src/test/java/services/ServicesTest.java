package services;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import com.accolite.course.entities.CourseEntity;
import com.accolite.course.entities.Creator;
import com.accolite.course.models.Course;
import com.accolite.course.repositories.CourseRepository;
import com.accolite.course.service.CourseService;

import com.accolite.course.entities.Creator;
import com.accolite.course.entities.Skill;
import com.accolite.course.exception.NoContentException;



@RunWith(SpringRunner.class)

public class ServicesTest {
	@InjectMocks
	private CourseService test1;
	@InjectMocks
	private CourseEntity courseentity;
	@InjectMocks
	private Creator creator;
	@InjectMocks
	private Skill skill;
	@InjectMocks
	private static Course c1 ;
	@Mock
	CourseRepository courserepo;
	
	
	@Before(value = "")
    public void init() {
        MockitoAnnotations.initMocks(this);
    }
	public static List<Creator> getCreator()
	{
		List<Creator> creator1 = new ArrayList<>();
		Creator createrobj = new Creator(1, "Menaka");
		creator1.add(createrobj);
		return creator1;
	}
	public static List<Skill> getSkill()
	{
		List<Skill> skill1 = new ArrayList<>();
		Skill skillobj = new Skill(1, "Programming");
		skill1.add(skillobj);
		return skill1;
	}
	public static Course getCourseforTest()
	{
		c1.setCreator(getCreator());
		c1.setDescription("Mathematics");
		c1.setFeedback("useful");
		c1.setId((long)1);
		c1.setLastupdated("29/06/21");
		c1.setLocation("Chennai");
		c1.setPrerequesite("programming");
		c1.setSkills(getSkill());
		return c1;
	}
	
	@Test
	public void checkmap()
	{
		
		 assertNotNull(test1.mapObjectToEntity(getCourseforTest()));
	}
	
	
	
	@Test
	public void fetchlocation() throws NoContentException
	{
		List<CourseEntity> courseentity1=new ArrayList<>();
		
		CourseEntity ce =new CourseEntity((long) 1,"Mathematics","Student","good","chennai","29/06/2021",getSkill(),getCreator());
		
		courseentity1.add(ce);
	    
		when(courserepo.findByLocation("Chennai")).thenReturn(courseentity1);
		assertNotNull(test1.fetchCoursesByLocation("Chennai"));
		
	}
	
	@Test
	
	public void getSkills()
	{
		
		
		
		assertEquals(1,test1.addSkill(getCourseforTest()).size());
	}
	
	
}
