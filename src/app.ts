import { BasicShip } from './classes/BasicShip';
import { ShipCreator } from './classes/ShipCreator';

// fight variables
const fightForm = document.querySelector('#fightForm') as HTMLFormElement;
let s1Input = document.querySelector("#shipID1") as HTMLInputElement;
let s2Input = document.querySelector("#shipID2") as HTMLInputElement;

// log variables
let shipLog  = document.querySelector('#shipLog') as HTMLElement;
let Logger = document.querySelector('#fightLog') as HTMLElement;

// fight initialising function
fightForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    if ((s1Input.valueAsNumber >= 0 && s1Input.valueAsNumber < shipList.length) && (s2Input.valueAsNumber >= 0 && s2Input.valueAsNumber < shipList.length)) {
        Logger.innerText = shipList[s1Input.valueAsNumber].Fight(shipList[s2Input.valueAsNumber]);
    } else {
        Logger.innerText = ` Invalid fight. \n Use Valid ship ID's. `
    }
});

const ShipCreatingInstance = new ShipCreator();
ShipCreatingInstance.StartListening();

// default ships
export let shipList: BasicShip[] = []
//                                           name         dmg spd hp
const BattleStar: BasicShip = new BasicShip('BattleStar', 45, 15, 2500, 10, 10);
const GalaxyStar: BasicShip = new BasicShip('GalaxyStar', 20, 99, 900, 3, 20);
const UltraStar: BasicShip  = new BasicShip('UltraStar', 80, 5, 1750, 15, 3);
const ShadowStar: BasicShip = new BasicShip('ShadowStar', 25, 55, 1250, 4, 2);
shipList.push(BattleStar);
shipList.push(GalaxyStar);
shipList.push(UltraStar);
shipList.push(ShadowStar);
shipList.forEach( ship => { shipLog.innerText += ship.Description(shipList.indexOf(ship)) })