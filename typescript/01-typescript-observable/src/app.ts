
import { Observable } from 'rxjs';

function getItems() {
  let result = new Observable(subscriber => {
    subscriber.next(true);
    subscriber.next(false);
    // subscriber.error(1234);
    subscriber.complete();
  })
  return result;
}

getItems().subscribe({
  next: v => console.log('next:', v),
  error: e => console.log('error:', e),
  complete: () => console.log('complete')
}
);

// function loadObservable() {
//   const result$ = new Observable<boolean>(subscriber => {
//     let i = 0;
//     setTimeout(() => {
//       subscriber.next(true)
//       setTimeout(() => {
//         subscriber.next(false)
//         setTimeout(() => {
//           subscriber.error(false)
//           setTimeout(() => {
//             subscriber.complete()
//           }, 2000)
//         }, 2000)
//       }, 2000)
//     }, 2000)
//   });
//   return result$;
// }

// function getItems(service: Observable<boolean>) {
//   service.subscribe({
//     next: v => console.log('next:', v),
//     error: e => console.log('error:', e),
//     complete: () => console.log('complete')
//   });

// }

// let service = loadObservable();
// getItems(service);

