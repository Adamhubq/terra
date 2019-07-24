export class User {
	idUser: number = 0;
 	 arrUser: {
		id: number, 
		guid: any, 
		surname: string, 
		name: string, 
		departament: 
		number, 
		date: any
	}[] = [
		{id : this.getId(), guid: this.guid(), surname: 'Рыбаков', name:'Абрам', departament:1, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Власов', name:'Богдан', departament:3, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Кораблев', name:'Василий', departament:0, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Акридос', name:'Борис', departament:3, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Сухинин', name:'Петр', departament:4, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Петров', name:'Вячеслав', departament:2, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Волков', name:'Петр', departament:3, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Александов', name:'Петр', departament:2, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Лошкаров', name:'Петр', departament:4, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Федоров', name:'Петр', departament:4, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Кавширко', name:'Петр', departament:4, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Кагин', name:'Дмитрий', departament:2, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Калинин', name:'Петр', departament:3, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Суворов', name:'Петр', departament:0, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Магин', name:'Владислав', departament:0, date: this.getDate()},
		{id : this.getId(), guid: this.guid(), surname: 'Маврик', name:'Григорий', departament:4, date: this.getDate()},

	];
	getDate(){
		let date = Date.now();
		return date;
	}
	getId() {
		return this.idUser++;
	}
	guid() {
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