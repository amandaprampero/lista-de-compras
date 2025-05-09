import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>;
  itemToBeEdited!: Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
  }

  editItem(item: Item) {
    this.itemToBeEdited = item;
  }

  deleteItem(id: number) {
    const index = this.listaDeCompras.findIndex((item) => item.id === id);
    this.listaDeCompras.splice(index, 1);
    this.listaService.updateLocalStorage();
  }

  clearList() {
    this.listaService.clearLocalStorage();
    this.listaDeCompras = [];
  }
}
