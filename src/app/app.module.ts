import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';
import { UpdateProviderComponent } from './components/update-provider/update-provider.component';
import { BuyEnergyComponent } from './components/buy-energy/buy-energy.component';
import { ProviderInfoComponent } from './components/provider-info/provider-info.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterProviderComponent,
    UpdateProviderComponent,
    BuyEnergyComponent,
    ProviderInfoComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
