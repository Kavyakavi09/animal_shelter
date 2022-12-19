const IndexedDb = () => {
  const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

  if (!indexedDB) {
    console.log('IndexedDB could not be found in this browser.');
    return;
  }

  const request = indexedDB.open('petsDb', 1);

  request.onerror = (event) => {
    console.error('An error occurred with IndexedDB');
    console.error(event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    if (!db.objectStoreNames.contains('adopt')) {
      db.createObjectStore('adopt', {
        keyPath: 'id',
        autoIncrement: true,
      });
    }

    if (!db.objectStoreNames.contains('giveaway')) {
      db.createObjectStore('giveaway', {
        keyPath: 'id',
        autoIncrement: true,
      });
    }
  };

  request.onsuccess = function () {
    console.log('Database opened successfully');
  };
};

export const handleAdopt = (formDetails) => {
  const request = indexedDB.open('petsDb', 1);
  request.onsuccess = () => {
    const db = request.result;

    const transaction = db.transaction('adopt', 'readwrite');
    // To add
    const store = transaction.objectStore('adopt');
    store.put(formDetails);

    getAllAdopt();

    transaction.oncomplete = function () {
      db.close();
    };
  };
};

export const handleAway = (formDetails) => {
  const request = indexedDB.open('petsDb', 1);
  request.onsuccess = function () {
    const db = request.result;

    const transaction = db.transaction('giveaway', 'readwrite');
    // To add
    const store = transaction.objectStore('giveaway');
    store.put(formDetails);

    getAllAway();

    transaction.oncomplete = function () {
      db.close();
    };
  };
};

export const getAllAdopt = () => {
  const dbPromise = indexedDB.open('petsDb', 1);
  dbPromise.onsuccess = () => {
    const db = dbPromise.result;

    var tx = db.transaction('adopt', 'readonly');
    var userData = tx.objectStore('adopt');
    const users = userData.getAll();

    users.onsuccess = (query) => {
      console.log(query.srcElement.result);
    };

    tx.oncomplete = function () {
      db.close();
    };
  };
};

export const getAllAway = () => {
  const dbPromise = indexedDB.open('petsDb', 1);
  dbPromise.onsuccess = () => {
    const db = dbPromise.result;

    var tx = db.transaction('giveaway', 'readonly');
    var userData = tx.objectStore('giveaway');
    const users = userData.getAll();

    users.onsuccess = (query) => {
      console.log(query.srcElement.result);
    };

    tx.oncomplete = function () {
      db.close();
    };
  };
};

export default IndexedDb;
