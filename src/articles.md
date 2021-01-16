---
layout: page
title: Articles
permalink: /articles/
pagination:
  enabled: true
  per_page: 5
---

<ul class="list-none">
  {% for post in paginator.documents %}
    <li>
      <a href="{{ post.url }}">
        <h3 class="text-gray-700 hover:text-gray-800">{{ post.title }}</h3>
      </a>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>

{% if paginator.total_pages > 1 %}

  <ul class="pagination list-none">
    {% if paginator.previous_page %}
    <li>
      <a href="{{ paginator.previous_page_path }}">Previous Page</a>
    </li>
    {% endif %}
    {% if paginator.next_page %}
    <li>
      <a href="{{ paginator.next_page_path }}">Next Page</a>
    </li>
    {% endif %}

  </ul>

{% endif %}
