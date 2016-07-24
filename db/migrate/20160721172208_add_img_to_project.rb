class AddImgToProject < ActiveRecord::Migration
  def change
    add_column :projects, :img_url, :string
  end
end
