import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {WorkoutService} from '../../providers/workout-service';
import {WorkoutsPage} from '../workouts/workouts';


@Component({
    selector: 'page-add-workout',
    templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

    public newWorkoutForm;
    nameChanged: boolean = false;
    weightChanged: boolean = false;
    setsChanged: boolean = false;
    repsChanged: boolean = false;
    dateCompleteChanged: boolean = false;
    submitAttempt: boolean = false;

    constructor(public navCtrl: NavController, public workoutService: WorkoutService,
                public formBuilder: FormBuilder) {
        this.newWorkoutForm = formBuilder.group({
            name: ['', Validators.required],
            weight: ['', Validators.required],
            sets: ['', Validators.required],
            reps: ['', Validators.required],
            dateComplete: ['', Validators.required],
        });
    }

    elementChanged(input) {
        let field = input.inputControl.name;
        this[field + "Changed"] = true;
    }

    createWorkout() {
        this.submitAttempt = true;
        if (!this.newWorkoutForm.valid) {
            console.log(this.newWorkoutForm.value);
        } else {
            this.workoutService.createWorkout(this.newWorkoutForm.value.name,
                this.newWorkoutForm.value.weight, this.newWorkoutForm.value.sets, this.newWorkoutForm.value.reps, this.newWorkoutForm.value.dateComplete)
                .then(() => {
                    this.navCtrl.pop();
                }, error => {
                    console.log(error.message);
                });
        }
    }
}