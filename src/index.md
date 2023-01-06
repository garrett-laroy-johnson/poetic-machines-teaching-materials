---
title: welcome
---

<h2>{{ title }}</h2>
<ol>
{% for pageEntry in pagination.pages %}

<li><a href="{{ pagination.hrefs[ loop.index0 ] }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page"{% endif %}>Page {{ loop.index }}</a></li>
{% endfor %}
</ol>
