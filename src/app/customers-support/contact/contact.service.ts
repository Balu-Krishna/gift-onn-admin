import { Injectable } from "@angular/core";
import { IContact } from "./contact";
@Injectable({
  providedIn: "root",
})
export class ContactService {
  getContacts(): IContact[] {
    return [
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        name: "Suman",
        messages: ["First Message", "Previous Message"],
        time: "10:20 PM",
        status: "online",
      },
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        name: "Balakrishna",
        messages: ["First Message", "Previous Message"],
        time: "10:20 PM",
        status: "online",
      },
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        name: "KOteswararao",
        messages: ["First Message", "Previous Message"],
        time: "10:20 PM",
        status: "online",
      },
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        name: "Krishna",
        messages: ["First Message", "Previous Message"],
        time: "10:20 PM",
        status: "online",
      },
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        name: "Jaswanth ",
        messages: ["First Message", "Previous Message"],
        time: "10:20 PM",
        status: "online",
      },
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        name: "John Doe",
        messages: ["First Message", "Previous Message"],
        time: "10:20 PM",
        status: "online",
      },
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        name: "Mark Doe",
        messages: ["First Message", "Previous Message"],
        time: "10:10 PM",
        status: "offline",
      },
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
        name: "Jean Doe",
        messages: ["First Message", "Previous Message"],
        time: "10:00 PM",
        status: "online",
      },
    ];
  }
}
