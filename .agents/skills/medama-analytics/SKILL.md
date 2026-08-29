---
name: medama-analytics
description: Use Medama Analytics correctly when adding, changing, auditing, or debugging page-view properties, click events, `data-m:load`, or `data-m:click` attributes. Use this skill whenever a website needs Medama event instrumentation, event metadata, custom-property tags, conversion clicks, or analytics segmentation, even when the user does not name Medama's data attributes.
---

# Medama Analytics Events

Use Medama custom properties to add flat metadata to a page view or a selected click.
Medama stores each property as a key-value pair and links it to the applicable page view.
This makes properties available for event-list display, filters, and segmentation.

## Enable the tracker features first

Before adding markup, tell the user to enable the matching option in the Medama dashboard's **Tracker** settings:

- Enable **Page View Events** for `data-m:load`.
- Enable **Click Events** for `data-m:click`.

These features are opt-in independently.
Tracker-code changes can take up to six hours to reach returning visitors because browsers and CDNs can cache the code.
Ensure the CDN respects Medama cache headers.

## Attribute syntax

Use one attribute value with one or more flat `key=value` pairs.
Separate pairs with semicolons.

```html
<body data-m:load="page_type=article;theme=dark;logged_in=false">
```

```html
<a href="/contact" data-m:click="action=contact;component=header_nav">
  Contact
</a>
```

Use simple, stable keys and values such as lowercase snake case, booleans, short identifiers, and known enum values.
Do not send nested objects, JSON, user-entered text, or values that contain `;` or `=`.
Do not send personal, secret, or sensitive data.

## Page-view events

Use `data-m:load` for facts that describe a page visit or the visitor state relevant to that visit.
Put a site-wide, static property on `body`.
Put a contextual property on an element that renders with the page when that makes the ownership clearer.

```html
<body data-m:load="page_type=article;page_section=engineering">
  <main data-m:load="theme=dark;subscription=paid">
    <!-- page content -->
  </main>
</body>
```

Use page-view properties only when they help answer a real question in Medama.
Typical properties are:

| Key | Use | Example values |
| --- | --- | --- |
| `page_type` | Stable template or content type | `home`, `article`, `pricing` |
| `page_section` | Stable site area | `engineering`, `docs` |
| `theme` | Active visual theme | `light`, `dark` |
| `logged_in` | Authentication state | `true`, `false` |
| `subscription` | Coarse account tier when relevant | `free`, `paid` |

Render the final property value in the HTML before Medama reads the page.
For client-rendered state, set the attribute as part of the initial rendered UI, not after an unrelated delayed interaction.

## Click events

Use `data-m:click` on the exact native button, link, or other interactive element that represents the action.
Do not put a click attribute on a large container when several controls inside it have different meanings.

```html
<button type="button" data-m:click="action=start_trial;component=pricing_cta">
  Start trial
</button>

<a href="/pricing" data-m:click="action=view_pricing;component=footer_nav;destination=pricing">
  Pricing
</a>
```

Use an existing native `<button>` or `<a>` rather than adding non-semantic click targets for analytics.
The application action must still work without tracking.

Typical click properties are:

| Key | Use | Example values |
| --- | --- | --- |
| `action` | The user intent | `start_trial`, `contact`, `download` |
| `component` | The stable UI placement | `header_nav`, `pricing_cta`, `footer_nav` |
| `destination` | A stable navigation target when useful | `pricing`, `contact` |
| `product_id` | A domain identifier when the event needs one | `plan_pro` |

Use names that match the application's existing analytics taxonomy.
Do not create a second name for the same action, such as both `signup` and `create_account`, without a reporting need.
Avoid volatile labels, timestamps, full URLs with query parameters, and other high-cardinality values unless they are explicitly needed for analysis.

## Instrumentation workflow

1. Find the source that produces the rendered element, such as a server template, component, or layout.
2. Confirm which Medama tracker options are enabled.
3. State the reporting question and select the smallest stable property set that answers it.
4. Add `data-m:load` for page context or `data-m:click` for a deliberate user action.
5. Keep each value flat and use semicolon-separated `key=value` pairs.
6. Inspect the rendered DOM to confirm the final attributes and values are present.
7. Trigger a page visit or click, then verify the Medama event list, custom-property selector, and filters.

## Self-check

Before finishing, confirm all of these items:

- The corresponding Page View Events or Click Events option is enabled in Medama.
- Every attribute uses the exact `data-m:load` or `data-m:click` name.
- Every property is a flat `key=value` pair, and multiple properties use `;`.
- Page properties describe the visit, and click properties describe one meaningful action.
- Keys and values are stable, intentional, and free of sensitive data.
- The rendered DOM contains the expected attribute before the event occurs.
- The property appears on the expected Medama event and can be used to filter or segment data.
