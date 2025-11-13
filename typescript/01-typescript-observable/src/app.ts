import { Observable } from "rxjs";

function runObservable() {
  console.log('00000000001:runObservable');
  let result = new Observable(subscriber => {
    subscriber.next(true);
    subscriber.next(false);
    console.log('00000000002:runObservable');
    subscriber.complete();
  })
  return result;
}

runObservable().subscribe(
  {
    next: value => console.log('reçu:', value),
    complete: () => console.log('fini')
  }
);
