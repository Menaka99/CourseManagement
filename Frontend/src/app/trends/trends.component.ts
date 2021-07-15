import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Course } from '../course'
import { CourseserviceService } from '../courseservice.service';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  
   
  courses!: Array<Course>
  barChartData!:ChartDataSets[];
  barChartLabels:Array<Number> = [];
  ChartData=new Array();
 count1  = []

 
  data1:Array<String> = [];
  arr3!:Array<String>
  data!:any;
  arr1:Array<Number> = []
  arr2:Array<String> = []

  


  constructor(private courseservice: CourseserviceService) { }
  

  ngOnInit(): void {
   
    this.getCount();
 }
  type = 'bar';
  options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        yAxes : [{
            ticks : {
                max : 10,    
                min : 0
            }
        }]
    }
};
  private getCount(){
    

    this.courseservice.groupbydata().subscribe(data => {
      
      this.count1 = data;
      var c:number = 0;

      for(const key in this.count1)
      {
       
            for (const property in this.count1[key]) {
                 this.data1.push(property.toString());

                 this.barChartLabels.push(this.count1[c][property]);
                 c++;
                
            }
      }
      
      this.data = {
    
        labels:this.data1,
        datasets: [{
          label:"Number of courses in each location",
          
          data:this.barChartLabels,
          
         backgroundColor: ["#f38b4a","#f38b4a","#f38b4a"],
        }
        ]
      };

     
    });
    
  }
    
    
 
   
   
 

}
