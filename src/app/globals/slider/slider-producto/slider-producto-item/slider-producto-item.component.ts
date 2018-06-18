import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-slider-producto-item',
  templateUrl: './slider-producto-item.component.html',
  styleUrls: ['./slider-producto-item.component.scss']
})
export class SliderProductoItemComponent implements OnInit {
  @Input() producto:Producto;
  @Output() adicionar = new EventEmitter<Producto>();
  
  constructor() {
    
   

   }

  ngOnInit() {
  }

  agregarItem(){
    console.log(`agregado ${this.producto.id}:${this.producto.nombre}`);


    this.adicionar.emit(this.producto);


  };

  
}
