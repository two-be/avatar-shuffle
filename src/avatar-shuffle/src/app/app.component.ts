import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  allImages: string[] = [
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    "https://cdn-icons-png.flaticon.com/512/924/924874.png",
    "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
    "https://cdn-icons-png.flaticon.com/512/145/145867.png",
  ]
  images: string[] = []

  doSomething() {
    this.images = []
    setTimeout(() => {
      this.images = this.allImages.sort(() => 0.5 - Math.random())
    }, 500)
  }
}
