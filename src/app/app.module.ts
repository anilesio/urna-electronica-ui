import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  JsonpInterceptor,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformeBilheteComponent } from './components/informe-bilhete/informe-bilhete.component';
import { RegistarVotoComponent } from './components/registar-voto/registar-voto.component';
import { TerminarSessaoComponent } from './components/terminar-sessao/terminar-sessao.component';

@NgModule({
  declarations: [
    AppComponent,
    InformeBilheteComponent,
    RegistarVotoComponent,
    TerminarSessaoComponent
  ],
  imports: [ReactiveFormsModule,
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
