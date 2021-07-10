Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :jobs do
      resources :trackers
    end
    resources :trackers do
      resources :reflections
    end
  end
end
