export default class StatusService {
    status: string = 'Sleeping';
    statedAt: Date = new Date();
    store: any = {}

    setStatus(name: string) {
        this.status = name;
        this.statedAt = new Date();
        return `Status Set to ${name}!`;
    }

    getStatus() {
        return `Status is ${this.status} from ${this.statedAt}!`;
    }

    storeData(key: string, value: any) {
        this.store[key] = value;
        return `Data Stored`;
    }

    getData(key: string) {
        return this.store[key] || null;
    }

    deleteData(key: string) {
        delete this.store[key];
        return `Data Deleted`;
    }

    getStore() {
        return this.store;
    }

    clearStore() {
        this.store = {};
        return `Store Cleared`;
    }

    getStoreKeys() {
        return Object.keys(this.store);
    }

    getStoreValues() {
        return Object.values(this.store);
    }

    getStoreEntries() {
        return Object.entries(this.store);
    }

    getStoreSize() {
        return Object.keys(this.store).length;
    }

    getStoreHas(key: string) {
        return this.store.hasOwnProperty(key);
    }

    getStoreIncludes(value: any) {
        return Object.values(this.store).includes(value);
    }

    getStoreIndexOf(value: any) {
        return Object.values(this.store).indexOf(value);
    }

    getCurrentStatus() {
        return {status: this.status, statedAt: this.statedAt};
    }
}

export type MyStatus = typeof StatusService.prototype;