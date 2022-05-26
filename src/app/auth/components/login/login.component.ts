import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    senha: ['', ]
  })

  constructor(private fb: FormBuilder) { }

  onLoginGoogle() {}

  onSubmit() {}

  ngOnInit(): void {
  }

}
