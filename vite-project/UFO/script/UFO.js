export class UFO {
    constructor(type, point) {
        var _a;
        this.Point = point;
        this.Type = type;
        this.Divelement = document.createElement('div');
        this.Divelement.classList.add('ufo');
        this.Divelement.style.backgroundImage = `url(images/${type}.png)`;
        this.Divelement.addEventListener('click', () => this.CollectUFOpoint());
        this.SetPosition();
        (_a = document.querySelector('#gameArea')) === null || _a === void 0 ? void 0 : _a.appendChild(this.Divelement);
    }
    CollectUFOpoint() {
        let actPoint = Number(document.querySelector('#actPoint').innerHTML);
        actPoint += this.Point;
        if (actPoint < 0) {
            actPoint = 0;
            document.querySelector('#actPoint').innerHTML = actPoint.toString();
            this.RemoveDiv();
        }
        else {
            document.querySelector('#actPoint').innerHTML = actPoint.toString();
            this.RemoveDiv();
        }
    }
    SetPosition() {
        const Leftright = Math.floor(Math.random() * 101);
        const UpDown = Math.random() * 390;
        if (Leftright > 50) {
            this.Divelement.style.top = `${UpDown}px`;
            this.Divelement.style.left = `${1}rem`;
            let x = 1;
            this.Setdrifting = setInterval(() => {
                x++;
                this.Divelement.style.left = `${x}rem`;
                if (x == 90) {
                    this.RemoveDiv();
                    clearInterval(this.Setdrifting);
                }
            }, 30);
        }
        else {
            this.Divelement.style.top = `${UpDown}px`;
            this.Divelement.style.left = `${89}rem`;
            let x = 89;
            this.Setdrifting = setInterval(() => {
                x--;
                this.Divelement.style.left = `${x}rem`;
                if (x == 0) {
                    this.RemoveDiv();
                    clearInterval(this.Setdrifting);
                }
            }, 30);
        }
    }
    RemoveDiv() {
        this.Divelement.remove();
    }
}
