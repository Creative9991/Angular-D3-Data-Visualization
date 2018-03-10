import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
       // height: 350,
       // margin : {
         // top: 20,
         // right: 20,
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
          axisLabel: 'Country'
        },
        yAxis: {
          axisLabel: 'Population in Billion',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "China" ,
            "value" : 1.4
          } ,
          {
            "label" : "India" ,
            "value" : 1.3
          } ,
          {
            "label" : "United States Of America" ,
            "value" : 0.32
          } ,
          {
            "label" : "Indonesia" ,
            "value" : 0.26
          } ,
          {
            "label" : "Brazil" ,
            "value" : 0.20
          } ,
          {
            "label" : "Pakistan" ,
            "value" : 0.19
          } ,
          {
            "label" : "Nigeria" ,
            "value" : 0.18
          } ,
          {
            "label" : "Bangladesh" ,
            "value" : 0.16
          }
        ]
      }
    ];
  }

  constructor() {
    console.log('constructor ran..');
  }
}
