import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-slider-producto',
  templateUrl: './slider-producto.component.html',
  styleUrls: ['./slider-producto.component.scss']
})
export class SliderProductoComponent implements OnInit {
  
  @Output() adicionar:EventEmitter<Producto>;
  productos: Producto[];

  constructor() { 
    this.productos = new Array<Producto>();
    for(let i = 0; i < 5; i++){
      
        let p = new Producto();
        p.id = i;
        p.nombre = `nombre ${i}`;
        p.descripcion = `descripción ${i}`;
        p.precio = i*1000;
        p.imagen = "https://loremflickr.com/320/240/cats,dogs/all";
        
        this.productos.push(p);
    
    }


  }

  ngOnInit() {
  }

  agregarItem(producto: Producto){
    console.log(`producto agregado ${producto.id}: ${producto.nombre} ${producto.precio} `);
  }
}
