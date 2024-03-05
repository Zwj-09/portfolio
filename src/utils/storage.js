const storageEnum = {
  localStorage,
  sessionStorage
};

export const getStorage = (key, storage = "localStorage") => {
  const value = JSON.parse(checkStorageType(storage).getItem(key));
  if (value) {
    return value;
  }
};
export const setStorage = (key, value, storage = "localStorage") => {
  checkStorageType(storage).setItem(key, JSON.stringify(value));
};
export const removeStorage = (key, storage = "localStorage") => {
  checkStorageType(storage).removeItem(key);
};
export const clearStorage = (storage = "localStorage") => {
  checkStorageType(storage).clear();
};

function checkStorageType(storage) {
  return storage && storageEnum[storage];
}
