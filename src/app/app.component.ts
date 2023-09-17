import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponentComponent } from './components/simple-component/simple-component.component';
import { NotThatSimpleComponentComponent } from './components/not-that-simple-component/not-that-simple-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SimpleComponentComponent,
    NotThatSimpleComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'how-to-test-components';

  onClick() {
    console.log('Clicked!')
  }
}
