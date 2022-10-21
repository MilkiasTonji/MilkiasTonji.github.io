import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  progressBar :boolean = false;
  title = 'my-app';


  video_src = "http://3forces.s3.amazonaws.com/msp/msp_buyer_intro.mp4";
  // static.videogular.com/assets/videos/videogular.mp4
 

  constructor (private testService: TestService, private fb: FormBuilder){

}

  ngOnInit(): void {
     this.testService.progressBarActive.subscribe((value)=>{
      this.progressBar = value;
     })   

  }


  onPlayerReady(event: any){

  }

}
