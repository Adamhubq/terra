import { Component, OnInit } from '@angular/core';
import { User } from '../data-table/users';
import { Departament } from '../data-table/departament';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar, NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  providers: [ User, Departament ]
})

export class DetailPageComponent implements OnInit {

	emptyUser: any = { //пустой юзер, если создание пользовтеля
		id: 0,
		guid: '',
		surname: 'Фамилия',
		name: 'Имя',
		departament: 'Департамент',
		data:{}
	}

	departament: object = new Departament().arrDep;
	model: NgbDateStruct;
	date: {year: number, month: number};
	showUser: object;
	updateId:number;
	updateName: string;
	updateSurname: string;
	updateGuid: string;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private calendar: NgbCalendar, private depart: Departament, private global: User, private route: ActivatedRoute) { 
	
	// модалка
	config.backdrop = 'static';
	config.keyboard = false;
	// --------

	if (Object.keys(this.route.queryParams['value']).length) { 
		this.route.queryParams.subscribe(params => {
      global.arrUser.forEach((index, value) => { // id записывал с 1 а не с нуля, тут цепляю
				if (index.id == params['idUser']) {  // index. Можно было и просто -1,
					this.updateId  = value;			 // но показалось, что так правильно будет
					return;
				}
			})
	  });
	} else {	
		this.emptyUser.id = this.updateId = global.arrUser[global.arrUser.length-1]['id'];
		console.log(this.emptyUser.id);
	}

    this.showUser = global.arrUser[this.updateId] || this.emptyUser;
    this.model = { 
    	'year': new Date(this.showUser['date']).getFullYear(),
  		'month': new Date(this.showUser['date']).getMonth()+1,
  		'day': new Date(this.showUser['date']).getDay(),
	}
  }
  newGuid(){
  	let obj = new User();
  	this.updateGuid = obj.guid();
  }
  /*
  * Для удобной проверки работы
  * сразу вывел console.log на массив
  *
  *  
  */
  save(event){
  	console.log('--Массив до--');
  	console.log(Object.assign({}, this.global.arrUser));
  	console.log('-------------');
  	
    let arrDate = Object.keys(this.model).map((objectKey, index) => {
        	return this.model[objectKey];
    	}).join('.'),
      timestamp = new Date(arrDate).getTime(),
      id = this.global.arrUser[this.global.arrUser.length-1]['id'];
    
    // объект с данными
    let newObj = {                              
  		id : event ? +this.updateId : ++id, 
  		guid: this.showUser['guid'],
  		surname: this.updateName,
  		name: this.updateSurname, 
  		departament: this.showUser['departament'],
  		date: new Date(arrDate).getTime()
    };

    // удаляем или обновляем

    if (event) { 
    	this.global.arrUser.splice(this.updateId, 1, newObj);
    } else {
    	this.global.arrUser.push(newObj);
    }

	  console.log('--Массив после--');
  	console.log(Object.assign({}, this.global.arrUser));
  	console.log('-------------');
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  showModalDelete(content){
  	this.modalService.open(content);
  }
  delete(content){ 
  	console.log('--Массив до--');
  	console.log(Object.assign({}, this.global.arrUser));
  	console.log('-------------');

    this.global.arrUser.splice(this.updateId, 1);
    this.showUser = this.emptyUser;
    this.showUser['id'] = this.global.arrUser.length;
    this.model = { 
    	'year': new Date().getFullYear(),
  		'month': new Date().getMonth()+1,
  		'day': new Date().getDay(),
	  }

	  console.log('--Массив после--');
    console.log(Object.assign({}, this.global.arrUser));
    console.log('-------------');
  }
  clear(){
  	this.showUser['surname'] = 'Фамилия';
  	this.showUser['guid'] = '';
  	this.showUser['name'] = 'Имя';
  	this.showUser['departament'] = 'Департамент';
  	this.showUser['data'] = { 
	    	'year': new Date().getFullYear(),
	  		'month': new Date().getMonth()+1,
	  		'day': new Date().getDay(),
		};
	this.updateSurname = ''; // вне массива имя и фамилия для 
	this.updateName = '';    // использования в placeholder
  }
  ngOnInit() {

  }

}
