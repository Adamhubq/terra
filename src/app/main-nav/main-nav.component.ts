import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
  alert: boolean = false;
  trace: any;
  searchStr: string = '';
  placeholder: string = 'Поиск';
  flag: boolean;
  isHandset$: Observable<boolean> = this
    .breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );
   isHandset$String: string = JSON.stringify(this.isHandset$);
  getGet(){
    console.log(JSON.stringify(this.isHandset$));
  }
  ngOnInit() {                 //при инициализации 
    this.breakpointObserver   
      .observe(Breakpoints.Handset)
      .subscribe((state: BreakpointState) => {
        this.flag = state.matches;
      });  
      // console.log(this.flag)
      // console.log(Breakpoints.Handset)
   };
  
  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this
      .breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        share()
      );
      // console.log(this.flag)
      // console.log(JSON.stringify(this.isHandset$));
  }
  search(){
    if (!this.searchStr.length) {
      this.alert = true;
      return;
    }
    location.href = "/list?search="+this.searchStr;
  }
}


