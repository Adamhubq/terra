/*
*  В компоненте отображается список из массива User
*/
import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { User } from './users';
import { Departament } from './departament';
import { ActivatedRoute, Router } from '@angular/router';

export interface PeriodicElement {
  
  name: string;
  surname: string;
  date: any;
  departament: string;

}
let user = new User();
let arrDep = new Departament();
const ELEMENT_DATA: PeriodicElement[] = user.arrUser;


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [ User ]
})

export class DataTableComponent {

  departaments: object = arrDep.arrDep;
  fromDateParent: string;
  displayedColumns: string[] = ['surname', 'name', 'date', 'departament'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  mindate: number;
  maxdate: number;
  filter:string;
  datas: any;

  onChanged(increased:any){
    this.datas = increased;
    let arrDate = Object.keys(this.datas[Object.keys(this.datas)[0]]).map((objectKey, index) => { // достанм дату из datepicker.
        return this.datas[Object.keys(this.datas)[0]][objectKey];                                 // Datepicker передает объект
    }).join('.');                                                                                 // но для сравнения нужен timestamp

    if (Object.keys(this.datas)[0] === 'fromDate') {
      this.mindate = new Date(arrDate).getTime();                                                  // тут перевод начальной даты
      return;
    }
    this.maxdate = new Date(arrDate).getTime();                                                    // тут перевод конечной даты
    this.applyFilter([this.mindate, this.maxdate]);
  }


  constructor(private global: User, private route: ActivatedRoute, private router: Router){
    let flag = false,
      getFilter = '';
      if (Object.keys(this.route.queryParams['value']).length) { 
        this.route.queryParams.subscribe(params => {
          flag = true;
          getFilter = params['search'];
        })
        this.applyFilter({flag: true, data:getFilter});
      }
      this.dataSource.filterPredicate = (data, filter) => {

        if ((typeof filter['data'] !== 'undefined') && flag) { // если задан гет
          let dataStr = data.surname + data.name + data.departament;
          filter = filter['data'];
          return dataStr.toLowerCase().indexOf(filter.toLowerCase()) != -1;
        } else if((typeof filter['data'] !== 'undefined') && !flag) { // фильтр с input
          let dataStr = data.surname.toLowerCase();
          return dataStr.indexOf(filter['data'].toLowerCase()) != -1;
        }
        let date = data.date;
        return (filter[0] < date) && (filter[0] < date); // с datepicker
        
      }
  }

  ngOnInit() {
     this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue;
  }
  openUser(id) {
    this.router.navigate(['/update-user'], { queryParams: { idUser: id } });
    console.log(id)
  }

}
