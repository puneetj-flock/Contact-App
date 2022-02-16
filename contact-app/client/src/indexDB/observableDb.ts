
import {  Subject } from "rxjs";
import { db } from "./db";


export const subscriber = new Subject();  
  db.on("changes", function (changes:any) {
    changes.forEach(function (change:any) {
      
      // eslint-disable-next-line default-case
      switch (change.type) {
        case 1: // CREATED
          console.log("An object was created: " + JSON.stringify(change.obj));
          
          subscriber.next({change : 1, contact: change.obj});
          
          break;
        case 2: // UPDATE
          console.log(
            "An object with key ",
              change.obj,
              " was updated with modifications: " +
              JSON.stringify(change.mods)
          );
          subscriber.next({change : 2, contact: change.obj});
          
          break;
        case 3: // DELETED
          console.log(
            "An object was deleted: " + JSON.stringify(change.oldObj)
          );
          subscriber.next({change : 3, contact: change.oldObj});
          
          break;
      }
    });
  });
