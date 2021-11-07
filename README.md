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


Sass stands for Syntactically Awesome Stylesheet
Sass reduces repetition of CSS and therefore saves time. Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

/* define variables for the primary colors */
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;
$primary_3: #878f99;

/* use the variables */
.main-header {
  background-color: $primary_1;
}

.menu-left {
  background-color: $primary_2;
}


$imgpath: "app/assets/images/header.jpg";

header {
	background: $imgpath no-repeat left bottom;
}

.menu-right {
  background-color: $primary_3;
}

<div style={{ backgroundImage: "url(/img/header.jpg)", backgroundRepeat: 'no-repeat',
  width:'100%'}}>

  header from https://www.fancytextguru.com/cute.html
  footer ·.★·.·´¯`·.·★ 🅲🅰🆂🅷 🅽 🅲🅾🅼🅵🅾🆁🆃 ★·.·´¯`·.·★.·

  If receive an error message about commits conflicting with github and terminal
  To https://github.com/learn-academy-2021-delta/apartment-app-SunkissedQueen.git
 ! [rejected]        login -> login (fetch first)
error: failed to push some refs to 'https://github.com/learn-academy-2021-delta/apartment-app-SunkissedQueen.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

$ git pull origin login
$ git add .
$ git commit -m "delete DS-Stores"
$ git push origin login

update gitignore to ensure no more issues with DS_stores
If .DS_Store was never added to your git repository, simply add it to your .gitignore file.

If you don't have one, create a file called
.gitignore
In your the root directory of your app and simply write

**/.DS_Store
