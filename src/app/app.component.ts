import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serverless-pebble-it';
  content;

  constructor() {

    this.content = {
      title: 'FedUNI',
      blogList : [
        {
          title: 'Article 01',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Varius duis at consectetur lorem donec massa sapien. Quisque id diam vel quam elementum. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Et molestie ac feugiat sed lectus. Vivamus at augue eget arcu dictum varius duis. Venenatis a condimentum vitae sapien pellentesque habitant. At tellus at urna condimentum mattis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Magna etiam tempor orci eu.',
          author: 'Ken Nguyen',
          date: '01/01/2020'
        },

        {
          title: 'Article 02',
          description : 'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam pellentesque nec nam aliquam sem et tortor. Nisl pretium fusce id velit ut tortor pretium viverra. Lobortis feugiat vivamus at augue eget arcu. Rhoncus urna neque viverra justo nec ultrices dui. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Cursus euismod quis viverra nibh cras pulvinar mattis. Eget dolor morbi non arcu risus quis varius. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Et ligula ullamcorper malesuada proin. Id cursus metus aliquam eleifend mi in. Neque laoreet suspendisse interdum consectetur libero id faucibus. Egestas sed tempus urna et. Dignissim suspendisse in est ante. Velit euismod in pellentesque massa placerat duis.',
          author: 'Robert Neville',
          date: '01/02/2020'
        },

        {
          title: 'Article 03',
          description : 'Vel orci porta non pulvinar neque laoreet suspendisse interdum. Dictum fusce ut placerat orci nulla. Ultricies integer quis auctor elit sed vulputate mi sit. Convallis convallis tellus id interdum velit laoreet id. Iaculis at erat pellentesque adipiscing commodo elit at. Ultrices neque ornare aenean euismod elementum nisi. Mauris nunc congue nisi vitae suscipit tellus mauris a. Maecenas ultricies mi eget mauris pharetra et. Ipsum a arcu cursus vitae congue. Scelerisque viverra mauris in aliquam sem fringilla ut. Elit eget gravida cum sociis. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus. Amet dictum sit amet justo donec enim diam vulputate ut. Tellus pellentesque eu tincidunt tortor aliquam nulla. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Habitant morbi tristique senectus et netus et malesuada.',
          author: 'Rocky Chow',
          date: '01/04/2020'
        }
      ]
    };

  }
}
