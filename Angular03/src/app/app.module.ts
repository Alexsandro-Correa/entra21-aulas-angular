import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { YugiComponent } from './yugi/yugi.component';
import { HearthstoneComponent } from './hearthstone/hearthstone.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    YugiComponent,
    HearthstoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
