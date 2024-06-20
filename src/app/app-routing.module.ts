import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyEnergyComponent } from './components/buy-energy/buy-energy.component';
import { ProviderInfoComponent } from './components/provider-info/provider-info.component';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';
import { UpdateProviderComponent } from './components/update-provider/update-provider.component';

const routes: Routes = [
  { path: 'register-provider', component: RegisterProviderComponent },
  { path: 'update-provider', component: UpdateProviderComponent },
  { path: 'buy-energy', component: BuyEnergyComponent },
  { path: 'provider-info', component: ProviderInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
