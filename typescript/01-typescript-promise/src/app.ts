function getItemsPromise2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('00000000001:getItemsPromise2Seconds:')
      resolve(true);
    }, 2000);
  })
}

function getItemsPromise4Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('00000000001:getItemsPromise4Seconds:')
      resolve(true);
    }, 4000);
  })
}


// async function getItems(error: boolean) {
//   console.log('00000000001:getItems')
//   let result = new Promise((resolve, reject) => {
//     console.log('00000000002:getItems')
//     setTimeout(() => {
//       console.log('00000000003:getItems')
//       if (error) {
//         reject(false);
//       } else {
//         resolve(true);
//       }
//     }, 2000)
//   })
//   console.log('00000000004:getItems')
//   return result;
// }



console.log('00000000001:app:')
// getItems(true)
//   .then((value) => { console.log('00000000001:app:then:' + value) })
//   .catch((error) => { console.log('00000000002:app:error:' + error) })
//   .finally(() => { console.log('00000000003:app:finally:') })


// getItems(false)
//   .then((value) => { console.log('00000000004:app:then:' + value) })
//   .catch((error) => { console.log('00000000005:app:error:' + error) })
//   .finally(() => { console.log('00000000006:app:finally:') })

async function getItemsAwait() {
  getItemsPromise4Seconds();
  getItemsPromise2Seconds();

  await getItemsPromise4Seconds();
  await getItemsPromise2Seconds();
  // try {
  //   console.log('00000000001:getItemsAwait:');
  //   let result = await getItems(false);
  //   console.log('00000000002:getItemsAwait:');
  // }
  // catch (error)  {
  //   console.log('00000000003:getItemsAwait:' + error);
  // }
  // finally {
  //   console.log('00000000004:getItemsAwait:');
  // }
}

getItemsAwait();