export class MixerPreview {
    //private instrumentIcons: { [key: string]: HTMLElement } = {};
  
    constructor() {
      this.draw();
    }
  
    draw() {
      // Create the main frame and speaker info frame
      let main_frame = document.createElement("div");
      main_frame.classList.add("main-frame");
      document.body.appendChild(main_frame);
      main_frame.innerHTML = `
        <img id="band" class="instrument" src="src/assets/band.png" />
        <img id="piano" class="instrument" src="src/assets/piano.png" />
        <img id="guitar" class="instrument" src="src/assets/guitar.png" />
        <img id="mixer" class="instrument" src="src/assets/mixer.png" />
        <img id="speaker" class="instrument" src="src/assets/speaker.png" />
        <img id="drums" class="instrument" src="src/assets/drums.png" />
        <img id="microphone" class="instrument" src="src/assets/microphone.png" />
   
      `;
  
      let speaker_info_frame = document.createElement("div");
      speaker_info_frame.classList.add("speaker-info-frame");
      document.body.appendChild(speaker_info_frame);
      speaker_info_frame.innerHTML = `
        <p><span id="speaker-info"></span></p>
      `;
  

}
}
  
