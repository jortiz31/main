Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'angular_test', to: 'angular_test#index'
  resources :projects, only: [:index]
end
