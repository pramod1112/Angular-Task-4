import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaxNumberValidator } from '../shared/validators/maxnumber.validators';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  myForm : any;
  inputBox1: any ;
  inputBox2: any ;
  data: any;

  constructor() {
    
  }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      box1 : new FormControl('', [Validators.required, MaxNumberValidator.maxNumber]),
      box2 : new FormControl('', [Validators.required, MaxNumberValidator.maxNumber])
    })

    this.data = {
      labels: ['box 1', 'box 2'],
      datasets: [
        {
          data: [50, 50],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",

          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",

          ]
        }]
    };
  }

  submitForm() {
   this.data=this.data = {
    labels: ['box 1', 'box 2'],
    datasets: [
      {
        data: [this.myForm.value.box1,this.myForm.value.box2],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",

        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",

        ]
      }]
  };;
  }

  onblur(){
    this.inputBox1=this.myForm.value.box1
    this.inputBox2=this.myForm.value.box2;

    if(this.inputBox1 && !this.inputBox2){
      this.myForm.patchValue({
        box2 : 100 - this.inputBox1,
      })
    }else{
      this.myForm.patchValue({
        box1 : 100 - this.inputBox2,
       
      })
    }
  } 
}
