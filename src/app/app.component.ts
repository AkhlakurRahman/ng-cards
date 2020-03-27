import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts = [
    {
      title: "Tree in Nature",
      imageUrl: "assets/tree.jpeg",
      username: "@nature",
      content: "Tree in Nature. What a beautiful sight!"
    },
    {
      title: "Snowy Mountain",
      imageUrl: "assets/mountain.jpeg",
      username: "@mountain",
      content: "Snowy mountain in winter. What a beautiful sight!"
    },
    {
      title: "Mountain Biking",
      imageUrl: "assets/biking.jpeg",
      username: "@biking",
      content: "Mountain Biking. What a brave person"
    }
  ];
}
