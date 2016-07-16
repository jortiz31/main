# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.create(name:'my homepage', description: 'portfolio page', technologies: 'react', url: 'http://jonathan-ortiz.com')

Project.create(name:'at some point', description: 'todo app with google api', technologies: 'rails', url: 'http://at-some-point.herokuapp.com')


Project.create(name:'down2golf', description: 'social golfing app', technologies: 'rails', url: 'http://downtogolf.com')


Project.create(name:'surf tube v2', description: 'youtube api', technologies: 'react', url: 'http://surftubev2.herokuapp.com')
