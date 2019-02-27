---
layout: false
directory_index: false
---
xml.instruct! :xml, :version => '1.0'
xml.rss :version => "2.0", 'xmlns:atom' => 'http://www.w3.org/2005/Atom' do
  xml.channel do
    xml.title "Arandi López · Articles"
    xml.description "My articles"
    xml.link "https://arandilopez.me/articles"
    xml.tag! 'atom:link', :rel => 'self', :type => 'application/rss+xml', :href => 'https://arandilopez.me/rss.xml'

    articles.each do |article|
      xml.item do
        xml.title article.title
        xml.link "https://arandilopez.me/#{article.url}"
        xml.description article.summary
        xml.pubDate article.date.rfc822
        xml.guid "https://arandilopez.me/#{article.url}"
      end
    end
  end
end
