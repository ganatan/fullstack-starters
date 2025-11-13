function add() {
  console.log('00000000001:add');
  let result = 'ADD';
  return result;
}

function del() {
  console.log('00000000001:del');
  let result = 'DEL';
  return result;
}

function getShows(toto: string, momo: () => any) {
  console.log('00000000001:getShows');
  console.log('00000000001:getShows:' + toto);
  momo();
}

getShows('Aliens',add)
getShows('Exodus',del)
