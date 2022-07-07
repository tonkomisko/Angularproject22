import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
  <h3> This is the ABOUT page </h3>  
  <p class = "about">
  
  Biscuit toffee sugar plum wafer caramels marzipan biscuit marshmallow. Dessert candy canes muffin gummi bears apple pie chupa chups pudding soufflé. 
  Chocolate bar sweet gummies ice cream ice cream chocolate cake. Bear claw pudding cotton candy dessert marzipan fruitcake dragée cheesecake.
  Caramels candy sweet toffee toffee. Cupcake pastry dragée cookie brownie. Jujubes cheesecake icing I love fruitcake wafer gummi bears. 
  Cupcake liquorice danish jelly beans sesame snaps sugar plum muffin macaroon marzipan.
  Pastry jelly-o jujubes carrot cake sugar plum I love tiramisu candy. 
  Danish chocolate bar chocolate cake I love jelly beans. Carrot cake I love toffee bear claw topping tart dessert candy lollipop.
  </p>
  `,
  styles: [
    `
    h3,.about {
      width: 50%;
      margin: 0 auto;
      padding: 2rem;
    }

    `
  ]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
