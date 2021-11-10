# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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