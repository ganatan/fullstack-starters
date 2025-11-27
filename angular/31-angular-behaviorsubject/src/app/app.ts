import { Component } from '@angular/core';
import { BehaviorService } from './services/behavior';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageBehaviorSubject = '';
  messageSubject = '';
  messagePromise = '';
  messageObservable = '';

  constructor(private readonly behaviorService: BehaviorService) {
    this.behaviorService.behaviorSubject$.subscribe(value => {
      this.messageBehaviorSubject = value;
    });

    this.behaviorService.subject$.subscribe(value => {
      this.messageSubject = value;
    });
  }

  updateBehaviorSubject() {
    this.behaviorService.updateBehaviorSubject();
  }

  updateSubject() {
    this.behaviorService.updateSubject();
  }

  updatePromise() {
    this.messagePromise = 'en attente...';
    this.behaviorService.getPromise().then(value => {
      this.messagePromise = value;
    });
  }

  updateObservable() {
    this.behaviorService.getObservable().subscribe(value => {
      this.messageObservable = value;
    });
  }
}
