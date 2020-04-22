import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private readonly titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Portfólio: Vinicius Santos');
  }

}
