import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>
      comments works!
    </p>
    <img src="https://pbs.twimg.com/media/ErZpX-2XcAQhNaT.jpg">
  `,
  styles: `
    img{
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
