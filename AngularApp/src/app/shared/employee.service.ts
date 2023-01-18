import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  
  selectedEmployee: Employee = new Employee;
  employees: Employee[] = [];

}
