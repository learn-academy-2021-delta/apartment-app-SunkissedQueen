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

Do this step after webpacker
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

???????When passing the login/logout button and signin/out routes establish by devise...I could only get them to work on the App.js page. Will research on the proper way to render on other pages

git clone present repository in github will auto create a folder rails app on local machine. Ensure that a new branch is created. $bundle $yarn

$  yarn add react-router-dom  ///fix the errors I was having with router-dom

more errors occurred and stated that I needed to migrate
$ bin/rails db:migrate RAILS_ENV=development

css for home page would only render on the application.scss

copyright  &copy;

to run test for javascript/react side of app
$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
$ yarn test
Control + C to stop the testing suite.

Decided to use the built-in methods to navigate from create account to sign up and back to home

For protected index----
  Make a page
  place a const {apartments} = this.props
  Grab pagebody div from other index
  import page on App.js
  copy index route and refactor to path--->myaptindex, element--->Protected Index apartments ={apartments}
  This should only occur when logged in...so wrapped that index in curly braces {this.props.logged_in &&  }
  index.html.erb holds the parent info and the route is inheriting the properties
  semantic html gives more description for the container tag..makes it more accessible, more orgranized
  Nav link to make an internal nav...a href for external
  Go to header.js

  Protected Index

Seeds for apartments
  Upate ApartmentController (app/controllers)
      def index
        apartments = Apartment.all
        render json: apartments
      end
  Update seeds (db/seeds.rb)
    apartments = [
      {
        street: '1999 Ave',
        city: 'SD',
        state: 'CA',
        manager: 'Prince',
        email: 'prince@gotit.com',
        price: '1999',
        bedrooms: 9,
        bathrooms: 9,
        pets: 'not on these carpets'
      },
      {
        street: 'ABC Sesame Street',
        city: 'SD',
        state: 'CA',
        manager: 'Oscar',
        email: 'oscar@tinthecan.com',
        price: '1000',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'whatever you wish, as long as whatever does not bother my can'
      },
      {
        street: '456 Elm St',
        city: 'SD',
        state: 'CA',
        manager: 'Freddie',
        email: 'freddie@stayssharp.com',
        price: '4000',
        bedrooms: 5,
        bathrooms: 3,
        pets: 'as long as they sleep at night'
      }
    ]

    first_user = User.first

    apartments.each do |attribute|
      first_user.apartments.create attribute
    end

    on terminal $rails db:seed
    for good measure $rails db:migrate
    rails c (to see User.all which will show the valid email accounts, Apartment.all to see all apartments that were created)

  Add validation to Apartment Class (app/models/apt.rb) 
    validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id, presence: true
  
Index page
      Update App.js replace the const {
    //       logged_in,
    //       current_user,
    //       new_user_route,
    //       sign_in_route,
    //       sign_out_route
    //     } = this.props
    with the json syntax to control http requests and responses
    And pass methods/functions to control how the info is rendered


Icon imports
  $ yarn add @fortawesome/fontawesome-svg-core
  $ yarn add @fortawesome/free-solid-svg-icons
  $ yarn add @fortawesome/react-fontawesome
  import { faHome, faCity } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Test coverage
  update the spec/requests/apartment_spec.rb
  Testing in a React in Rails App
  $ yarn add jest
  $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16 Add to the bottom of package.json
  "jest": {
      "roots": [
        "app/javascript/components"
      ]

Index controller method
    
Request spec
Fetch for index
State in app.js
Added Font Awesome Icons


In JSX:
In JSX:

.index-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card.card-body {
  width: 300px;
  background-color: #FFFEF1;
  margin: 20px;
}

form{
  background-color: #f7f39a;
}
.App{
  text-align: center;
}

how to reload rails s quicker
open up text editor
bin/webpack-dev-server

Demo...one portion of the application 

If you do a bd:drop...sign back in as a user on apt app...the apt need at least one user

Pictures have to be passed in through the import....make separate files for the pictures, create an array. then use the following syntax is called upon the picture.
class ApartmentIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      pics: [apt, apt1 ]
    }
  } 
  render() {
    const { apartments } = this.props
    const { pics } = this.state
    return (
      <>
      
                  <CardImg src={pics[0]} />

https://reactstrap.github.io/?path=/docs/components-card--card

<img src={pics[index].src} alt={pics[index].alt}/>

Steps on making a carousel
https://www.newline.co/@andreeamaco/react-carousel-building-the-component-from-scratch-vs-using-a-library--7da468d4