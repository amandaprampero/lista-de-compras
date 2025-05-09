import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemGoingToEdit!: Item;
  edit = false;
  textBtn = 'Salvar item';

  itemValue!: string;
  constructor(private listService: ListaDeCompraService) { }

  ngOnInit(): void { }

  addItem() {
    this.listService.addListItem(this.itemValue);
    this.clearField();
  }

  clearField() {
    this.itemValue = '';
  }

  editItem() {
    this.listService.editListItem(this.itemGoingToEdit, this.itemValue);
    this.clearField();
    this.edit = false;
    this.textBtn = "Salvar item";
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemGoingToEdit'].firstChange) {
      this.edit = true;
      this.textBtn = 'Editar item';
      this.itemValue = this.itemGoingToEdit?.nome;
    }
  }
}
