import { ArrayFromNumberPipe } from './array-from-number/array-from-number.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArrayFromNumberPipe],
  exports: [ArrayFromNumberPipe]
})
export class PipesModule { }
