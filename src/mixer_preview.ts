//import { Mixer } from './mixer';

export class MixerPreview{
   // private mixer: Mixer;

    constructor(){
       
        this.draw();
        
    }

    draw(){
        let main_frame = document.createElement("div");
        main_frame.classList.add("main-frame");
        document.body.appendChild(main_frame);
        main_frame.innerHTML = `
            <img id="band" class="instrument" src="src/assets/band.png" />
            <img id="piano" class="instrument" src="src/assets/piano.png" />
            <img id="guitar" class="instrument" src="src/assets/guitar.png" />
            <img id="mixer" class="instrument" src="src/assets/mixer.png" />
            <img id="speaker" class="instrument" src="src/assets/speaker.png" />
        `;
    
        let speaker_info_frame = document.createElement("div");
        speaker_info_frame.classList.add("speaker-info-frame");
        document.body.appendChild(speaker_info_frame);
        speaker_info_frame.innerHTML = `
            <p>Speaker: <span id="speaker-info"></span></p>
        `;

        // const pianoImage = document.getElementById('piano');
        // const guitarImage = document.getElementById('guitar');
        // const mixerImage = document.getElementById('mixer');
    
        // pianoImage.addEventListener('click', () => {
        //   // Simulacija klika na klavir
        //   this.mixer.sendSound('Piano sound data');
        //   this.updateSpeakerInfo('Piano');
        // });
    
        // guitarImage.addEventListener('click', () => {
        //   // Simulacija klika na gitaru
        //   this.mixer.sendSound('Guitar sound data');
        //   this.updateSpeakerInfo('Guitar');
        // });
    }

        // private updateSpeakerInfo(instrumentName: string) {
        //     const speakerInfo = document.getElementById('speaker-info');
        //     speakerInfo.textContent = instrumentName;
        //   }
    
}