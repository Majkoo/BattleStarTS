export class BasicShip {
    
    constructor(        
        public name: string,
        public damage: number,
        public speed: number,
        public health: number,
        public tech: number,
        public accuracy: number,
    ){}

    Description(ID: number): string {

        return `    ========================== \n 
        Ship ID:       ${ID}\n
        Ship name:     ${this.name}\n
        Ship damage:   ${this.damage}\n
        Ship speed:    ${this.speed}\n
        Ship health:   ${this.health}\n
        Ship tech:     ${this.tech}\n
        Ship Accuracy: ${this.accuracy}\n\n`

    }

    FightDesc(): string {
        return `${this.name}:\n
        --- DMG:   ${this.damage}  \n
        --- SPD:    ${this.speed} \n
        --- HP:   ${this.health} \n
        --- Tech: ${this.tech}\n
        --- ACC:  ${this.accuracy}\n `
    }

    Fight(opponent: BasicShip): string {

        // CALA LOGIKA DO WYMIANY

        let raport:string = '';
        let round:number = 1;

        let s1damage: number = this.damage;
        let s1speed: number  = this.speed;
        let s1health: number = this.health;
        let s1dodgeChance: number =  (Math.log(s1speed/2.5) / Math.log(1.15))+3;
        if (s1dodgeChance < 1) {
            s1dodgeChance = 1;
        }


        let s2damage: number = opponent.damage;
        let s2speed: number  = opponent.speed;
        let s2health: number = opponent.health;
        let s2dodgeChance: number =  (Math.log(s2speed/2.5) / Math.log(1.15))+3;
        if (s2dodgeChance < 1) {
            s2dodgeChance = 1;
        }

        raport += ` ${this.FightDesc()}\n`
        raport += ` ${opponent.FightDesc()}\n`
        raport += ` ${this.name} has ${Math.round(s1dodgeChance)}% dodge chance against ${opponent.name}\n`
        raport += ` ${opponent.name} has ${Math.round(s2dodgeChance)}% dodge chance against ${this.name}\n\n`
        raport += `------------------------------------------------------------------------\n`;
        raport += `-- Fight between ${this.name} and ${opponent.name} has begun! --\n`;
        raport += `------------------------------------------------------------------------\n\n`;


        while( (s1health > 0) && (s2health > 0) ) {

            raport += `\n\n\n\n\n\n\n---------- ROUND ${round}  ----------  \n\n `;

            let s1hitChance = Math.random() * (100 - 0) + 0;
            let s2hitChance = Math.random() * (100 - 0) + 0;

            if (s1hitChance > s2dodgeChance) {
                s2health -= s1damage;
                raport += `${opponent.name} got hit for ${s1damage}HP! Is has ${s2health}HP left.\n\n`;
            } else {
                raport += `${opponent.name} dodged! Is has ${s2health} health left.\n\n`;
            }
            
            if (s2hitChance > s1dodgeChance) {
                s1health -= s2damage;
                raport += `${this.name} got hit for ${s2damage}HP! Is has ${s1health}HP left.\n\n`;
            } else {
                raport += `${this.name} dodged! Is has ${s1health} health left.\n\n`;
            }
            
            round++;
        }
    return raport;
    }


}

