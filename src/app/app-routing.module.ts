import { TestDriveComponent } from './scroll-to/test-drive/test-drive.component';
import { TestDrive2Component } from './scroll-to/test-drive/test-drive2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'scroll-to-test-drive', component: TestDriveComponent },
  { path: 'scroll-to-test-drive2', component: TestDrive2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
