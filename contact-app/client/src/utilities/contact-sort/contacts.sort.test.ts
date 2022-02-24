import { ContactSort } from "./contacts.sort";
import {ContactInterface} from "../interface"

let testArr : ContactInterface[] = [

{address: "Ap #852-7611 Auctor St.",
contact: "1-312-726-0835",
email: "augue.eu@google.ca",
id: 1,
name: "Irma Coffey",
score: 1000001,
userId: 84},

{address: "Ap #473-9408 Vitae, Road",
contact: "1-655-525-8747",
email: "non.bibendum@yahoo.com",
id: 3,
name: "Riley Figueroa",
score: 1000000,
userId: 84},

{address: "1223 Ante Ave",
contact: "1-273-711-5521",
email: "ac@protonmail.org",
id: 2,
name: "Dana Mercado",
score: 1000000,
userId: 84}
]

let resultArr : ContactInterface[] = [
    {address: "1223 Ante Ave",
    contact: "1-273-711-5521",
    email: "ac@protonmail.org",
    id: 2,
    name: "Dana Mercado",
    score: 1000000,
    userId: 84},

    {address: "Ap #852-7611 Auctor St.",
    contact: "1-312-726-0835",
    email: "augue.eu@google.ca",
    id: 1,
    name: "Irma Coffey",
    score: 1000001,
    userId: 84},

    {address: "Ap #473-9408 Vitae, Road",
    contact: "1-655-525-8747",
    email: "non.bibendum@yahoo.com",
    id: 3,
    name: "Riley Figueroa",
    score: 1000000,
    userId: 84}

]
test("testing Sort function", ()=>{
    console.log(ContactSort("", testArr));
    expect(
        ContactSort("", testArr)
    ).toStrictEqual(resultArr);
})