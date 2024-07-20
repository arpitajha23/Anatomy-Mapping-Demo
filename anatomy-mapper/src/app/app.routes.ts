import { Routes } from '@angular/router';
import { BodyDiagramComponent } from './body-diagram/body-diagram.component';
import { BodyPartDetailComponent } from './body-part-detail/body-part-detail.component';

export const routes: Routes = [
    { path: '', component: BodyDiagramComponent },
    { path: 'body-part/:id', component: BodyPartDetailComponent }
];
