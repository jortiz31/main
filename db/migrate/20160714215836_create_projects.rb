class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name,         null: false
      t.string :description,  null: false
      t.string :technologies, null: false
      t.string :url,          null: false
      t.timestamps            null: false
    end

    add_index :projects,  :name,   unique: true
    add_index :projects,  :url,    unique: true
  end
end
