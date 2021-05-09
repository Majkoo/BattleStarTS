import {Listener} from './ButtonListener';
import {shipList} from '../app';
import {BasicShip} from './BasicShip';

export class FormListener {

    StartListening() {
        let shipLog = document.querySelector('#shipLog') as HTMLElement;
        let Logger = document.querySelector('#fightLog') as HTMLElement;

        const RemainingPoints = document.querySelector('#remainingPoints') as HTMLInputElement;
        const newShipForm = document.querySelector('#shipForm') as HTMLFormElement;

        const nameInput = document.querySelector('#inputName') as HTMLInputElement;
        const damageInput = document.querySelector('#inputDamage') as HTMLInputElement;
        const speedInput = document.querySelector('#inputSpeed') as HTMLInputElement;
        const healthInput = document.querySelector('#inputHealth') as HTMLInputElement;
        const techInput = document.querySelector('#inputTech') as HTMLInputElement;
        const accuracyInput = document.querySelector('#inputAccuracy') as HTMLInputElement;

        newShipForm.addEventListener('submit', (e: Event) => {
            e.preventDefault();
    
            if (nameInput.value.length > 3 && RemainingPoints.valueAsNumber === 0) {

            let ship = new BasicShip(
                nameInput.value, 
                damageInput.valueAsNumber, 
                speedInput.valueAsNumber, 
                healthInput.valueAsNumber,
                techInput.valueAsNumber,
                accuracyInput.valueAsNumber
                )

                shipList.push(ship);
                shipLog.innerText = '';
                shipList.forEach( ship => { shipLog.innerText += ship.Description(shipList.indexOf(ship)) } );
                Logger.innerText = ` Ship "${nameInput.value}" sucessfully created!\nNow you can see it in this sliding thing, on the right.`
            } else {
            Logger.innerText = ` This ship couldn't be created. \n 'Ship name' should exist and have more than 3 letters.\n Also make sure you have no stat points left`
            
            }
        });  
    
    // DECREASE BUTTONS   DECREASE BUTTONS   DECREASE BUTTONS   DECREASE BUTTONS   DECREASE BUTTONS   DECREASE BUTTONS   DECREASE BUTTONS   DECREASE BUTTONS  
        const DmgDcsListen = new Listener(document.querySelector('#dmgDcsBtn') as HTMLButtonElement, damageInput, RemainingPoints);
        DmgDcsListen.DecreaseListener();
        const SpdDcsListen = new Listener(document.querySelector('#spdDcsBtn') as HTMLButtonElement, speedInput, RemainingPoints);
        SpdDcsListen.DecreaseListener();
        const HpDcsListen = new Listener(document.querySelector('#hpDcsBtn') as HTMLButtonElement, healthInput, RemainingPoints);
        HpDcsListen.DecreaseListener();
        const TechDcsListen = new Listener(document.querySelector('#TechDcsBtn') as HTMLButtonElement, techInput, RemainingPoints);
        TechDcsListen.DecreaseListener();
        const AccDcsListen = new Listener(document.querySelector('#AccDcsBtn') as HTMLButtonElement, accuracyInput, RemainingPoints);
        AccDcsListen.DecreaseListener();
        
    // INCREASE BUTTONS   INCREASE BUTTONS   INCREASE BUTTONS   INCREASE BUTTONS   INCREASE BUTTONS   INCREASE BUTTONS   INCREASE BUTTONS   INCREASE BUTTONS
        const DmgIncListen = new Listener(document.querySelector('#dmgIncBtn') as HTMLButtonElement, damageInput, RemainingPoints);
        DmgIncListen.IncreaseListener();
        const SpdIncListen = new Listener(document.querySelector('#spdIncBtn') as HTMLButtonElement, speedInput, RemainingPoints);
        SpdIncListen.IncreaseListener();
        const HpIncListen = new Listener(document.querySelector('#hpIncBtn') as HTMLButtonElement, healthInput, RemainingPoints);
        HpIncListen.IncreaseListener();
        const TechIncListen = new Listener(document.querySelector('#TechIncBtn') as HTMLButtonElement, techInput, RemainingPoints);
        TechIncListen.IncreaseListener();
        const AccIncListen = new Listener(document.querySelector('#AccIncBtn') as HTMLButtonElement, accuracyInput, RemainingPoints);
        AccIncListen.IncreaseListener();

    }
}