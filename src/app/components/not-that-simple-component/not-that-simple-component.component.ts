import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-that-simple-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-that-simple-component.component.html',
  styleUrls: ['./not-that-simple-component.component.css'],
})
export class NotThatSimpleComponentComponent {
  @Input() label: string = '';

  @Output('myEvent') myEventEmitter = new EventEmitter();

  onClick() {
    this.myEventEmitter.emit();
  }
}
