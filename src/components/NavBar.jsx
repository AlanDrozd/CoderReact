import React from "react";
import CartWidget from "./cartWidget";

export default function NavBar() {
    return (
        <nav>
        <ul>
          <li>
            <a href="." class="enlaces">Inicio</a>
          </li>
          <li>
            <a href="." class="enlaces">Coleccion</a>
          </li>
          <li>
            <a href="." class="enlaces">Carrito</a>
          </li>
          <li>
            <a href="." class="enlaces">Contacto</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
        
      </nav>
    )
}