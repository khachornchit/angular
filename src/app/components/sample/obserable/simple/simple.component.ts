import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // create an observable that emits a value
    const observable = of(1);

    // subscribe to the observable and log the value
    observable.subscribe(val => console.log(val));
  }
}
