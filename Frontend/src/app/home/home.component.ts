import { Component, OnInit } from '@angular/core';
import { Course } from '../course'
import { CourseserviceService } from '../courseservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses!: Array<Course>
  description : any
  constructor(private courseservice: CourseserviceService, private router: Router) { 
   
    
  }

  ngOnInit(): void {
    this.getCourse();
    
    
  }
  
  private getCourse(){
    this.courseservice.getCourseList().subscribe(data => {
      this.courses = data;
      console.log(this.courses)
      
    });
  }
  updateCourse(id: number){
    this.router.navigate(['Edit', id]);
  }
  deleteCourse(id:number){
    this.courseservice.deleteCourse(id).subscribe( data => {
      console.log(data);
      this.getCourse();
    })
  }
}

