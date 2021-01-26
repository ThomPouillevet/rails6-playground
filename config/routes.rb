Rails.application.routes.draw do
  resources :books
  get 'home/index'
  root to: "home#index"
end
