import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Emotion } from 'emotion';
import { MessageService } from 'message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmotionService {

  private emotionsUrl = 'api/emotions';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET emotions from the server */ 
  getEmotions (): Observable<Emotion[]> {
    return this.http.get<Emotion[]>(this.emotionsUrl)
      .pipe(
        tap(emotions => this.log(`fetched emotions`)),
        catchError(this.handleError('getEmotions', []))
      );
  }
/*

  geEmotions(): Promise<Emotion[]> {

    console.log("getHeroes method");

      return this.http.get(this.emotionsUrl)
        .toPromise()
        .then(response => response.json().data as Emotion[])
        .catch(this.handleError);
  }*/
  /** GET hero by id. Return `undefined` when id not found */
  getEmotionNo404<Data>(id: number): Observable<Emotion> {
    const url = `${this.emotionsUrl}/?id=${id}`;
    return this.http.get<Emotion[]>(url)
      .pipe(
        map(emotions => emotions[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} emotion id=${id}`);
        }),
        catchError(this.handleError<Emotion>(`getEmotion id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getEmotion(id: number): Observable<Emotion> {
    const url = `${this.emotionsUrl}/${id}`;
    return this.http.get<Emotion>(url).pipe(
      tap(_ => this.log(`fetched emotion id=${id}`)),
      catchError(this.handleError<Emotion>(`getEmotion id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchEmotions(term: string): Observable<Emotion[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Emotion[]>(`api/emotions/?name=${term}`).pipe(
      tap(_ => this.log(`found emotions matching "${term}"`)),
      catchError(this.handleError<Emotion[]>('searchEmotions', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addEmotion (emotion: Emotion): Observable<Emotion> {
    return this.http.post<Emotion>(this.emotionsUrl, emotion, httpOptions).pipe(
      tap((emotion: Emotion) => this.log(`added emotion w/ id=${emotion.id}`)),
      catchError(this.handleError<Emotion>('addEmotion'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteEmotion (emotion: Emotion | number): Observable<Emotion> {
    const id = typeof emotion === 'number' ? emotion : emotion.id;
    const url = `${this.emotionsUrl}/${id}`;

    return this.http.delete<Emotion>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted emotion id=${id}`)),
      catchError(this.handleError<Emotion>('deleteEmotion'))
    );
  }

  /** PUT: update the hero on the server */
  updateEmotion (emotion: Emotion): Observable<any> {
    return this.http.put(this.emotionsUrl, emotion, httpOptions).pipe(
      tap(_ => this.log(`updated emotion id=${emotion.id}`)),
      catchError(this.handleError<any>('updateEmotion'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a EmotionService message with the MessageService */
  private log(message: string) {
    this.messageService.add('EmotionService: ' + message);
  }
}
