import { Component, OnInit } from '@angular/core';
import { DataFakeService, Card  } from 'src/app/services/data-fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  gameCards: Card[] = [];

  constructor(private dataFake: DataFakeService) {}

  ngOnInit(): void {
    this.gameCards = this.dataFake.getCards()
  }
}
