#Apartment App
$ rails new apartment_app -d postgresql -T
$  cd apartment_app
$  rails db:create
$  git remote add origin https://github.com/learn-academy-2021-delta/apartment-app-SunkissedQueen.git
$  git checkout -b main
$  git add .
$  git commit -m "initial commit"
$  git push origin main
$  bundle add rspec-rails
$  rails generate rspec:install
$  bundle add devise
$  rails generate devise:install
$  rails generate devise User
$  rails db:migrate
$  code .

Setup- Added Rspec
    - Added Devise

Authenication - user provide credentials to allow you to sign in (username and password)

Authorization - what you have access to with your credentials

Devise gives us the tools to do both.

$ rails s
Commant T to open an additional terminal
$ rails routes

To create a new user...look for a form to allow email/password
in the browser
http://localhost:3000/users/sign_up

sign up on browser

$rails c
>User.all
Navigate to http://localhost:3000/users/sign_in and see a log in page.

Navigate to http://localhost:3000/users/sign_up and see a sign up page

When you log in, a new session is created and you can see the protected pages
Sign out, that session is destroyed

Add to config/env/development.rb
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

config/initializers/devise.rb
# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get

$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
$ rails db:migrate

define relationship in models
Apartments and Users
User has_many :apartments
Apartment belongs_to :user

git push origin main
$ git add .
$  git commit -m "adds apt, devise, and resource"
$  git push origin main
$  git checkout -b react-components

$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home

controller Home creates the landing page

when hits the home page find this controller

When controller Home is empty, the system will do a default search to the view folder--->home--->index.html.erb  which renders a react component

    devise allows a lot from has default routes, paths from its package, place that on this file


Inspect work
localhost:3000

routes constraints

js/components
    makes three files; assets, pages, components

Make space for the stories
break into actionable pieces

App.js
import---Browser Router code

React Strap
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
$yarn add 

$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap