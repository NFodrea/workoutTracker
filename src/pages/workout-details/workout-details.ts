import {Component} from '@angular/core';
import {NavController, NavParams, ActionSheetController, Platform, AlertController} from 'ionic-angular';
import {WorkoutService} from '../../providers/workout-service';

@Component({
    selector: 'page-workout-details',
    templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
    public workout: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public platform: Platform, public actionCtrl: ActionSheetController,
                public workoutService: WorkoutService, public alertCtrl: AlertController) {

        this.workoutService.getWorkout(this.navParams.get("workoutId"))
            .subscribe(workoutSnap => {
                this.workout = workoutSnap
            });
    }
    showOptions(workoutId): void{
        const action = this.actionCtrl.create({
            title: 'Modify your bill',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        this.workoutService.removeWorkout(workoutId)
                            .then( () => { this.navCtrl.pop(); });
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

}


