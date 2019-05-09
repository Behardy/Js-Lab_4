"use strict"
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
        // this.contacts = [...this.contacts, { ...info }];
    }
    deleteAt(index) {
        this.contacts = [...this.contacts.splice(0, index), ...this.contacts.slice(index + 1)];

    }
    display() {
        document.querySelector(".card_container").innerHTML = "";
        let number = 0;
        for (let contact of this.contacts) {
            const newPerson = document.createElement("div");
            newPerson.setAttribute("index", number);
            newPerson.classList.add("contact_card");
            newPerson.innerHTML = `
<p>Name:${contact.Name} </p>
<p>Email:${contact.Email}  </p>
<p>Phone:${contact.Phone}  </p>
<p>Relation:${contact.Relation}  </p>
<img class = "delete_card" src ="/Users/brittanyhardy/Documents/Works/Labs/js_lab4/baseline_delete_black_18dp copy.png">
`;
            //add img of trash can//
            document.querySelector(".card_container").append(newPerson);
            number++;

        }

    }
}
document.querySelector("form").addEventListener("submit", addContact);

function addContact(event) {
    event.preventDefault();
    let inputInfo = document.querySelectorAll("input");
    const info = {
        Name: inputInfo[0].value,
        Email: inputInfo[1].value,
        Phone: inputInfo[2].value,
        Relation: inputInfo[3].value
    };
    book.add(info);
    for (let input of inputInfo) {
        input.value = " ";
    }
    book.display();
    console.dir(book);
}

document.querySelector("main").addEventListener("click", deleteCard);

function deleteCard(event) {
    if (event.target.tagName === "IMG") {

        const index = event.target.parentNode.getAttribute("index");
        book.deleteAt(index);
        book.display();


    }
 }

const book = new AddressBook;