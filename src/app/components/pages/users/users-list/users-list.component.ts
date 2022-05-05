import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  displayedColumns = [
    'id',
    'nome',
    'idade',
    'profissao',
    'excluir',
    'editar'
  ];

  users: Array<User> = [];

  constructor(
    private userService: UserService,
    private location: Location,
    public notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log('ERRO AO EXECUTAR', err.status);
      }
    );
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      complete: () => {
        this.notifyService.notify('usuário excluído com sucesso!');
        console.log('Usuário Excluído');
        this.getUsers();
        this.location.back();
      },
      error: () => {
        this.notifyService.notify('Erro ao excluir usuário!');
      },
      next: () => {
        console.log('usuário excluído');
      },
    });
  }
}
