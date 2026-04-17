import { fakerPT_BR as faker } from '@faker-js/faker';

type PositionValue = "GOL" | "DEF" | "MEI" | "ATA";

export class Util{

    static getNome(): string{
        return faker.person.firstName('male') + ' ' + faker.person.lastName('male');
    }
    static getPhone(): string{
        return faker.phone.number()
    }

    static getPosition(): PositionValue {
        const positions: PositionValue[] = ["GOL", "DEF", "MEI", "ATA"];
        const index = faker.number.int({ min: 0, max: positions.length - 1 });
        return positions[index] ?? "GOL";
    }

    static getOverall(): number {
        return faker.number.int({ min: 70, max: 99 });
    }
}
