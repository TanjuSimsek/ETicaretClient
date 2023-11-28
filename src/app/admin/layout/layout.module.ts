import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponetsModule } from './componets/componets.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponetsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
