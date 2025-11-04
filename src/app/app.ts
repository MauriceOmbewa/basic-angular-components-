import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  // styleUrl: './app.css'
})
export class Nav {
  protected readonly title = signal('project2');
}


@Component({
  selector: 'body',
  templateUrl: './body.html',
  styleUrl: './app.css'
})
export class Body {
  protected readonly title = signal('project2');
}


@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrl: './app.footer.css'
})
export class Footer {
  protected readonly title = signal('project2');
}


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Nav, Body, Footer],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project2');
}
