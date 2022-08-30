import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HearthstoneComponent } from './hearthstone/hearthstone.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { YugiComponent } from './yugi/yugi.component';

const routes: Routes = [
  {path:"pokemon", component: PokemonComponent},
  {path:"yugi", component: YugiComponent},
  {path:"hearthstone", component: HearthstoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
