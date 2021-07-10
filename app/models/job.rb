class Job < ApplicationRecord
  belongs_to :user

  validates :title, :company, :title_desc, :link_url, :end_date, presence: true
  validates :title, :descript, uniqueness: true
end
