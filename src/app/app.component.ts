import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary"> <span>Angular Forecast</span> </mat-toolbar>
    <br />
  
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <mat-card fxFlex="300px">
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Текущая погода</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      </mat-card>
      <div fxFlex></div>
    </div>
  `,
})
export class AppComponent {}
