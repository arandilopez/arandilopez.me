xml.instruct! :xml, :version => '1.0'
xml.rss :version => "2.0", 'xmlns:atom' => 'http://www.w3.org/2005/Atom' do
  xml.channel do
    xml.title "Arandi López · Articles"
    xml.description "My articles"
    xml.link File.join(config[:host].to_s, "articles")
    xml.tag! 'atom:link', :rel => 'self', :type => 'application/rss+xml', :href => File.join(config[:host].to_s, 'rss.xml')

    articles.each do |article|
      xml.item do
        xml.title article.title
        xml.link File.join(config[:host].to_s, article.url)
        xml.description article.summary
        xml.pubDate article.date.rfc822
        xml.guid File.join(config[:host].to_s, article.url)
      end
    end
  end
end
