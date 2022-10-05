class Workout < ApplicationRecord
    belongs_to :user

    validates :name, :set_reps, :weight, :user_id, presence: true
end
