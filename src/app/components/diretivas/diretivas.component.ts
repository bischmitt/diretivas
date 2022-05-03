import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/shared/services/people.service';
@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent implements OnInit {
  count = 0;
  nome = 'Bianca Klein Schmitt';
  text = '';

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    },
  ];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit() {
    this.getPeople();
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em min', nome)
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
