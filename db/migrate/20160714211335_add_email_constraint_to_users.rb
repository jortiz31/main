class AddEmailConstraintToUsers < ActiveRecord::Migration
  def up
    execute %{
      ALTER TABLE
        users
      ADD CONSTRAINT
        email_must_be_jonathans_email
      CHECK ( email ~* '^[^@]+@yandex\\.com')
    }
  end
  def down
    execute %{
      ALTER TABLE
        users
      DROP CONSTRAINT
        email_must_be_jonathans_email
    }
  end
end
