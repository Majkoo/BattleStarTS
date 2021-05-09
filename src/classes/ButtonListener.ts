
export class Listener {
    constructor(private button: HTMLButtonElement, private input:HTMLInputElement, private remPts:HTMLInputElement) {}

    DecreaseListener() {
        this.button.addEventListener('click', (e: Event) => {
            e.preventDefault();
            if (this.input.valueAsNumber > 1){
                this.input.valueAsNumber -= 1;
                this.remPts.valueAsNumber += 1;
            }
        });
    }

    IncreaseListener() {
        this.button.addEventListener('click', (e: Event) => {
            e.preventDefault();
            if (this.remPts.valueAsNumber){
                this.input.valueAsNumber += 1;
                this.remPts.valueAsNumber -= 1;
            }
        });
    }
}