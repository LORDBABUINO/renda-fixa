import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [CardsService]
})
export class DetailsComponent implements OnInit {

  cnpj;
  details;
  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((response: any) => {
      this.cnpj = atob(response.get('cnpj'));
      this.cardsService.getDetails()
        .subscribe(({[this.cnpj]: cnpj}) => {
          this.details = cnpj;
        });
    });
  }
}
