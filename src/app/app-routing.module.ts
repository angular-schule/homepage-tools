import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TestDriveComponent } from './scroll-to/test-drive.component';
import { TestDrive2Component } from './scroll-to/test-drive2.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'scroll-to-test-drive', component: TestDriveComponent },
  { path: 'scroll-to-test-drive2', component: TestDrive2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
