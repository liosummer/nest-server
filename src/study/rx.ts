import { Observable, of, interval, take } from 'rxjs';
import { map, filter, findIndex, reduce } from 'rxjs/operators';
// const ob = new Observable((subscribe) => {
//   subscribe.next(1);
// });

// ob.subscribe({
//   next(a) {
//     console.log(a);
//   },
// });

// interval(500)
//   .pipe(take(5))
//   .subscribe((e) => {
//     console.log(e);
//   });

const subs = interval(500)
  .pipe(
    map((v) => ({ num: v })),
    filter((v) => v.num % 2 === 0),
  )
  .subscribe((e) => {
    console.log(e);
    if (e.num > 10) {
      subs.unsubscribe();
    }
  });
