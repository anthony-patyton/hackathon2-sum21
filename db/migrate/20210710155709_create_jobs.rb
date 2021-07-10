class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.string :title_desc
      t.string :link_url
      t.date :end_date

      t.timestamps
    end
  end
end
