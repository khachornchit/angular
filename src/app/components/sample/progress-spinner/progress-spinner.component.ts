import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  showSpinner = false;

  loadData() {
    this.showSpinner = !this.showSpinner;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
