import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class WorkoutService {
    workouts: FirebaseListObservable<any>;
    workoutDetail: FirebaseObjectObservable<any>;
    userId: string;

    constructor(public af: AngularFire) {
        af.auth.subscribe( auth => {
            if (auth){
                this.workouts = af.database.list(`/userProfile/${auth.uid}/workouts`);
                this.userId = auth.uid;
            }
        });
    }


    getWorkouts(): FirebaseListObservable<any> {
        return this.workouts;
    }


    getWorkout(workoutId: string): FirebaseObjectObservable<any> {
        return this.workoutDetail = this.af.database
            .object(`/userProfile/${this.userId}/workouts/${workoutId}`);
    }

    createWorkout(name: string, weight: number, sets: number, reps: number, dateComplete: string) {
        return this.workouts.push({name, weight, sets, reps, dateComplete});
    }


    removeWorkout(workoutId: string): any { return this.workouts.remove(workoutId); }




}
