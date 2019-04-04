require "uglifier"

set :markdown, input: 'GFM'

page '/*.xml', layout: false, directory_index: false
page '/*.json', layout: false, directory_index: false
page '/*.txt', layout: false, directory_index: false
proxy '/_redirects', 'redirects.txt', ignore: true

activate :i18n
activate :directory_indexes
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Build-specific configuration
activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "yarn run build" :
    "yarn run dev",
  source: ".tmp/dist",
  latency: 1

activate :blog do |blog|
  Time.zone = "Mexico City"
  blog.prefix = 'articles'
  blog.layout = 'article'
end


activate :livereload

configure :build do
  config[:host] = 'https://arandilopez.me'
  activate :minify_css, inline: true
  activate :minify_javascript, inline: true, compressor: -> { Uglifier.new(harmony: true) }
  activate :asset_hash
  activate :imageoptim
  activate :gzip
end

helpers do
  def articles(except: nil)
    articles = blog.articles
    articles = articles.select { |article| article.published? } if build?
    articles = articles.reject { |article| article == except } if except
    articles
  end

  def nav_link(text, url, options = {})
    options[:class] ||= ""
    if current_page.url.match? url
      klass = options[:class]
      klass.gsub!('text-grey-dark', '')
      klass << ' text-black'
      options[:class] = klass
    end
    link_to text, url, options
  end

  def post_url(page_id)
    found = sitemap.find_resource_by_page_id(page_id)
    return found.url if found
    return ''
  end
end
