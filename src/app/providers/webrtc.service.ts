import { Injectable } from '@angular/core';
import Peer from 'peerjs';
@Injectable({
  providedIn: 'root'
})
export class WebrtcService {
  peer: Peer;
  myStream: MediaStream;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;

  stun = 'stun.l.google.com:19302';
  mediaConnection: Peer.MediaConnection;
  options: Peer.PeerJSOption;
  stunServer: RTCIceServer = {
    urls: 'stun:' + this.stun,
  };
  nowstream: MediaStream;
  constructor() {
    this.options = {  // not used, by default it'll use peerjs server
      key: 'cd1ft79ro8g833di',
      debug: 3
    };
    
   }
   getMedia() {
     navigator.mediaDevices.getUserMedia({ audio: true, video: true}).then((stream)=>{
      this.handleSuccess(stream);
      this.nowstream = stream;
     })
   /* navigator.getUserMedia({ audio: true}, (stream) => {
    this.handleSuccess(stream);
      this.nowstream = stream;
    }, (error) => {
      this.handleError(error);
    }); */
  }

  async init(userId: string, myEl: HTMLMediaElement, partnerEl: HTMLMediaElement) {
    this.myEl = myEl;
    this.partnerEl = partnerEl;
    try {
      this.getMedia();
    } catch (e) {
      this.handleError(e);
    }
    await this.createPeer(userId);
    this.setupPAudioOutput(this.partnerEl);
  }

  async createPeer(userId: string) {
    this.peer = new Peer(userId);
    this.peer.on('open', () => {
      this.wait();
    });
  }

  call(partnerId: string) {
    const call = this.peer.call(partnerId, this.myStream);
    call.on('stream', (stream) => {
      console.log(stream);
      this.partnerEl.srcObject = stream;
    });
  }

  wait() {
    this.peer.on('call', (call) => {
      call.answer(this.myStream);
      call.on('stream', (stream) => {
        this.partnerEl.srcObject = stream;
      });
    });
  }

  handleSuccess(stream: MediaStream) {
    this.myStream = stream;
    this.myEl.srcObject = stream;
  }
  close() {
    const stream = this.nowstream;
  const tracks = stream.getTracks();

  tracks.forEach(function(track) {
    track.stop();
  });
   this.peer.destroy();
  }
  handleError(error: any) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      //const v = constraints.video;
     // this.errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
      this.errorMsg(`The resolution px is not supported by your device.`);
    } else if (error.name === 'PermissionDeniedError') {
      this.errorMsg('Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.');
    }
    this.errorMsg(`getUserMedia error: ${error.name}`, error);
  }

  errorMsg(msg: string, error?: any) {
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }
  async setupPAudioOutput(paudio){
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
const audioDevices = devices.filter(device => device.kind === 'audiooutput');

await paudio.setSinkId(audioDevices[1].deviceId);

  }
}
