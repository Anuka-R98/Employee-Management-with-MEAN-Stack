import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ EmployeeService ]
})

export class EmployeeComponent {

  constructor( protected employeeService: EmployeeService ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm( form?: NgForm ) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null  as any
    }
  }

  onSubmit( form: NgForm ){
    
  }

}
