require 'rails_helper'

require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'willnotbereal@nawl.com', password: 'ABC123', password_confirmation: 'ABC123'
  end

  # -----index-----
  describe "GET /index" do
    it 'gets all the apartments' do
      Apartment.create street: 'Hammock Hat Bikini Ct', city: 'Heaven', state: 'HI', manager: 'MamaLean', email: 'malean@heaven.com', price: '3333', bedrooms: 3, bathrooms: 3, pets: 'yes', user_id: user.id

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)

      apartment = apartments.first
      expect(apartment['street']).to eq 'Hammock Hat Bikini Ct'
      expect(apartment['city']).to eq 'Heaven'
      expect(apartment['state']).to eq 'HI'
      expect(apartment['manager']).to eq 'MamaLean'
      expect(apartment['email']).to eq 'malean@heaven.com'
      expect(apartment['price']).to eq '3333'
      expect(apartment['bedrooms']).to eq 3
      expect(apartment['bathrooms']).to eq 3
      expect(apartment['pets']).to eq 'yes'
      expect(apartment['user_id']).to eq user.id

    end
  end
  # -----create-----
    describe "POST /apartments" do
      it 'creates a new apartment' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            state: 'CA',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            price: '9999',
            bedrooms: 4,
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params

        apartment_response = JSON.parse(response.body)
        expect(apartment_response['street']).to eq 'Current Dwelling Vineyard'
        expect(apartment_response['city']).to eq 'Cold Ocean'
        expect(apartment_response['state']).to eq 'CA'
      end

      it 'cannot create a new apartment without a street' do
        apartment_params = {
          apartment: {
            city: 'Cold Ocean',
            state: 'CA',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            price: '9999',
            bedrooms: 4,
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['street']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without a city' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            state: 'CA',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            price: '9999',
            bedrooms: 4,
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['city']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without a state' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            price: '9999',
            bedrooms: 4,
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        apartment = JSON.parse(response.body)
        error_response = JSON.parse(response.body)
        expect(error_response['state']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without a manager' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            state: 'CA',
            email: 'full@ofit.com',
            price: '9999',
            bedrooms: 4,
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['manager']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without an email' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            state: 'CA',
            manager: 'Full Stacker',
            price: '9999',
            bedrooms: 4,
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['email']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without a price' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            state: 'CA',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            bedrooms: 4,
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['price']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without bedrooms' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            state: 'CA',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            price: '9999',
            bathrooms: 2,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['bedrooms']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without bathrooms' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            state: 'CA',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            price: '9999',
            bedrooms: 4,
            pets: 'no',
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['bathrooms']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new apartment without pets' do
        apartment_params = {
          apartment: {
            street: 'Current Dwelling Vineyard',
            city: 'Cold Ocean',
            state: 'CA',
            manager: 'Full Stacker',
            email: 'full@ofit.com',
            price: '9999',
            bedrooms: 4,
            bathrooms: 2,
            user_id: user.id
          }
        }
        post '/apartments', params: apartment_params
        error_response = JSON.parse(response.body)
        expect(error_response['pets']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end
    
    it 'cannot create a new apartment without a user id' do
      apartment_params = {
        apartment: {
          street: 'Current Dwelling Vineyard',
          city: 'Cold Ocean',
          state: 'CA',
          manager: 'Full Stacker',
          email: 'full@ofit.com',
          price: '9999',
          bedrooms: 4,
          bathrooms: 2,
          pets: 'no',
        }
      }
      post '/apartments', params: apartment_params
      error_response = JSON.parse(response.body)
      expect(error_response['user_id']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

  end
end
