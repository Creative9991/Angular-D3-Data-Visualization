import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        //height: 450,
        //margin : {
          //top: 20,
          //right: 20,
         // bottom: 50,
         // left: 55
        //},
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Continent'
        },
        yAxis: {
          axisLabel: 'Poplation in Billion',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "Asia" ,
            "value" : 4.4
          } ,
          {
            "label" : "Africa" ,
            "value" : 1.2
          } ,
          {
            "label" : "Europe" ,
            "value" : 0.73
          } ,
          {
            "label" : "North America" ,
            "value" : 0.57
          } ,
          {
            "label" : "South America" ,
            "value" : 0.42
          } ,
          {
            "label" : "Ociana" ,
            "value" : 0.039
          } ,
          {
            "label" : "Antartica" ,
            "value" : 0.000000001
          } ,
          {
            "label" : "Total" ,
            "value" : 7.1
          }
        ]
      }
    ];
  }

  constructor() {
    console.log('constructor ran..');
  }
}
