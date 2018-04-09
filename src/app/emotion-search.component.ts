import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Emotion } from 'emotion';
import { EmotionService } from 'emotion.service';

@Component({
  selector: 'emotion-search',
  templateUrl: './emotion-search.component.html',
  styleUrls: [ './emotion-search.component.css' ]
})
export class EmotionSearchComponent implements OnInit {
  emotions$: Observable<Emotion[]>;
  private searchTerms = new Subject<string>();

  constructor(private emotionService: EmotionService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.emotions$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.emotionService.searchEmotions(term)),
    );
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
