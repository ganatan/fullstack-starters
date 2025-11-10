import { Component } from '@angular/core';

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
  items: Item[] = Array.from({ length: ITEM_COUNT }, (_, i) => ({ id: i, value: 0 }));
  lastBatchSize = 0;
  maxCost = 0;

  constructor() {
    setInterval(() => this.updateItems(), UPDATE_INTERVAL);
  }

  private async updateItems() {
    this.lastBatchSize = BATCH_SIZE;
    const start = performance.now();
    for (let j = 0; j < BATCH_SIZE; j++) {
      const index = Math.floor(Math.random() * this.items.length);
      this.items[index].value++;
    }
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    const end = performance.now();
    const cost = end - start;
    if (cost > this.maxCost) this.maxCost = cost;
  }
}


// import { Component } from '@angular/core';

// type Item = { id: number; value: number };

// const ITEM_COUNT = 5000;
// const BATCH_SIZE = 500;
// const UPDATE_INTERVAL = 16;

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   items: Item[] = Array.from({ length: ITEM_COUNT }, (_, i) => ({ id: i, value: 0 }));
//   lastBatchSize = 0;
//   lastCost = 0;

//   constructor() {
//     setInterval(() => this.updateItems(), UPDATE_INTERVAL);
//   }

//   private async updateItems() {
//     this.lastBatchSize = BATCH_SIZE;

//     const start = performance.now();
//     for (let j = 0; j < BATCH_SIZE; j++) {
//       const index = Math.floor(Math.random() * this.items.length);
//       this.items[index].value++;
//     }

//     await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
//     const end = performance.now();

//     this.lastCost = end - start;
//   }
// }
