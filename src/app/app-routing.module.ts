import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { CanActivateRouteGuard } from './auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'music-player', component: MusicPlayerComponent, canActivate: [CanActivateRouteGuard]},
  { path: 'playlists', component: PlaylistComponent, canActivate: [CanActivateRouteGuard]},
  { path: 'search', component: SearchComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
