import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeoneComponent} from "./Pages/Home/HomeOne/HomeOne.component";
import {FooterOneComponent} from "./Layouts/Footer/FooterOne/FooterOne.component";
import {MainComponent} from "./Main/Main.component";
import {MenuComponent} from "./Layouts/Menu/Menu/Menu.component";
import {SideBarMenuComponent} from "./Layouts/Menu/SidebarMenu/SidebarMenu.component";
import {FixedHeaderComponent} from "./Layouts/Header/FixedHeader/FixedHeader.component";
import {HeaderOneComponent} from "./Layouts/Header/HeaderOne/HeaderOne.component";
import {GlobalModule} from "./Global/Global.module";
import {ToastaModule} from "ngx-toasta";
import {MenuItems} from "./Core/menu/menu-items/menu-items";
import {EmbryoService} from "./Services/Embryo.service";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from "../environments/environment";
import {MatButtonModule} from "@angular/material/button";
import {NotFoundComponent} from "./Pages/NotFound/NotFound.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeoneComponent,
    HeaderOneComponent,
    FooterOneComponent,
    MenuComponent,
    SideBarMenuComponent,
    // CartComponent,
    NotFoundComponent,
    // PaymentDetailSideBarComponent,
    // HomeTwoComponent,
    // HeaderTwoComponent,
    // FooterTwoComponent,
    // HomeThreeComponent,
    // HeaderThreeComponent,
    FixedHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    MatGridListModule,
    LoadingBarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    GlobalModule,
    ToastaModule,
    AngularFireModule.initializeApp(environment.firebase, 'embryo'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatButtonModule,
  ],
  providers: [
    MenuItems,
    EmbryoService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
