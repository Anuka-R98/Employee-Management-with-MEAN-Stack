import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Employee } from '../shared/employee.model'
import { EmployeeService } from '../shared/employee.service'

declare var M: any;
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
    this.refreshEmployeeList();
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

  onSubmit( form: NgForm ) {
    if(form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Saved Successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated Successfully', classes: 'rounded' });
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit( emp: Employee ) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete( _id:string, form:NgForm ) {
    if(confirm('Are sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted Successfully', classes: 'rounded' });
      });
    }
  }
}
