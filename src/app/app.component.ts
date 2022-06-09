import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface Layer {
  id: string;
  content: {
    value: string;
    type: 'TEXT';
  };
}

interface Config {
  layers: Layer[];
}

import * as ScrollMagic from 'scrollmagic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public config$: Observable<Config>;

  public constructor(private http: HttpClient) {
    this.config$ = this.http.get<Config>('assets/sections.json').pipe(
      tap(() => setTimeout(() => this.initScrollMagic()))
    );
  }

  private initScrollMagic(): void {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: '#reveal1',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: '100%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
      .setClassToggle('#reveal1', 'visible') // add class to reveal
      .addTo(controller);
  }
}
