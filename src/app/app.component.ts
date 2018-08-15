import { Component, OnInit } from '@angular/core';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke: any;
  constructor(private jokes: JokeService) {}

  ngOnInIt() {}

  getRandomJoke() {
    this.jokes.getRandom()
    //same as .then
    //    |
    .subscribe((joke)=> this.joke = joke);
  }
}
