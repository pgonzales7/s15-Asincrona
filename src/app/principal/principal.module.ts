import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsinComponent } from './asin/asin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsinComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AsinComponent
  ]
})
export class PrincipalModule { }
