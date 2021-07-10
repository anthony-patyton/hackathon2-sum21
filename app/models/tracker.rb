class Tracker < ApplicationRecord
  belongs_to :job

  validates :steps_taken, :applied_status, :interview_date, presence: true
  validates :steps_taken, uniqueness: true
end
