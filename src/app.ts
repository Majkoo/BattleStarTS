import { BasicShip } from './classes/BasicShip';

// fight variables
const fightForm = document.querySelector('#fightForm') as HTMLFontElement;
let s1Input = document.querySelector("#shipID1") as HTMLInputElement;
let s2Input = document.querySelector("#shipID2") as HTMLInputElement;

// log variables
let Logger = document.querySelector('#fightLog') as HTMLElement;
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

// fight initialising function
fightForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if ((s1Input.valueAsNumber >= 0 && s1Input.valueAsNumber < shipList.length) && (s2Input.valueAsNumber >= 0 && s2Input.valueAsNumber < shipList.length)) {
        Logger.innerText = shipList[s1Input.valueAsNumber].Fight(shipList[s2Input.valueAsNumber]);
    } else {
        Logger.innerText = ` Invalid fight. \n Use Valid ship ID's. `
    }
});


// zapytac sie czy mozna w bardziej efektywny sposob to zrobic - caly formularz
// zakladam ze observable - zapytac sie jak by to tu rozwiazac


// SHIP CREATING CONTROLLERS -- SHIP CREATING CONTROLLERS -- SHIP CREATING CONTROLLERS -- SHIP CREATING CONTROLLERS
const newShipForm = document.querySelector('#shipForm') as HTMLFontElement;

const fNameInput = document.querySelector('#InputName') as HTMLInputElement;

const fDamageInput = document.querySelector('#inputDamage') as HTMLInputElement;
const fDmgDcs = document.querySelector('#dmgDcsBtn') as HTMLButtonElement;
const fDmgInc = document.querySelector('#dmgIncBtn') as HTMLButtonElement; 

const fSpeedInput = document.querySelector('#inputSpeed') as HTMLInputElement;
const fSpdDcs = document.querySelector('#spdDcsBtn') as HTMLButtonElement;
const fSpdInc = document.querySelector('#spdIncBtn') as HTMLButtonElement; 

const fHealthInput = document.querySelector('#inputHealth') as HTMLInputElement;
const fHpDcs = document.querySelector('#hpDcsBtn') as HTMLButtonElement;
const fHpInc = document.querySelector('#hpIncBtn') as HTMLButtonElement; 

const fRemPts = document.querySelector('#remainingPoints') as HTMLInputElement;


    newShipForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        if ((fNameInput.value) && (fDamageInput.valueAsNumber > 0) && (fSpeedInput.valueAsNumber > 0) && (fHealthInput.valueAsNumber > 0) && fRemPts.valueAsNumber === 0) {

        let ship = new BasicShip(fNameInput.value, fDamageInput.valueAsNumber*10, fSpeedInput.valueAsNumber, fHealthInput.valueAsNumber*100)
            console.clear();
            shipList.push(ship);
            shipLog.innerText = '';
            shipList.forEach( ship => { shipLog.innerText += ship.Description(shipList.indexOf(ship)) } );
            Logger.innerText =` Ship "${fNameInput.value}" created! \n Now you can see it in ShipList, this sliding thing at the right`;
        } else {
        console.log("This ship couldn't be created.");
        Logger.innerText = ` This ship couldn't be created. \n Make sure you've entered ship name, and you have no remaining stat points!`
        }
    });  

// DECREASE BUTTONS
fDmgDcs.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (fDamageInput.valueAsNumber > 1){
        fDamageInput.valueAsNumber -= 1;
        fRemPts.valueAsNumber += 1;
    }
});

fSpdDcs.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (fSpeedInput.valueAsNumber > 1){
        fSpeedInput.valueAsNumber -= 1;
        fRemPts.valueAsNumber += 1;
    }
});

fHpDcs.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (fHealthInput.valueAsNumber > 1){
        fHealthInput.valueAsNumber -= 1;
        fRemPts.valueAsNumber += 1;
    }
});


// INCREASE BUTTONS
fDmgInc.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (fRemPts.valueAsNumber){
        fDamageInput.valueAsNumber += 1;
        fRemPts.valueAsNumber -= 1;
    }
});

fSpdInc.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (fRemPts.valueAsNumber){
        fSpeedInput.valueAsNumber += 1;
        fRemPts.valueAsNumber -= 1;
    }
});

fHpInc.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (fRemPts.valueAsNumber){
        fHealthInput.valueAsNumber += 1;
        fRemPts.valueAsNumber -= 1;
    }
});
// /SHIP CREATING CONTROLLERS - /SHIP CREATING CONTROLLERS - /SHIP CREATING CONTROLLERS - /SHIP CREATING CONTROLLERS