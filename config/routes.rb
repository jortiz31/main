Rails.application.routes.draw do

  root  'site#angular'
  get '*path', to: 'site#angular'
  resources :projects, only: [:index, :show]
end
