Rails.application.routes.draw do
  devise_for :users
  # devise_for :users
  root   'groups#index'

  resources :users, only: [:edit, :update] do
   collection do
      get 'search'
    end
  end
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:create, :index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
