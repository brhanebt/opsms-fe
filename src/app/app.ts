import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Backend } from './services/backend';
import { Order } from './models/order';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('opsms-fe');


}
