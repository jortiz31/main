Rails.application.routes.draw do

  root  'projects#home'
  resources :projects, only: [:index, :show]
  get '*path', to: 'projects#home'
end
