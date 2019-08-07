import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardsService]
})
export class CardComponent implements OnInit {

  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit() {
    this.cardsService.getSearch()
      .subscribe(([card]) => {
        Object.keys(card).map(key => {
          this[key] = card[key];
        });
      });
  }

}
