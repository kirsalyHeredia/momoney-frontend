import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { DepositComponent } from './components/forms/deposit/deposit.component';
import { TransferComponent } from './components/forms/transfer/transfer.component';
import { AutosaveComponent } from './components/forms/autosave/autosave.component';
import { CloseAcctComponent } from './components/forms/close-acct/close-acct.component';
import { OpenAcctComponent } from './components/forms/open-acct/open-acct.component';
import { UpdateComponent } from './components/user/update/update.component';
import { ForgotPwComponent } from './components/user/forgot-pw/forgot-pw.component';
import { ForgotUnameComponent } from './components/user/forgot-uname/forgot-uname.component';
import { SignupComponent } from './components/user/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent},
  { path: 'signup', component:  SignupComponent},
  { path: 'deposit', component: DepositComponent},
  { path: 'transfer', component: TransferComponent},
  { path: 'autosave', component: AutosaveComponent},
  { path: 'close-acct', component: CloseAcctComponent},
  { path: 'open-acct', component: OpenAcctComponent},
  { path: 'account-info', component: UpdateComponent},
  { path: 'forgot-username', component: ForgotUnameComponent},
  { path: 'forgot-pw', component: ForgotPwComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
