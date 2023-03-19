import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesgenerationComponent } from './imagesgeneration/imagesgeneration.component';
import { ModerationsComponent } from './moderations/moderations.component';
import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { Textdavinciedit001Component } from './textdavinciedit001/textdavinciedit001.component';

const routes: Routes = [
  {path: 'textdavinci003', component: Textdavinci003Component},
  {path: 'imagesgeneration', component: ImagesgenerationComponent},
  {path: 'textdavinciedit001', component: Textdavinciedit001Component},
  {path: 'moderations', component: ModerationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
