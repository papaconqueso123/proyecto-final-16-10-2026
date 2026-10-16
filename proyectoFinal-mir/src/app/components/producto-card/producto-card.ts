import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  productos: Producto[] = [
  { id: 1, nombre: "conjunto veraniego",  detalles: "vestido de corte en v con pliegues cosidos y encaje, disponible en talles xs,s,x,l y xl", precio: 35000 },
  { id: 2, nombre: "vestido de danza",  detalles: "", precio: 35000 },
  { id: 3, nombre: "pollera fresh",  detalles: "", precio: 35000 },
  { id: 4, nombre: "vestido azul hielo",  detalles: "", precio: 35000 },
  { id: 5, nombre: "vestido azul hielo",  detalles: "", precio: 35000 },
  { id: 6, nombre: "vestido azul hielo",  detalles: "", precio: 35000 },
  { id: 7, nombre: "vestido azul hielo",  detalles: "", precio: 35000 },
  { id: 8, nombre: "vestido azul hielo",  detalles: "", precio: 35000 },
  { id: 9, nombre: "vestido azul hielo",  detalles: "", precio: 35000 },
  { id: 10, nombre: "vestido azul hielo",  detalles: "", precio: 35000 },
  
];

    
  
}
