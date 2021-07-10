class Reflection < ApplicationRecord
  belongs_to :tracker

  validates :summary, :did_right, :do_better, presence: true
  validates :summary, :did_right, :do_better uniqueness: true
end
