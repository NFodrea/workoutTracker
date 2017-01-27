import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//page imports
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/sign-up/sign-up';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AddWorkoutPage } from '../pages/add-workout/add-workout';
import { WorkoutDetailsPage } from  '../pages/workout-details/workout-details'


//import provider
import { AuthData } from '../providers/auth-data'
import { WorkoutService } from '../providers/workout-service'

//import AF2
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// AF2 Settings

export const firebaseConfig = {
  apiKey: "AIzaSyAFibWvykNa5YhbxIjzv_KSf5UzUgvnjwY",
  authDomain: "workouttracker-43547.firebaseapp.com",
  databaseURL: "https://workouttracker-43547.firebaseio.com",
  storageBucket: "workouttracker-43547.appspot.com",
  messagingSenderId: "304456866072"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    AddWorkoutPage,
    WorkoutDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    AddWorkoutPage,
    WorkoutDetailsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData, WorkoutService
  ]
})
export class AppModule {}

