import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Emotion } from 'emotion';
import { EmotionService } from 'emotion.service';


@Component({
  selector: 'emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {
  emotions: Emotion[];

  constructor(private emotionService: EmotionService) { }

  ngOnInit() {
    this.getEmotions();
  }

  getEmotions(): void {
    this.emotionService.getEmotions()
    .subscribe(emotions => this.emotions = emotions);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.emotionService.addEmotion({ name } as Emotion)
      .subscribe(emotion => {
        this.emotions.push(emotion);
      });
  }

  delete(emotion: Emotion): void {
    this.emotions = this.emotions.filter(h => h !== emotion);
    this.emotionService.deleteEmotion(emotion).subscribe();
  }

}

