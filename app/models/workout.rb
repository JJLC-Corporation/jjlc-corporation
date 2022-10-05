class Workout < ApplicationRecord
    def index
        workouts = Workout.all
        render json: workouts
    end
end
