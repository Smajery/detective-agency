export const setStorageItem = (key, value, storage) => {
    storage.setItem(key, value);
};

export const removeStorageItem = (key, storage) => {
    if (storage.getItem(key)) {
        storage.removeItem(key);
    }
};