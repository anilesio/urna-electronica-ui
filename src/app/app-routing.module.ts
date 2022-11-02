import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeBilheteComponent } from './components/informe-bilhete/informe-bilhete.component';
import { RegistarVotoComponent } from './components/registar-voto/registar-voto.component';
import { TerminarSessaoComponent } from './components/terminar-sessao/terminar-sessao.component';

const routes: Routes = [
  {path: '', component: RegistarVotoComponent},
  {path: 'sessao-terminada', component: TerminarSessaoComponent},
  // {path: '', component: InformeBilheteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
