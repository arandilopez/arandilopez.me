source 'https://rubygems.org'

ruby '>= 3.4.1'

gem 'jekyll', '~> 4.4.1'
gem 'jekyll-paginate', '~> 1.1' # Added for pagination

gem 'ruby-vips'

group :jekyll_plugins do
  gem 'jekyll-compose'
  gem 'jekyll-feed', '~> 0.12'
  gem 'jekyll-og-image'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap', '~> 1.4'
  gem 'jekyll-vite'
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '>= 1', '< 3'
  gem 'tzinfo-data'
end

gem 'wdm', '~> 0.1', platforms: %i[mingw x64_mingw mswin]

gem 'http_parser.rb', '~> 0.6.0', platforms: [:jruby]
