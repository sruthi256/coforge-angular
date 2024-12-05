import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId:number=101;
  employeeName:string="Rahul";
  employeeAge:number=30;

  title="Employee Details - Data Binding using various directives"

  isManager: boolean = true;

  //array
  skills: string[]=['JavaScript' ,'Angular', 'TypeScript'];

  //enum
  Position: PositionType = PositionType.SeniorDeveloper;

  //object
  address: { street: String, city: string, postalCode: number}={
    street:'123 Main st',
    city: 'New York',
    postalCode: 10001
  };

  //Any (can be any type)
  extraInfo: any ='Additional employee info';

  //event binding - handling method
  message: string ='';

  //two way data binding
  employeePosition: string = 'Software Engineer';

  //Event binding method
  hello():void{
    this.message= "Hello from event Binding in Angular by - "+this.employeeName;
  }
  clear():void{
    this.message= '';
  }

  toggleManagerStatus():void{
    this.isManager= !this.isManager;
  }

  //Property Binding - one way Binding
  username:string = 'James Gosling';
  info:string="Property Binding - One Way";

  updateUserName(){
    this.username='John doe';
  }

  convertToDate(){
    const date = new Date();
    return date.toLocaleDateString();
  }

  add():number{
    return 10+200;
  }
}

//Enum for position type
enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead

}
