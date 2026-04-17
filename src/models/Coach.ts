export type CoachControlType = "user" | "cpu";

export class Coach {
	name: string;
	age: number;
	style: string;
	tipo: CoachControlType;

	constructor(name: string, age: number, style: string, tipo: CoachControlType) {
		this.name = name;
		this.age = age;
		this.style = style;
		this.tipo = tipo;
	}
}
