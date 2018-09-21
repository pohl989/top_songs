Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    resources :songs
  end


  #this needs to be the very last thing before the end
  get '*other', to: 'static#index'

end
