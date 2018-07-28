import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  message: any;
  getMessage = this.http
    .get("http://localhost:4201")
    .subscribe(message => (this.message = message));
  users: any[];
  getUsers = this.http
    .get<any[]>("http://localhost:4201/users")
    .subscribe(users => (this.users = users));

  constructor(private http: HttpClient) {}

  post() {
    this.http
      .post<any>("http://localhost:4201/users", {
        username: "Thibaud",
        password: "mypass"
      })
      .subscribe(next => {
        this.users.push(next.body);
      });
  }
}
