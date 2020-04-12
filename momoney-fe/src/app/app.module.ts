import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componenets
import { HeaderComponent } from './components/header/header/header.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { DepositComponent } from './components/forms/deposit/deposit.component';
import { TransferComponent } from './components/forms/transfer/transfer.component';
import { AutosaveComponent } from './components/forms/autosave/autosave.component';
import { OpenAcctComponent } from './components/forms/open-acct/open-acct.component';
import { CloseAcctComponent } from './components/forms/close-acct/close-acct.component';
import { ForgotPwComponent } from './components/user/forgot-pw/forgot-pw.component';
import { SummaryComponent } from './components/account/summary/summary.component';
import { DetailsComponent } from './components/account/details/details.component';
import { UpdateComponent } from './components/user/update/update.component';
import { ForgotUnameComponent } from './components/user/forgot-uname/forgot-uname.component';
import { InfoComponent } from './components/user/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DepositComponent,
    TransferComponent,
    AutosaveComponent,
    OpenAcctComponent,
    CloseAcctComponent,
    ForgotPwComponent,
    SummaryComponent,
    DetailsComponent,
    UpdateComponent,
    ForgotUnameComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
