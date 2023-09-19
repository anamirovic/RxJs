import { Observable, interval, Subscription,from, merge, filter, map, catchError, switchMap, zip } from 'rxjs';
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
        break;
      case '1':
        instrumentName = 'Piano';
        this.animatePiano();
        this.playSoundById(1);
        break;
      case '2':
        instrumentName = 'Drums';
        this.animateDrums();
        this.playSoundById(2);
        break;
      case '3':
        instrumentName = 'Microphone';
        this.animateMicrophone();
        this.playSoundById(3);
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