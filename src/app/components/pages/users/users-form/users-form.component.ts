import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];
  userId: any = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: '',
    });
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      console.log(this.userId);
      if (this.userId !== null) {
        this.userService.getUser(this.userId).subscribe((result) => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao,
          });
        });
      }
    });

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(
      (result) => {
        console.log(
          `Usuário ${result.nome} ${result.sobrenome} foi cadastrado com sucesso !`
        );
      },
      (err) => {},
      () => {
        this.location.back();
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(
      (result) => {
        console.log('usuario atualizado', result);
      },
      (err) => {},
      () => {
        this.location.back();
      }
    );
  }

  actionButton() {
    if (this.userId !== null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }
}
