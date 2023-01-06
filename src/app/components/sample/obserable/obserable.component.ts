import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-obserable',
  templateUrl: './obserable.component.html',
  styleUrls: ['./obserable.component.scss']
})
export class ObserableComponent implements OnInit {

  constructor() {
  }

  getData = (): Observable<any> => {
    return new Observable(observer => {
      axios.get('https://my-api.com/endpoint')
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  ngOnInit(): void {
    this.getData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
