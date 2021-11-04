#Apartment App
rails new apartment_app -d postgresql -T
$  cd apartment_app
$  rails db:create
$  git remote add origin https://github.com/learn-academy-2021-delta/apartment-app-SunkissedQueen.git
$  git checkout -b main
$  git add .
 1081  git commit -m "initial commit"
 1082  git push origin main
 1083  bundle add rspec-rails
 1084  rails generate rspec:install
 1085  bundle add devise
 1086  rails generate devise:install
 1087  rails generate devise User
 1088  rails db:migrate
 1089  code .

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

When you log in, a new session is created and you can see the protected pages
Sign out, that session is destroyed

Add to config/env/development.rb
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

config/initializers/devise.rb
# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get

Apartments and Users
User has_many appartments
Apartment belongs_to user

$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
$ rails db:migrate

define relationship in models