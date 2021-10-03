import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse } from 'capacitor-voice-recorder';
@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {

  constructor(
    private http:HttpClient,
    private route : Router,
    private router:ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  playrec(){
    const base64Sound = '...' // from plugin
const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`)
audioRef.oncanplaythrough = () => audioRef.play()
audioRef.load()
  }
}
