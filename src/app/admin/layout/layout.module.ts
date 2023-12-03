import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponetsModule } from './componets/componets.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponetsModule,
    RouterModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
