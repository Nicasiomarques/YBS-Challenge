export const LocalStorageAdapter = {
  set(key: string, value: object): void {
    value ? localStorage.setItem(key, JSON.stringify(value)) : localStorage.removeItem(key);
  },

  get(key: string): any {
    const cachedData = localStorage.getItem(key)
    if (cachedData) return JSON.parse(cachedData)
    return null
  },
};
