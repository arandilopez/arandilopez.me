require "uglifier"

set :markdown, input: 'GFM'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :directory_indexes
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Build-specific configuration
activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "npm run production" :
    "npm run dev",
  source: ".tmp/dist",
  latency: 1

activate :blog do |blog|
  Time.zone = "Mexico City"
  blog.prefix = 'articles'
  blog.layout = 'article'
  # blog.paginate = true
  # blog.per_page = 20
end


activate :livereload

configure :build do
  activate :minify_css, inline: true
  activate :minify_javascript, inline: true, compressor: -> { Uglifier.new(harmony: true) }
  activate :asset_hash
  activate :imageoptim
  activate :gzip
end

helpers do
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
