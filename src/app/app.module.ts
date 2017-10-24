import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { FragmentComponent } from './fragment.component';
import { MemoryComponent } from './memories.component';
import { MenuComponent } from './menu.component';
import { PeopleComponent } from './people.component';
import { AdminComponent } from './admin.component';
import { TeleComponent } from './tele.component';

import { ReplacePipe } from './replace.pipe';

import { SearchService } from './search.service';
import { FragmentService } from './fragment.service';
import { UserService } from './users.service';
import { MemoryService } from './memory.service';


@NgModule({
  declarations: [
    AppComponent,
    MemoryComponent,
    SearchComponent,
    FragmentComponent,
    MenuComponent,
    PeopleComponent,
    AdminComponent,
    TeleComponent,
    ReplacePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      component: MemoryComponent
    }, {
      path: 'memory',
      component: MemoryComponent
    }, {
      path: 'search',
      component: SearchComponent
    }, {
      path: 'fragment/:id',
      component: FragmentComponent
    }, {
      path: 'people',
      component: PeopleComponent
    }, {
      path: 'admin',
      component: AdminComponent
    }, {
      path: 'tele',
      component: TeleComponent
    }], {useHash: true}),
  ],
  providers: [
    SearchService,
    FragmentService,
    UserService,
    MemoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
