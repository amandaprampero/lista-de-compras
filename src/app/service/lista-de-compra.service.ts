import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  createItem(name: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: name,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  addListItem(name: string) {
    const item = this.createItem(name);
    this.listaDeCompra.push(item);
    this.updateLocalStorage();
  }

  editListItem(prevItem: Item, curItem: string) {
    const editedItem: Item = {
      id: prevItem.id,
      nome: curItem,
      data: prevItem.data,
      comprado: prevItem.comprado
    }

    const id = prevItem.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, editedItem);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }

  clearLocalStorage() {
    this.listaDeCompra = [];
    localStorage.removeItem('itens');
  }
}
