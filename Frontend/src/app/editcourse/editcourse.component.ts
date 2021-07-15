import { Component, OnInit } from '@angular/core';
import { CourseserviceService } from '../courseservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.scss']
})
export class EditcourseComponent implements OnInit {
  id!: any;
  course: Course = new Course();
  constructor(private courseservice: CourseserviceService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    
    /*this.route.queryParams.subscribe(params => {
      this.id = params['queryParams'];
      console.log(this.id);
      
  });*/
  this.id = this.route.snapshot.paramMap.get("id");
  console.log(this.id);
    

   this.courseservice.getCourseById(this.id).subscribe(data => {
    
      this.course = data;
    }, error => console.log(error));
  
   
  }

  onSubmit(){
    this.courseservice.updateCourse(this.id,this.course).subscribe( data =>{
      //console.log(data);
      this.goToCourseList();
      
    },
    error => console.log(error));
  }
   
  goToCourseList(){
    this.router.navigate(['/Home']);
  }

  


}
