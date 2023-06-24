import { LightningElement } from "lwc";

export default class HelloQuerySelectorDemo extends LightningElement {
  userNames = ["John", "Smith", "Sree", "Chandu"];
  fetchDetails() {
    const ele = this.template.querySelector("h1");
    ele.style.color = "red";
    console.log(ele.innerText);
    const userElements = this.template.querySelectorAll(".username");
    //query selector doenot return Array
    Array.from(userElements).forEach((item) => {
      console.log(item.innerText);
      item.setAttribute("title", item.innerText);
    });
    // lwc:dom="manual"
    const childElem = this.template.querySelector(".child");
    childElem.innerHTML =
      "<p>Im a child class div coming as inner html from JS</p>";
  }
}
