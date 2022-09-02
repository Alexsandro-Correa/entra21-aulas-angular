import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';



@NgModule({
  declarations: [
    PropertyComponent,
    EventComponent,
    MaoDuplaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule

  ]
})
export class BindingModule { }
