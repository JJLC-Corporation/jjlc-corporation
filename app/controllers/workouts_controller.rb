class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all
        render json: workouts
    end

    def create
        user = User.find(workout_params[:user_id])
        workout = user.workouts.create(workout_params)
        if workout.valid?
            render json: workout
        else 
            render json: workout.errors, status: 422
        end

    end

    def update
        workout = Workout.find(params[:id])
        workout.update(workout_params)
        if workout.valid?
            render json: workout
        else
            render json: workout.errors, status: 422
        end
    end

    def destroy
        workout = Workout.find(params[:id])
        
        if workout.destroy
            render json: workout, status: 204
        else
            render json: workout.errors, status: 422
        end
    end

    private

    def workout_params
        params.require(:workout).permit(:name, :set_reps, :weight, :user_id)
    end
end
