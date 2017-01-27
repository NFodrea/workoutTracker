import {Component} from '@angular/core';
import {NavController, NavParams, ActionSheetController, Platform} from 'ionic-angular';
import {WorkoutDetailsPage} from  '../workout-details/workout-details'
import {AddWorkoutPage} from  '../add-workout/add-workout'
import {WorkoutService} from '../../providers/workout-service'


@Component({
    selector: 'page-workouts',
    templateUrl: 'workouts.html'
})
export class WorkoutsPage {
    workouts: any;



    constructor(public navCtrl: NavController, public workoutService: WorkoutService,
                public actionCtrl: ActionSheetController, public platform: Platform) {

        this.workouts = this.workoutService.getWorkouts();

    }

    createWorkout(): void {
        this.navCtrl.push(AddWorkoutPage);
    }

    workoutDetails(workoutId) {
        let action = this.actionCtrl.create({
            title: 'Modify your workout',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        this.workoutService.removeWorkout(workoutId);
                    }
                },
                {
                    text: 'More details',
                    icon: !this.platform.is('ios') ? 'play' : null,
                    handler: () => {
                        this.navCtrl.push(WorkoutDetailsPage, {
                            workoutId: workoutId
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        action.present();
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad WorkoutsPage');
    }

}
