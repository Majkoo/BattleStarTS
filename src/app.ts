import { BasicShip } from './classes/BasicShip';

// ship creating variables
const newShipForm = document.querySelector('#shipForm') as HTMLFormElement;
let nameInput   = document.querySelector('#inputName')   as HTMLInputElement;
let damageInput = document.querySelector('#inputDamage') as HTMLInputElement;
let speedInput  = document.querySelector('#inputSpeed')  as HTMLInputElement;
let healthInput = document.querySelector('#inputHealth') as HTMLInputElement;

// fight variables
const fightForm = document.querySelector('#fightForm') as HTMLFontElement;
let s1Input = document.querySelector("#shipID1") as HTMLInputElement;
let s2Input = document.querySelector("#shipID2") as HTMLInputElement;

// log variables
let fightLog = document.querySelector('#fightLog') as HTMLElement;
let shipLog  = document.querySelector('#shipLog') as HTMLElement;

// default ships
let shipList: BasicShip[] = []
//                                           name         dmg spd hp
const BattleStar: BasicShip = new BasicShip('BattleStar', 45, 15, 2500);
const GalaxyStar: BasicShip = new BasicShip('GalaxyStar', 20, 99, 900);
const UltraStar: BasicShip  = new BasicShip('UltraStar', 80, 5, 1750);
const ShadowStar: BasicShip = new BasicShip('ShadowStar', 25, 55, 1250);
shipList.push(BattleStar);
shipList.push(GalaxyStar);
shipList.push(UltraStar);
shipList.push(ShadowStar);
shipList.forEach( ship => { shipLog.innerText += ship.Description(shipList.indexOf(ship)) })

// ship creating function
newShipForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    if ((nameInput.value) && (damageInput.valueAsNumber > 0) && (speedInput.valueAsNumber > 0) && (healthInput.valueAsNumber > 0)) {

        let ship = new BasicShip(nameInput.value, damageInput.valueAsNumber, speedInput.valueAsNumber, healthInput.valueAsNumber)
        console.clear();
        shipList.push(ship);
        shipLog.innerText = '';
        shipList.forEach( ship => { shipLog.innerText += ship.Description(shipList.indexOf(ship)) } );
    } 
    else {
        console.log("This ship couldn't be created.");
    }
});    

// fight initialising function
fightForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if ((s1Input.valueAsNumber >= 0 && s1Input.valueAsNumber < shipList.length) && (s2Input.valueAsNumber >= 0 && s2Input.valueAsNumber < shipList.length)) {
        fightLog.innerText = shipList[s1Input.valueAsNumber].Fight(shipList[s2Input.valueAsNumber]);
    } else {
        fightLog.innerText = ` Invalid fight. \n Use Valid ship ID's. `
    }
});
