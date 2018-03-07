import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'preview/:id', component: PreviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
