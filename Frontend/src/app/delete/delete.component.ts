import { Component, OnInit } from '@angular/core';
import { CourseserviceService } from '../courseservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  id!:any;
  course: Course = new Course();
  constructor(private courseservice: CourseserviceService, private route: ActivatedRoute, private router: Router) {  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }
 
   
 
   
  goToCourseList(){
    this.router.navigate(['/Home']);
  }

  onSubmit()
  {
    this.courseservice.deleteCourse(this.id).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
      
    },
    error => console.log(error));
    
    this.goToCourseList();
  }
}
