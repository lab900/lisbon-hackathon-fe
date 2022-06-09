import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Layer {
  id: string;
  content: {
    value: string;
    type: 'TEXT'
  }
}

interface Config {
 layers: Layer[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public config$: Observable<Config>;

  public constructor(
    private http: HttpClient,
  ) {
    this.config$ = this.http.get<Config>('assets/sections.json');
  }
}
