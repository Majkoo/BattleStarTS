import { IsShip } from './interfaces/IsShip';
import { BasicShip } from './classes/BasicShip';
import { ShipCreator } from './classes/ShipCreator';


// fight variables
const fightForm = document.querySelector('#fightForm') as HTMLFormElement;
let s1Input = document.querySelector("#shipID1") as HTMLInputElement;
let s2Input = document.querySelector("#shipID2") as HTMLInputElement;

// log variables
let shipLog  = document.querySelector('#shipLog') as HTMLElement;
export let Logger = document.querySelector('#fightLog') as HTMLElement;

// fight initialising function
fightForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    if ((s1Input.valueAsNumber >= 0 && s1Input.valueAsNumber < shipList.length) && (s2Input.valueAsNumber >= 0 && s2Input.valueAsNumber < shipList.length)) {
        shipList[s1Input.valueAsNumber].Battle(shipList[s2Input.valueAsNumber]);
    } else {
        Logger.innerText = ` Invalid fight. \n Use Valid ship ID's. `
    }
});

const ShipCreatingInstance = new ShipCreator();
ShipCreatingInstance.StartListening();

// default ships
export let shipList: BasicShip[] = []

let BStar: IsShip = {
    name: 'BattleStar',
    damage: 100,
    speed: 15,
    health: 2000,
    tech: 10,
    accuracy: 10,
}
let BattleStar = new BasicShip(BStar)

let SStar: IsShip = {
    name: 'ShadowStar',
    damage: 90,
    speed: 15,
    health: 2300,
    tech: 10,
    accuracy: 10,
}
let Shadow = new BasicShip(SStar)

shipList.push(Shadow);
shipList.push(BattleStar);
shipList.forEach( ship => { shipLog.innerText += ship.Description(shipList.indexOf(ship)) })