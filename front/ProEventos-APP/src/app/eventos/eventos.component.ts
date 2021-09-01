import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public filteredEvents : any = [];
  imageWidthSize : number = 150;
  imageMarginSize : number = 2;
  imageIsVisible : boolean = true;
  private _filterList : string = '';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getEventos();
    this.filteredEvents = this.eventos;
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response =>{
        this.eventos = response
        this.filteredEvents = response
      },
      error => console.log(error)
    );
  }

  public hideImages() : void {
    this.imageIsVisible = !this.imageIsVisible;
  }

  public get filterList() : string {
    return this._filterList;
  }

  public set filterList(value : string) {
    this._filterList = value;
    this.filteredEvents = this.filterList ? this.filterEvents(this.filterList) : this.eventos;
  }

  filterEvents(filterBy : string) : any {
    filterBy = filterBy.toLocaleLowerCase();
    return this.eventos.filter(
      (event: { tema: string; local: string; }) =>
        event.tema.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        event.local.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
