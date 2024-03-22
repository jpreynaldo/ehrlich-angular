import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./shared/navigation/nav-bar/nav-bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutesModule } from "./app.routes";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutesModule
      ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }