import Dexie, { Table } from 'dexie';
import "dexie-observable";
// import { ContactInterface } from '../../src/utilities/interface';

export interface ContactInterface {
  id: number,
  userId:number,
  name: string,
  contact: string,
  email: string,
  address: string,
  score: number
}

export class MySubClassedDexie extends Dexie {
  // 'contacts' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  contacts!: Table<ContactInterface>; 

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
