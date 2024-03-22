import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./shared/navigation/nav-bar/nav-bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthModule, provideAuth0 } from "@auth0/auth0-angular";
import { AppRoutingModule } from "./app-routing.module";


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
        AppRoutingModule,
        AuthModule.forRoot({
            domain: 'dev-bydc8rmdr55rv736.us.auth0.com',
            clientId: 'yawX3nbrMed7pznOINbcQLnXEdAdMIBl',
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        })
      ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }