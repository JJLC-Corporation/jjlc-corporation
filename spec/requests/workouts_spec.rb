require 'rails_helper'

RSpec.describe "Workouts", type: :request do
  let(:user) do
    User.create email: 'test@example.com', password: 'password', password_confirmation: 'password'
  end

describe "POST / create" do
      it "creates a workout" do
      workout_params = {
        workout: {
          name: "Bench press",
          set_reps: "5x5",
          weight: 150,
          user_id: user.id,
        }
      }
      post '/workouts', params: workout_params

      workout = Workout.first

      json = JSON.parse(response.body).deep_symbolize_keys
      expect(response).to have_http_status(200)
      expect(Workout.count).to eq(1)
      expect(json[:name]).to eq("Bench press")
      expect(json[:set_reps]).to eq("5x5")
    end
  end
end