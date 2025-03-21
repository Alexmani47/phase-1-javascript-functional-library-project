function myEach(collection, callback) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of items) {
      callback(item);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    return items.map(callback);
  }
  
  function myReduce(collection, callback, acc) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    let start = 0;
    if (acc === undefined) {
      acc = items[0];
      start = 1;
    }
    for (let i = start; i < items.length; i++) {
      acc = callback(acc, items[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of items) {
      if (predicate(item)) return item;
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    return items.filter(predicate);
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  

  