import { Observable, interval, Subscription,from, merge, filter, startWith, map, catchError, switchMap } from 'rxjs';
import { Guitar } from './guitar';
import { Piano } from './piano';
import { Drums } from './drums';
import { Microphone } from './microphone';

// Create an array to store the audio elements for each sound
const audioElements: { id: number; audio: HTMLAudioElement }[] = [];

export class Speaker {
  private speakerIcon: HTMLElement;
  private pianoIcon: HTMLElement;
  private guitarIcon: HTMLElement;
  private drumsIcon: HTMLElement;
  private microphoneIcon: HTMLElement;
  private speakerInfoElement: HTMLElement | null;
  private currentAudio: HTMLAudioElement | null = null;
 

  constructor(){
    this.speakerInfoElement = document.getElementById('speaker-info');
    this.speakerIcon = document.getElementById("speaker");
    this.pianoIcon = document.getElementById("piano");
    this.guitarIcon = document.getElementById("guitar");
    this.drumsIcon = document.getElementById("drums");
    this.microphoneIcon = document.getElementById("microphone");
    this.fetchData();
    
    // // Kreiranje observable-a za preuzimanje zvukova
    // this.sounds$ = from(this.fetchSoundsFromServer()).pipe(
    //   catchError((error) => {
    //     console.error('Error fetching sounds:', error);
    //     return [];
    //   }),
    //   startWith([]) // Počnite sa praznim nizom kako biste izbegli grešku ako fetch ne uspe
    // );

    
  }

 // Define a function to create an audio element for each sound
 private createAudioElement(soundPath: string): HTMLAudioElement {
  const audio = new Audio(soundPath);
  audio.preload = "auto";
  return audio;
}



// Create a function to play a sound by ID
public playSoundById(id: number) {
  const audio = audioElements.find((element) => element.id === id)?.audio;
  if (audio) {
    if (this.currentAudio) {
      // Prekini reprodukciju prethodnog zvuka ako postoji
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
    this.currentAudio = audio;
    audio.play();
  } 
}

// Fetch data from JSON Server API
private apiUrl = "http://localhost:3000/sounds";

public fetchData() {
  fetch(this.apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Populate the audioElements array with audio elements
      audioElements.push(
        ...data.map((sound: any) => ({
          id: sound.id,
          audio: this.createAudioElement(`/src/assets/sounds/${sound.soundPath}`), // Update the URL
        }))
      );
    })
    .catch((error) => {
      console.error("Error fetching data from the server:", error);
    });
    console.log(audioElements);
    
}

  playSound(sound: string): void {
    const instrumentId = sound.charAt(0);
    const note = sound.slice(1);
    let instrumentName = '';

    switch (instrumentId) {
      case '0':
        instrumentName = 'Guitar';
        this.animateGuitar();
        this.playSoundById(0);
       
        // const audioGuitar = document.getElementById('guitarSound') as HTMLAudioElement;
        // if(audioGuitar){
        //   audioGuitar.currentTime=0;
        //   audioGuitar.play();
       // }
        break;
      case '1':
        instrumentName = 'Piano';
        this.animatePiano();
        this.playSoundById(1);
       
        
        // const audioPiano = document.getElementById('pianoSound') as HTMLAudioElement;
        // if(audioPiano){
        //   audioPiano.currentTime=0;
        //   audioPiano.play();
       // }
        break;
      case '2':
        instrumentName = 'Drums';
        this.animateDrums();
        this.playSoundById(2);
        
        // const audioDrums = document.getElementById('drumsSound') as HTMLAudioElement;
        // if(audioDrums){
        //   audioDrums.currentTime=0;
        //   audioDrums.play();
        // }
        break;
      case '3':
        instrumentName = 'Microphone';
        this.animateMicrophone();
        this.playSoundById(3);
       
        // const audioMic = document.getElementById('microphoneSound') as HTMLAudioElement;
        // if(audioMic){
        //   audioMic.currentTime=0;
        //   audioMic.play();
        // }
        break;
      default:
        instrumentName = 'Unknown instrument';
    }

    console.log(`${instrumentName} plays ${note}`);

    if (this.speakerInfoElement) {
      this.speakerInfoElement.textContent = `${instrumentName} plays ${note}`;
      this.animateSpeaker();
    }
  }

    public animateSpeaker() {
      this.speakerIcon.style.filter= "brightness(50%)";
      setTimeout(() => {
          this.speakerIcon.style.filter = "brightness(200%)";
      }, 200);
  }

  public animatePiano() {
    this.pianoIcon.style.filter = "brightness(200%)";
    setTimeout(() => {
        this.pianoIcon.style.filter = "brightness(100%)";
    }, 200);
}

public animateGuitar() {
  this.guitarIcon.style.filter = "brightness(200%)";
  setTimeout(() => {
      this.guitarIcon.style.filter = "brightness(100%)";
  }, 200);
}


public animateDrums() {
  this.drumsIcon.style.filter = "brightness(200%)";
  setTimeout(() => {
      this.drumsIcon.style.filter = "brightness(100%)";
  }, 200);
}


public animateMicrophone() {
  this.microphoneIcon.style.filter = "brightness(200%)";
  setTimeout(() => {
      this.microphoneIcon.style.filter = "brightness(100%)";
  }, 200);
}
  

}