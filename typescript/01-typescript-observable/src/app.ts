
import { Observable } from 'rxjs';

const source$ = new Observable<boolean>(subscriber => {
  let i = 0;
  setTimeout(() => {
    subscriber.next(true)
    setTimeout(() => {
      subscriber.next(false)
      setTimeout(() => {
        subscriber.error(false)
        setTimeout(() => {
          subscriber.complete()
        }, 2000)
      }, 2000)
    }, 2000)
  }, 2000)
});

function getItems() {
  source$.subscribe({
    next: v => console.log('next:', v),
    error: e => console.log('error:', e),
    complete: () => console.log('complete')
  });

}

getItems();

