# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.create(name:'my homepage', description: 'portfolio page', technologies: 'react', url: 'http://jonathan-ortiz.com', img_url: 'http://the1perspective.com/jonatron/large.png')

Project.create(name:'at some point', description: 'todo app with google api', technologies: 'rails', url: 'http://at-some-point.herokuapp.com', img_url: 'http://the1perspective.com/jonatron/atsomepointlogo.png')


Project.create(name:'down2golf', description: 'social golfing app', technologies: 'Ruby on Rails, PostgreSQL, AngularJS, Foundation CSS', url: 'http://downtogolf.com', img_url: 'http://the1perspective.com/jonatron/DOWN2GOLF.png')


Project.create(name:'surf tube v2', description: 'youtube api', technologies: 'react', url: 'http://surftubev2.herokuapp.com', img_url: 'http://the1perspective.com/jonatron/surf.jpg')
