
document.addEventListener('DOMContentLoaded', (event) =>{
    class Audio {
        constructor(buttonSelect) {
            this.buttons = document.querySelectorAll(buttonSelect);
            this.init();
        }
        
        init() {
            for (let i = 0; i < this.buttons.length; i++) {
            const button = this.buttons[i];
            button.addEventListener("click", () => this.playAudio(button));
            }
        }
        playAudio(button) {
            const audio = document.getElementById(button.dataset.key);
            audio.currentTime = 1;
            audio.play();
            this.logNoteInfo(button.dataset.key);
        }
        logNoteInfo(noteName){
            const note = new Note(noteName, this.getPitch(noteName));
            note.show();
        }
        getPitch(noteName){
            const pitches = {
                "do": 1,
                "re": 2,
                "mi": 3,
                "fa": 4,
                "sol": 5,
                "la": 6,
                "ti": 7
            };
            return pitches[noteName];
        }
    }
    class Piano {
        constructor(brand, model, color) {
            this.brand = brand;
            this.model = model;
            this.color = color;
        }

        play(note) {
          // play the note on the piano
            console.log(`Playing ${note} on ${this.brand} ${this.model} piano in ${this.color} color.`);
        }
    }
        
    class Xylophone {
        constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        }
    
        play(note) {
        // play the note on the xylophone
        console.log(`Playing ${note} on ${this.brand} ${this.model} xylophone in ${this.color} color.`);
        }
    }
        
    class Note {
        constructor(name, pitch) {
            this.nameList = ["do", "re", "mi", "fa", "sol", "la", "ti"];
            this.name = name;
            this.pitch = pitch;
        }
        // logs note 
        show() {
            console.log(`Note: ${this.name} (pitch: ${this.pitch})`);
        }
    }
    class Instrument{
        constructor(){
            this.record = [];
            this.player = new Audio(".btn");
            this.startTime = null;
            this.isPlaying = false;
            this.totalTime = 0; // initialize totalTime to 0
            this.nameList = ["do", "re", "mi", "fa", "sol", "la", "ti"]; // add nameList array
            this.init();
        }
        init() {
            const buttons = document.querySelectorAll(".btn");
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                button.addEventListener("click", () => this.playAudio(button));
            }
            
            const playRecordedButton = document.querySelector("#play-recorded-piano");
            playRecordedButton.addEventListener("click", () => this.playRecorded());

            const autocomposeButton = document.querySelector("#auto-compose-piano");
            autocomposeButton.addEventListener("click", () => this.autoCompose(8));
        }
        
        playAudio(button) {
            const audio = document.getElementById(button.dataset.key);
            audio.currentTime = 1;
            audio.play();
            
            const note = new Note(button.dataset.key, 0);
            this.record.push(note);
        }
        // add note
        addNote = (name, pitch) => {
            const note = new Note(name, pitch);
            this.record.push({note, timestamp: performance.now()});
        };
        //removing the last note
        removeLastNote = () => {
            this.record.pop();
        };
        // change the note
        changeNote = (index, name, pitch) => {
            const note = new Note(name, pitch);
            this.record[index] = { note, timestamp: performance.now() };
        };
        shuffleRecord = () => {
            for(let i = this.record.length - 1; i > 0; i-- ){
                const j = Math.floor(Math.random() * (i + 1));
                [this.record[i], this.record[j]] = [this.record[j], this.record[i]];
            }
        };
        autoCompose(num) {
            this.record = [];
            for (let i = 0; i < num; i++) {
                const randomNote = Math.floor(Math.random() * 7);
                const noteName = this.nameList[randomNote];
                const notePitch = Math.floor(Math.random() * 8);
                const note = new Note(noteName, notePitch);
                this.record.push(note);
                 // Play audio for generated note
                const audio = document.getElementById(noteName);
                audio.currentTime = 0;
                audio.play();
            }
        };
        getRandomNoteName = () => {
                    const nameList = ["do", "re", "mi", "fa", "sol", "la", "ti"];
                    return nameList[Math.floor(Math.random() * nameList.length)];
        };
        playRecorded() {
            for (let i = 0; i < this.record.length; i++) {
                const note = this.record[i];
                const audio = document.getElementById(note.name);
                audio.currentTime = 0;
                audio.play();
            }
        }
        logRecords() {
            console.log("Recorded Notes:");
            for (let i = 0; i < this.record.length; i++) {
                const note = this.record[i];
                console.log(`  ${i + 1}. ${this.record[i].note.name} (pitch: ${this.record[i].note.pitch})`);
            }
        };
    }
    
    const instrument = new Instrument();
    const piano = new Piano('Yamaha', 'C3', 'black');
    piano.play('C4'); // logs "Playing C4 on Yamaha C3 piano in black color."

    const xylophone = new Xylophone('Adams', 'Soloist', 'natural wood');
    xylophone.play('G5'); // logs "Playing G5 on Adams Soloist xylophone in natural wood color."

});
