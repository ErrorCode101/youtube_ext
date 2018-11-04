import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChannelComponent} from './channel/channel.component';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule,
    MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {PlayerComponent} from './player/player.component';
import {RouterModule, Routes} from '@angular/router';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import { AuthenticationComponent } from './authentication/authentication.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    {path: '', redirectTo: "/login", pathMatch: 'full'},
    {path: 'player', component: PlayerComponent},
    {path: 'channel', component : ChannelComponent, pathMatch: 'full'},
    {path: 'login', component: AuthenticationComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ChannelComponent,
        PlayerComponent,
        AuthenticationComponent
    ],
    imports: [
        HttpClientModule,
        YoutubePlayerModule,
        RouterModule.forRoot(appRoutes, {useHash:false}),
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
