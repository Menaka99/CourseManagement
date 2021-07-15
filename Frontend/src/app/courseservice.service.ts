import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  private baseURL = "/course/getAllCourse";
  private baseUrl1 = "/course/save";
  private baseUrl2= "course/updatecourse/"
  private baseurl ="/course/deletecourse/"
  private baseUrl3 = "/course/getCount"
  private base = "/course/"

  constructor(private httpClient: HttpClient) { }
  
  getCourseList(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  saveCourse(course : Course): Observable<any>{
    return this.httpClient.post(this.baseUrl1, course);
  }

  updateCourse(id: number, course : Course):
  Observable<any>{
    return this.httpClient.put(this.baseUrl2+id, course);
  }
  deleteCourse(id: number):
  Observable<any>{
    return this.httpClient.delete(this.baseurl+id);
  }
  groupbydata():Observable<any>{
    return this.httpClient.get(this.baseUrl3);
  }
  getCourseById(id: number): Observable<any>{
    return this.httpClient.get(this.base+id);

  }

  
}
