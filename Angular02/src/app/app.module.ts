import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { FormsModule } from '@angular/forms';
import { EnviarComponent } from './enviar/enviar.component';
import { LoginComponent } from './login/login.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { SegurancaService } from './seguranca.service';
import { DiretivasModule } from './diretivas/diretivas.module';
import { BindingModule } from './binding/binding.module';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component'


@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    OutroComponent,
    ReceberDadosComponent,
    EnviarComponent,
    LoginComponent,
    InicioComponent,
    HeaderComponent,
    MenuComponent,
    ConsumindoApiComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DiretivasModule,
    BindingModule,
    HttpClientModule

  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
