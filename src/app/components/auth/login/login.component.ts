import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'app/shared/models/user.model';
import { ToastrService } from 'app/shared/services/toastr.service';
import { LocalStorageService } from '../../../shared/services/localStorage.service';

@Component({
  selector: 'prot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService.clearUserInfo();
  }

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get username(): AbstractControl {
    return this.loginForm.controls['username'];
  }

  get password(): AbstractControl {
    return this.loginForm.controls['password'];
  }

  public login() {
    this.loading = true;
    this.authService
      .login(this.loginForm.value as Pick<IUser, 'username' | 'password'>)
      .subscribe({
        next: (response) => {
          // console.log(response);
          this.toastrService.success('Usuário autenticado com sucesso !!');
          this.router.navigateByUrl('home');
          this.localStorageService.setUserInfo(response);
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          switch(error.status){
            case 404: 
              this.toastrService.error('Usuário não encontrado');
              break;
            case 401:
              this.toastrService.error('Senha Incorreta !!');
              break;
            case 500:
            case 504:
              this.toastrService.error('Erro de comunicação com backend');
              break;
            default:
              this.toastrService.error('Houve um problema com o login');
              break;
          }
          this.loading = false;
        },
      });
  }
}
