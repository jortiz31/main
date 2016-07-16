class CreateProjectSearchTerms < ActiveRecord::Migration
  def change
    create_table :project_search_terms do |t|

      t.timestamps null: false
    end
  end
end
