require 'rails_helper'

RSpec.describe Apartment, type: :model do
  let(:user) { User.create email: 'willnotbereal@nawl.com', password: 'ABC123', password_confirmation: 'ABC123' }

  it 'should have a valid street' do
    apartment = Apartment.create city: 'Heaven', state: 'HI', manager: 'Mama Lean', email: 'malean@heaven.com', price: '3333', bedrooms: 3, bathrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:street]).to include "can't be blank"
  end
  it 'should have a valid city' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', state: 'HI', manager: 'Mama Lean', email: 'malean@heaven.com', price: '3333', bedrooms: 3, bathrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:city]).to include "can't be blank"
  end
  it 'should have a valid state' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', manager: 'Mama Lean', email: 'malean@heaven.com', price: '3333', bedrooms: 3, bathrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:state]).to include "can't be blank"
  end
  it 'should have a valid manager' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state: 'HI', email: 'malean@heaven.com', price: '3333', bedrooms: 3, bathrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:manager]).to include "can't be blank"
  end
  it 'should have a valid email' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state:'HI', manager: 'Mama Lean', price: '3333', bedrooms: 3, bathrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:email]).to include "can't be blank"
  end
  it 'should have a valid price' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state: 'HI', manager: 'Mama Lean', email: 'malean@heaven.com', bedrooms: 3, bathrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:price]).to include "can't be blank"
  end
  it 'should have a valid bedrooms' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state:'HI', manager: 'Mama Lean', email: 'malean@heaven.com', price: '3333', bathrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:bedrooms]).to include "can't be blank"
  end
  it 'should have a valid bathrooms' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state: 'HI', manager: 'Mama Lean', email: 'malean@heaven.com', price: '3333', bedrooms: 3, pets: 'yes', user_id: user.id
    expect(apartment.errors[:bathrooms]).to include "can't be blank"
  end
  it 'should have a valid pets' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state: 'HI', manager: 'Mama Lean', email: 'malean@heaven.com', price: '3333', bedrooms: 3, bathrooms: 3, user_id: user.id
    expect(apartment.errors[:pets]).to include "can't be blank"
  end
  it 'should have a valid user' do
    apartment = Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state:'HI', manager: 'Mama Lean', email: 'malean@heaven.com', price: '3333', bedrooms: 3, bathrooms: 3, pets: 'yes'
    expect(apartment.errors[:user]).to include "must exist"
  end
end
