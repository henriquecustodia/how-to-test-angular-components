import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponentComponent {

  title = 'Simple Component';

}
