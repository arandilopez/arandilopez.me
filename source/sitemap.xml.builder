---
layout: false
directory_index: false
---
pages = sitemap.resources.find_all{ |p|
  !p.source_file.nil? && p.source_file.match(/\.html/) && !p.data.sitemap_noindex
}
xml.instruct!
xml.urlset 'xmlns' => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  pages.each do |page|
    xml.url do
      xml.loc "https://arandilopez.me/#{page.destination_path.gsub('/index.html','')}"
      xml.lastmod Date.today.to_time.iso8601
      xml.changefreq page.data.changefreq || "monthly"
      xml.priority page.data.priority || 0.6
    end
  end
end
