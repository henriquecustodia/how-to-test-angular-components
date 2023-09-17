import { Routes } from '@angular/router';
import { SimpleComponentComponent } from './components/simple-component/simple-component.component';
import { NotThatSimpleComponentComponent } from './components/not-that-simple-component/not-that-simple-component.component';

export const routes: Routes = [
    {
        path: 'simple-component',
        component: SimpleComponentComponent
    },
    {
        path: 'not-that-simple-component',
        component: NotThatSimpleComponentComponent
    }
];
