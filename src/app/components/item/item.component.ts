import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() itemToEdit = new EventEmitter();
  @Output() itemToDelete = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() { }

  editItem() {
    this.itemToEdit.emit(this.item);
  }

  checkItem() {
    if (this.item.comprado == true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  deleteItem() {
    this.itemToDelete.emit(this.item.id);
  }
}
