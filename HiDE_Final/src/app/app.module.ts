import { CommonService } from './common.service';
import { DashboardService } from './dashboard/dashboard.service';
import { NotifyService } from './notify.service';
import { AuthService } from './authentication/auth.service';
import { EditorService } from './editor/editor.service';
import { LoadingService } from './loading.service';
import { ProfileService } from './profile/profile.service';
import { NewprojectService } from './newproject/newproject.service';
import { NotificationService } from './header/notification.service';
import { PeerService } from './peer.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { CodemirrorModule } from '@ctrl/ngx-codemirror';
// import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { IntroComponent } from './home/intro/intro.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { NotifyComponent } from './notify/notify.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './authentication/authguard.service';

import * as firebase from 'firebase';
import { ProjectlistComponent } from './dashboard/projectlist/projectlist.component';
import { ProjectitemComponent } from './dashboard/projectlist/projectitem/projectitem.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { AnnouncementsComponent } from './dashboard/announcements/announcements.component';
import { AnnounceItemComponent } from './dashboard/announcements/announceitem/announceitem.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjectComponent } from './project/project.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { EditorComponent } from './editor/editor.component';
import { ExplorerComponent } from './editor/explorer/explorer.component';
import { ToolbarComponent } from './editor/toolbar/toolbar.component';
import { TabsComponent } from './editor/tabs/tabs.component';
import { TexteditorComponent } from './editor/tabs/texteditor/texteditor.component';
import { NodeeditorComponent } from './editor/tabs/nodeeditor/nodeeditor.component';
import { ConsoleComponent } from './editor/console/console.component';
import { TextcommsComponent } from './editor/textcomms/textcomms.component';
import { SidepanelComponent } from './editor/sidepanel/sidepanel.component';
import { StatusbarComponent } from './editor/statusbar/statusbar.component';
import { TreeViewComponent } from './editor/explorer/tree-view/tree-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    LoadingComponent,
    NotifyComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectlistComponent,
    ProjectitemComponent,
    AnnouncementsComponent,
    StatsComponent,
    NavigationComponent,
    AnnounceItemComponent,
    NewprojectComponent,
    ProjectComponent,
    EditprojectComponent,
    EditorComponent,
    ExplorerComponent,
    ToolbarComponent,
    TabsComponent,
    TexteditorComponent,
    NodeeditorComponent,
    ConsoleComponent,
    TextcommsComponent,
    SidepanelComponent,
    StatusbarComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // CodemirrorModule,
    // AceEditorModule
  ],
  providers: [
    CommonService,
    AuthService,
    LoadingService,
    NotifyService,
    AuthGuard,
    ProfileService,
    DashboardService,
    NewprojectService,
    NotificationService,
    EditorService,
    PeerService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQP5Kougkw0LSqFkLKZ3PCkL8pSp48Abg',
      authDomain: 'hide-9d4ce.firebaseapp.com',
      databaseURL: 'https://hide-9d4ce.firebaseio.com',
      projectId: 'hide-9d4ce',
      storageBucket: 'hide-9d4ce.appspot.com'
    });
  }
}
