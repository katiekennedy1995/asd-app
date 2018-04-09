import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Emotion }         from 'emotion';
import { EmotionService }  from 'emotion.service';

@Component({
  selector: 'emotion-detail',
  templateUrl: './emotion-detail.component.html',
  styleUrls: [ './emotion-detail.component.css' ]
})
export class EmotionDetailComponent implements OnInit {
  @Input() emotion: Emotion;

  constructor(
    private route: ActivatedRoute,
    private emotionService: EmotionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmotion();
  }

  getEmotion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.emotionService.getEmotion(id)
      .subscribe(emotion => this.emotion = emotion);
  }

  goBack(): void {
    this.location.back();
  }


 save(): void {
    this.emotionService.updateEmotion(this.emotion)
      .subscribe(() => this.goBack());
  }
}

