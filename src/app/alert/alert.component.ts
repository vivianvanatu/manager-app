import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {

  }
  closeAlert() {
    this.close.emit();
  }

}
