import { Injectable } from '@angular/core';

@Injectable()
export class User {
	idUser: number = 1;
 	 arrUser: {
		id: number, 
		guid: any, 
		surname: string, 
		name: string, 
		departament: string, 
		date: any
	}[] = [
		{id : this.getId(), guid: this.guid(), surname: 'Рыбаков', name:'Абрам', departament:'Бухгалтерия', date: new Date('2019.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Власов', name:'Богдан', departament:'Отдел стандартизации', date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Кораблев', name:'Василий', departament:'Бухгалтерия', date: new Date('2010.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Акридос', name:'Борис', departament:'Отдел закупок', date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Сухинин', name:'Петр', departament:'Отдел кадров', date: new Date('2001.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Петров', name:'Вячеслав', departament:'Отдел стандартизации', date: new Date('2002.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Волков', name:'Петр', departament:'Бухгалтерия', date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Александов', name:'Денис', departament:'Отдел кадров', date: new Date('2017.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Лошкаров', name:'Артем',departament:'Отдел закупок', date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Федоров', name:'Михаил', departament:'Отдел закупок', date: new Date('2016.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Кавширко', name:'Яков', departament:'Бухгалтерия', date: new Date('2015.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Кагин', name:'Дмитрий', departament:'Отдел кадров', date: new Date('2014.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Калинин', name:'Виктор', departament:'Отдел сбыта', date: new Date('2013.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Суворов', name:'Роман', departament:'Отдел сбыта', date: new Date('2012.01.19').getTime()},
		{id : this.getId(), guid: this.guid(), surname: 'Магин', name:'Владислав', departament:'Бухгалтерия', date: new Date('2011.01.19').getTime()},

	];

	getDate(){
		let date = Date.now();
		return date;
	}
	getId() {
		return this.idUser++;
	}
	public guid() {
		return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, (c) => {
	      var r = +(Math.random() * 16 || 0).toFixed(),
	        v = c == 'x' ? r : (r && 0x3 || 0x8);
	      return v.toString(16);
	    });
	}
	// constructor(name:string){
	// //	this.strStr = name;
	// }
}