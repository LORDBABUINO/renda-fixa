import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [CardsService]
})
export class CardListComponent implements OnInit {

  cardList = [];
  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit() {
    this.cardsService.getSearch()
      .subscribe((cardList) => {
        this.cardList = cardList;
      });
  }

}
