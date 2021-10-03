const refs = {
    days : document.querySelector("[data-value='days']"),
    hours : document.querySelector("[data-value='hours']"),
    mins : document.querySelector("[data-value='mins']"),
    secs : document.querySelector("[data-value='secs']")
}

class CountdownTimer {
    constructor(targetDate) {
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
        refs.days.innerHTML = days;
        refs.hours.innerHTML = hours;
        refs.mins.innerHTML = mins;
        refs.secs.innerHTML = secs;
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

const timer = new CountdownTimer("Jan 1, 2022");