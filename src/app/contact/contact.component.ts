import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) {
    // this.http.get(this.jimmy).toPromise().then(data => {
    //   console.log(data)
    // })
  }
  url = 'https://postman-echo.com/get?foo1=bar1&foo2=bar2';
  postData = { test: 'my content' }
  public name = "";
  public phone = "";
  public email = "";
  public message = "";
  public title = "";
  public author = "";

  public posty = 'https://jzmjq2p2qe.execute-api.us-east-2.amazonaws.com/dev/?name="' + this.name + '" &email="' + this.email + '"&phonenumber="' + this.phone + '" &message="' + this.message + '"&author="' + this.author + '"&title="' + this.title + '"';
  public posty2 = 'https://jzmjq2p2qe.execute-api.us-east-2.amazonaws.com/dev/?name="name123" &email="eemail"&phonenumber="phone" &message="message"&author="author"&title="title"'

  public temp: any;
  post() {
    if (this.name == "") {
      alert("Please enter a name before you contact me")
    } else {
      console.log(this.name)
      console.log(this.posty)
      this.http.get('https://jzmjq2p2qe.execute-api.us-east-2.amazonaws.com/dev/?name="' + this.name + '" &email="' + this.email + '"&phonenumber="' + this.phone + '" &message="' + this.message + '"&author="' + this.author + '"&title="' + this.title + '"').toPromise().then(data => {
        console.log(data)
      })
      this.name = "";
      this.phone = "";
      this.email = "";
      this.message = "";
      this.title = "";
      this.author = "";
     alert("Thanks for contacting me! Ill receive your message very soon!")
    }
  }


  ngOnInit() {
  }
}
