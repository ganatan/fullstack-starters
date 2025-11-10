import { Component, signal } from '@angular/core';

type Item = { id: number; value: number };


const ITEM_COUNT = 5000;
const BATCH_SIZE = 1;
const UPDATE_INTERVAL = 16;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = signal<Item[]>(Array.from({ length: ITEM_COUNT }, (_, i) => ({ id: i, value: 0 })));
  lastBatchSize = signal(0);
  maxCost = signal(0);

  constructor() {
    setInterval(() => this.updateItems(), UPDATE_INTERVAL);
  }

  private async updateItems() {
    this.lastBatchSize.set(BATCH_SIZE);
    const start = performance.now();
    const current = this.items();
    const clone = current.slice();
    for (let j = 0; j < BATCH_SIZE; j++) {
      const index = Math.floor(Math.random() * clone.length);
      const item = clone[index];
      clone[index] = { ...item, value: item.value + 1 };
    }
    this.items.set(clone);
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    const end = performance.now();
    const cost = end - start;
    if (cost > this.maxCost()) this.maxCost.set(cost);
  }
}
