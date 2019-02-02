# Time.zone = "Mexico City"
activate :directory_indexes
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Build-specific configuration
activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "./node_modules/webpack/bin/webpack.js --bail" :
    "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
  source: ".tmp/dist",
  latency: 1

configure :build do
  activate :minify_css, inline: true
  activate :minify_javascript, inline: true
  activate :asset_hash
  activate :imageoptim
  activate :gzip
end

activate :livereload

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
end
