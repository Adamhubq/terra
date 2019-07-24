import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { User } from './data-table/users';
import { Departament } from './data-table/departament';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	static Userobjects: object = new User();
	static Departobjects: object = new Departament();
	title: 'terra';
	constructor(){}
}
