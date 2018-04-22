import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../../environments/environment';
import { throwIfAlreadyLoaded } from './core-utils';
import { FirestoreDbService } from './services/firestore-db.service';
import { reducers, metaReducers } from './store/index';
import { RouterEffects } from './store/router/router-effects';
import { AppRouterStateSerializer } from './store/router/router-state-serializer';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // @ngrx store
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    /* istanbul ignore next */
    environment.production ? [] : StoreDevtoolsModule.instrument({ name: 'what-conference-next.com' }),
    EffectsModule.forRoot([AuthService, RouterEffects]),

    // Firebase setup
    AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId),
    AngularFireAuthModule,
    AngularFirestoreModule,

    // SW
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: AppRouterStateSerializer }, AuthService, FirestoreDbService],
})
export class CoreModule {
  public constructor(
    @Optional() fbApp?: FirebaseApp,
    @Optional()
    @SkipSelf()
    parentModule?: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');

    // Configure FirebaseApp directly
    if (fbApp) {
      fbApp.firestore().settings({ timestampsInSnapshots: true });
    }
  }
}
