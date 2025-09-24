export class UFO {
    Point:number;
    Type:string;
    Divelement:HTMLDivElement;
    Setdrifting:any;

    constructor(type:string,point:number) {
        this.Point = point;
        this.Type = type;
        this.Divelement = document.createElement('div');
        this.Divelement.classList.add('ufo');
        this.Divelement.style.backgroundImage = `url(images/${type}.png)`;
        this.Divelement.addEventListener('click',()=>this.CollectUFOpoint());
        this.SetPosition();
        document.querySelector('#gameArea')?.appendChild(this.Divelement);


    }

    CollectUFOpoint(){
        let actPoint:number = Number((document.querySelector('#actPoint') as HTMLSpanElement).innerHTML);
        actPoint += this.Point;
        if ( actPoint < 0){
            actPoint = 0;
            (document.querySelector('#actPoint') as HTMLSpanElement).innerHTML = actPoint.toString();  
            this.RemoveDiv(); 
        }
        else{
            (document.querySelector('#actPoint') as HTMLSpanElement).innerHTML = actPoint.toString();  
            this.RemoveDiv();
        }
        
        
    }


    SetPosition(){
        const Leftright:number = Math.floor(Math.random()*101);
        const UpDown:number = Math.random() * 390
        if (Leftright > 50){
            this.Divelement.style.top = `${UpDown}px`;
            this.Divelement.style.left = `${1}rem`;
            let x:number = 1;
            this.Setdrifting = setInterval(() => {             
                x ++;
                this.Divelement.style.left = `${x}rem`
                if (x == 90){
                    this.RemoveDiv();
                    clearInterval(this.Setdrifting);
                }
                
            }, 30);
            
        }
        else {
            this.Divelement.style.top = `${UpDown}px`;
            this.Divelement.style.left = `${89}rem`;
            let x:number = 89;
            this.Setdrifting = setInterval(() => {          
                x--;
                this.Divelement.style.left = `${x}rem`
                if (x == 0){
                    this.RemoveDiv();
                    clearInterval(this.Setdrifting);
                }
                
            }, 30);
            

        }

    }

    RemoveDiv(){
        this.Divelement.remove();
    }



}