Rails.application.routes.draw do

  root  'site#index'

  resources :projects, only: [:index, :show]
  get '*path', to: 'site#index'
end
