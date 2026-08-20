---
layout: page
title: About | Arandi Lopez
permalink: /about/
---

<div class="max-w-4xl mx-auto">
  <!-- Header -->
  <header class="mb-10 pb-6 border-b border-base-300">
    <div class="font-mono text-xs text-primary font-semibold tracking-wider uppercase mb-2">
      // 03. Developer Dossier
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
      About Me
    </h1>
    <p class="mt-2 text-base-content/70 text-sm sm:text-base">
      Software engineer, web craftsman, and technology explorer based in Mexico.
    </p>
  </header>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
    <!-- Left 2 Cols: Narrative & Stack -->
    <div class="lg:col-span-2 space-y-8">
      <!-- Bio Narrative -->
      <section class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-lg leading-relaxed text-base-content/90">
          I am a <strong>Software Engineer with 10+ years of experience</strong> building scalable, maintainable, and user-centered web applications. My core expertise centers around <strong>Ruby on Rails</strong>, complemented by full-stack experience with <strong>Node.js</strong> and <strong>React</strong>.
        </p>
        <p class="leading-relaxed text-base-content/80">
          Beyond day-to-day web development, I am deeply fascinated by the intersection of <strong>Artificial Intelligence</strong>, machine learning workflows, and the durable principles of <strong>Software Architecture</strong>. I believe in writing readable code, building resilient architectures, and leveraging modern agentic AI tooling to amplify developer productivity.
        </p>
      </section>

      <!-- Technical Stack Matrix -->
      <section class="pt-6 border-t border-base-300">
        <h2 class="font-mono text-xs font-semibold tracking-wider uppercase text-base-content/80 flex items-center gap-2 mb-6">
          <span class="text-primary font-bold">//</span>
          <span>Core Stack &amp; Technologies</span>
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {% for category in site.data.technologies %}
          <div class="p-4 rounded-lg border border-base-300 bg-base-200/30">
            <h3 class="font-mono text-xs font-bold {{ category.color }} mb-3 uppercase tracking-wide">{{ category.title }}</h3>
            <div class="flex flex-wrap gap-1.5">
              {% for item in category.items %}
              <span class="mono-badge">{{ item }}</span>
              {% endfor %}
            </div>
          </div>
          {% endfor %}
        </div>
      </section>
    </div>

    <!-- Right Col: Profile Avatar & Social Connect -->
    <div class="space-y-6">
      <!-- Profile Card -->
      <div class="p-5 rounded-xl border border-base-300 bg-base-200/40 text-center flex flex-col items-center">
        <div class="mb-4">
          <img 
            src="{{ '/assets/images/arandilopez.webp' | relative_url }}" 
            alt="Arandi Lopez" 
            class="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-2xl border-2 border-base-300 hover:border-primary transition-colors shadow-md"
          />
        </div>

        <h3 class="text-lg font-bold text-base-content">Arandi López</h3>
        <p class="font-mono text-xs text-base-content/60 mt-0.5">Software Engineer</p>

        <div class="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-base-content/70 px-2.5 py-1 rounded bg-base-100 border border-base-300">
          <span class="status-pip" aria-hidden="true"></span>
          <span>online / remote</span>
        </div>
      </div>

      <!-- Connect Section -->
      <div class="p-5 rounded-xl border border-base-300 bg-base-200/20">
        <h3 class="font-mono text-xs font-semibold uppercase tracking-wider text-base-content/80 mb-4 flex items-center gap-2">
          <span class="text-primary font-bold">//</span>
          <span>Connect</span>
        </h3>

        <div class="space-y-2 font-mono text-xs">
          <a 
            href="https://github.com/arandilopez" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub profile (opens in new tab)"
            class="w-full flex items-center justify-between p-2.5 rounded-lg border border-base-300 hover:border-primary/50 bg-base-100 hover:bg-base-200 text-base-content hover:text-primary transition-all group"
          >
            <span class="flex items-center gap-2">
              <span class="opacity-50" aria-hidden="true">$</span>
              <span>open github</span>
            </span>
            <span class="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true">&rarr;</span>
          </a>

          <a 
            href="https://twitter.com/arandilopez" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter/X profile (opens in new tab)"
            class="w-full flex items-center justify-between p-2.5 rounded-lg border border-base-300 hover:border-primary/50 bg-base-100 hover:bg-base-200 text-base-content hover:text-primary transition-all group"
          >
            <span class="flex items-center gap-2">
              <span class="opacity-50" aria-hidden="true">$</span>
              <span>open twitter</span>
            </span>
            <span class="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true">&rarr;</span>
          </a>

          <a 
            href="https://linkedin.com/in/arandi-lopez-550795198/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn profile (opens in new tab)"
            class="w-full flex items-center justify-between p-2.5 rounded-lg border border-base-300 hover:border-primary/50 bg-base-100 hover:bg-base-200 text-base-content hover:text-primary transition-all group"
          >
            <span class="flex items-center gap-2">
              <span class="opacity-50" aria-hidden="true">$</span>
              <span>open linkedin</span>
            </span>
            <span class="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

