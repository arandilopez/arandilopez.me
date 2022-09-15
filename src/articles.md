---
layout: page
title: Articles
permalink: /articles/
paginate:
  collection: posts
  per_page: 5
---

<section>
  {% for post in paginator.resources %}
    <article>
      <a href="{{ post.url }}">
        <h3 class="text-gray-700 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400">{{ post.title }}</h3>
      </a>
      <p>{{ post.excerpt }}</p>
    </article>
  {% endfor %}
</section>

{% if paginator.total_pages > 1 %}

  <ul class="pagination">
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
