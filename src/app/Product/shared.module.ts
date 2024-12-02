import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
   exports: [
      CommonModule,
      HttpClientModule // Export it for use in other modules
   ]
})
export class SharedModule { }
