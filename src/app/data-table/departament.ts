export class Departament 
{
	idDep: number = 0;
 	 arrDep: {
		id: number, 
		name: string,
		date: Date
	}[] = [
		{id : this.getId(), name:'Бухгалтерия', date: new Date()},
		{id : this.getId(), name:'Отдел кадров', date: new Date()},
		{id : this.getId(), name:'Отдел сбыта', date: new Date()},
		{id : this.getId(), name:'Отдел закупок', date: new Date()},
		{id : this.getId(), name:'Отдел стандартизации', date: new Date()},
	];
	getId() {
		return this.idDep++;
	}
}