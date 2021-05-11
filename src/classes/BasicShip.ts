import {IsShip} from '../interfaces/IsShip'
import {Logger} from '../app';


export class BasicShip {
    
    constructor(        
        public ship: IsShip,
    ){}

    Description(ID: number): string {

        return `    ========================== \n 
        Ship ID:       ${ID}\n
        Ship name:     ${this.ship.name}\n
        Ship damage:   ${this.ship.damage}\n
        Ship speed:    ${this.ship.speed}\n
        Ship health:   ${this.ship.health}\n
        Ship tech:     ${this.ship.tech}\n
        Ship Accuracy: ${this.ship.accuracy}\n\n`

    }

    FightDesc(): string {
        return `${this.ship.name}:\n
        --- DMG:  ${this.ship.damage}\n
        --- SPD:  ${this.ship.speed}\n
        --- HP:   ${this.ship.health}\n
        --- Tech: ${this.ship.tech}\n
        --- ACC:  ${this.ship.accuracy}\n `
    }

    Battle(opponent: BasicShip): void {

        // DO POPRAWY, ALE JESTEM DUMNY Z ZAMYSLU

        let raport: string = '';
        let round: number = 1;

        let ship1name: string = this.ship.name;
        let ship1health: number = this.ship.health;
        let ship1damage: number = this.ship.damage;
        let ship1dodge: number = Math.floor( (Math.log(this.ship.speed + 2)/3) /Math.log(1.06) );
        if (ship1dodge < 1) { ship1dodge = 1 }
        let ship1accuracy: number = Math.floor( (Math.log(this.ship.accuracy + 2)/3) /Math.log(1.06) );

        let ship2name: string = opponent.ship.name;
        let ship2health: number = opponent.ship.health;
        let ship2damage: number = opponent.ship.damage;
        let ship2dodge: number = Math.floor( (Math.log(opponent.ship.speed + 2)/3) /Math.log(1.06) );
        if (ship2dodge < 1) { ship2dodge = 1 }
        let ship2accuracy: number = Math.floor( (Math.log(opponent.ship.accuracy + 2)/3) /Math.log(1.06) );

        function BattleInit() {

            Logger.innerText = ``;
            let fight = true;
            let round = 1;
            
            while (fight) {
                //                               BASE DMG    +  RANDOM DIGIT BETWEEN -15%_BASEDMG AND 15%_BASEDNG
                let ship1damageRand = Math.floor(ship1damage + Math.floor(Math.random() * (ship1damage*0.15 + ship1damage*0.15 + 1) ) + -ship1damage*0.15);
                let ship2damageRand = Math.floor(ship2damage + Math.floor(Math.random() * (ship2damage*0.15 + ship2damage*0.15 + 1) ) + -ship2damage*0.15);
                let ship1HitChance = Math.floor(Math.random()*(100 + ship1accuracy) + 1);
                let ship2HitChance = Math.floor(Math.random()*(100 + ship2accuracy) + 1);

                if(ship1health > 0) {
                    
                    if(fight) {

                        Logger.innerText += `\n\n\n ---------- ROUND ${round} ---------- \n\n`;

                        if (ship1HitChance > ship2dodge) {
                            ship2health -= ship1damageRand;
                            Logger.innerText += `${ship1name} has hit ${ship2name} for ${ship1damageRand}HP!\n Current ${ship2name} health: ${ship2health}.\n\n`
                        } else {
                            Logger.innerText += `${ship1name}'s attack has been dodged!\n Current ${ship2name} health: ${ship2health}.\n\n`
                        }

                    }

                } else {
                    Logger.innerText += ` ----- ${ship1name} has been defeated. ----- \n`
                    Logger.innerText += `${ship2name} has been left with ${ship2health}.\n`
                    fight = false;
                }

                if(ship2health > 0) {

                    if(fight) {

                        if (ship2HitChance > ship1dodge) {
                            ship1health -= ship2damageRand;
                            Logger.innerText += `${ship2name} has hit ${ship1name} for ${ship2damageRand}HP!\n Current ${ship1name} health: ${ship1health}.\n\n`
                        } else {
                            Logger.innerText += `${ship2name}'s attack has been dodged!\n Current ${ship1name} health: ${ship1health}.\n\n`
                        }

                    }

                } else {

                    Logger.innerText += `\n\n\n ----- ${ship2name} has been defeated. ----- \n`
                    Logger.innerText += `${ship1name} has been left with ${ship1health}.\n`
                    fight = false;
                }

                round++;
            }

        }

        BattleInit();
    }


}

