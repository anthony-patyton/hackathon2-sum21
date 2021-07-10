class CreateTrackers < ActiveRecord::Migration[6.1]
  def change
    create_table :trackers do |t|
      t.string :steps_taken
      t.boolean :applied_status
      t.date :interview_date
      t.date :follow_up
      t.belongs_to :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
