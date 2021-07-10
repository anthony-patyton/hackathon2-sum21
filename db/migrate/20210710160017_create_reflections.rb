class CreateReflections < ActiveRecord::Migration[6.1]
  def change
    create_table :reflections do |t|
      t.text :summary
      t.text :did_right
      t.text :do_better
      t.belongs_to :tracker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
