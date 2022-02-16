import Dexie, { Table } from 'dexie';
import "dexie-observable";

export interface Contact {
  id: number;
  name: string;
  contact: string;
  address: string;
  userId:number;
  score:number;
  email: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  contacts!: Table<Contact>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      contacts: 'id' // Primary key and indexed props
    });
    // this.version(2).stores({});
  }
}
const db = new MySubClassedDexie();
export {db};
