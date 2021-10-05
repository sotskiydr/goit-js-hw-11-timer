class CountdownTimer {
    constructor(selector,targetDate) {
        this.element = document.querySelector(selector);
        this.targetDate = Date.parse(targetDate);
        this.start()
    }

    start(){
        setInterval(() =>{
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const {days , hours , mins , secs} = this.getTimeComponents(deltaTime);
            this.updateClock(this.getTimeComponents(deltaTime))
        },1000)
    }

    updateClock({days, hours, mins, secs}){
        this.element.querySelector("[data-value = 'days']").innerHTML = days;
        this.element.querySelector("[data-value='hours']").innerHTML = hours;
        this.element.querySelector("[data-value='mins']").innerHTML = mins;
        this.element.querySelector("[data-value='secs']").innerHTML = secs;
    }

    pad(value){
        return String(value).padStart(2,'0');
    }

    getTimeComponents (time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days , hours , mins , secs}
    }
}

const timerNewYear = new CountdownTimer('#timer-1',"Jan 1, 2022");

const timerMyBirthday = new CountdownTimer('#timer-2',"Nov 27, 2021");