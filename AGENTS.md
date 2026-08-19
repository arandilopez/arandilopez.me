# Repository Guide

## Commands

- Use Ruby 4.0.1 (managed by `mise`). Install locked dependencies with `bundle install`.
- Build and validate the site with `bundle exec jekyll build`. This is the only repository verification command.
- Run the local server, including drafts and live reload, with `bin/dev`; it requires the `foreman` executable and runs `bin/jekyll serve --livereload --drafts` from `Procfile.dev`.
- Restart the server after editing `_config.yml`; Jekyll does not reload that file.

## Structure

- This is one Jekyll site, not a Node project. Root pages use front matter and layouts in `_layouts/`; shared navigation and footer markup is in `_includes/`.
- Posts live in `_posts/` and use date-prefixed filenames. Use `layout: post`; post metadata such as `title`, `date`, `tags`, and `description` is rendered by `_layouts/post.html`.
- The article index and pagination are implemented in `articles/index.html`; pagination is configured in `_config.yml`.

## Styling And Generated Output

- Edit Tailwind and DaisyUI configuration in `_data/tailwind/styles.css`. `jekyll-tailwindcss` compiles it to `/assets/styles.css` during Jekyll builds; do not hand-edit generated site output in `_site/`.
- `assets/styles.tailwindcss` is a legacy source file and is not the CSS path configured in `_config.yml`.
- DaisyUI plugin files are vendored in `_data/tailwind/`. Refresh them only with `bin/daisyui-install`, which downloads the latest release artifacts.
