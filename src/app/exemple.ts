import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-exemple-component',
  templateUrl: 'exemple.html',
  styleUrls: ['exemple.scss'],
})
export class ExempleComponent {
  color = 'primary';
  progression = 0;
  sub!: Subscription;

  ngOnInit() {
    this.createCounter();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  createCounter() {
    this.sub = timer(0, 100)
      .pipe(takeWhile((x) => x <= 100))
      .subscribe((x) => {
        this.progression = x;
      });
  }

  reset() {
    this.color = 'primary';
    this.sub.unsubscribe();
    this.progression = 0;
    this.createCounter();
  }
}
