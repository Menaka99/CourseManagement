import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseserviceService } from '../courseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {


  course: Course = new Course();
  constructor(private courseservice: CourseserviceService, private router: Router) { 
   
    
  }

  ngOnInit(): void {
  }

 

  saveCourse(){
    this.courseservice.saveCourse(this.course).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
      
    },
    error => console.log(error));
  }
   
  goToCourseList(){
    this.router.navigate(['/Home']);
    
  }

  onSubmit()
  {
    console.log(this.course);
    this.saveCourse();
  }

}
