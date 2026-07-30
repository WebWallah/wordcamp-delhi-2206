# WordCamps: A Complete Analysis

## 1. What is a WordCamp?

A **WordCamp** is a community-organized conference focused on everything WordPress — the open-source software that powers roughly 40%+ of the web. WordCamps are informal, community-organized events put together by local volunteers, sanctioned by the WordPress Foundation, and covering all things WordPress: development, design, security, SEO, business, accessibility, and community.

They typically feature:
- **Talks and workshops** across multiple tracks (beginner, developer, business/user)
- A **sponsor hall** where hosting companies, plugin/theme makers, and agencies exhibit
- **Networking / "hallway track"** conversations
- Often a **Contributor Day** — a day dedicated to contributing back to WordPress core, docs, themes, plugins, support forums, translations, marketing, etc.
- Low-cost tickets (frequently $20–$40 or a local-currency equivalent), kept deliberately cheap since events are volunteer-run and partly sponsor-funded

Sources: [WordCamp Central](https://central.wordcamp.org/), [WPBeginner glossary](https://www.wpbeginner.com/glossary/wordcamp/), [WPMarmite glossary](https://wpmarmite.com/en/glossary/wordcamp/)

## 2. Governance & Structure

- **WordPress Foundation** — the nonprofit that owns the WordPress trademark and licenses the term "WordCamp" for use by community events.
- **WordPress Community Support, PBC (WPCS)**, informally called **WordCamp Central** — a *separate* entity from the WordPress Foundation that actually administers WordCamps: reviewing applications, approving budgets, running the central website infrastructure (`wordcamp.org` network), and providing organizer support ("Community Deputies").
- Every local event runs on the shared **WordCamp.org multisite network**, using standard themes and the **CampTix** ticketing plugin (see §5).

Source: [WordPress Community Support & WordPress Foundation Entity Structure](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/budget-and-finances/wordpress-community-support-wordpress-foundation-entity-structure/)

## 3. How a WordCamp Gets Organized

Documented in the **Community Team Handbook** (make.wordpress.org/community):

1. **Application** — a lead organizer (or team) applies via WordCamp Central; a Community Deputy interviews/orients them.
2. **Pre-planning window** — once approved, the team has about **3 months** to lock a venue and date, or the slot is released back to the community.
3. **Team formation** — organizers recruit volunteers for tracks like sponsorship, volunteers, speakers/program, marketing, video/AV, swag, and web presence.
4. **Budget** — a lean, transparent budget is submitted to WordCamp Central for review before fundraising/spending begins. Community Deputies review it against past comparable events.
5. **Website setup** — organizers get a subsite on the wordcamp.org network (e.g. `delhi.wordcamp.org`) using standard organizer tools.
6. **Speaker/sponsor recruitment, ticket sales, schedule building.**
7. **Event execution**, followed by a **post-event report** and reconciliation of finances back to WordCamp Central.

Source: [First Steps – Make WordPress Community handbook](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/)

## 4. Funding Model

- Organizing teams are expected to run **lean budgets**; sponsorship guidelines discourage extravagant spending.
- **Global Community Sponsorship** (funded by Automattic/major WordPress companies) subsidizes a meaningful share of costs, especially for new or smaller camps — historically **~40–80% of a brand-new WordCamp's budget**, tapering to ~25–50% for established ones.
- **Local sponsorship tiers** (e.g., Bronze/Silver/Gold/Platinum) give sponsors booth space, logo placement, and swag-bag inclusion — but explicitly **no guaranteed speaking slots** ("sponsors don't buy talks").
- Organizing teams are advised not to spend more than ~20 hours chasing sponsorship, keeping the volunteer burden reasonable.
- Ticket prices are intentionally kept low/affordable (not a profit center).

Source: [Global Community Sponsorship guidelines](https://make.wordpress.org/community/handbook/wordcamp-organizer/planning-details/fundraising/global-community-sponsorship-for-event-organizers/), [Budget & Finances](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/budget-and-finances/)

## 5. The Tech Stack Behind WordCamps

- **wordcamp.org** — a WordPress multisite network; every event (e.g. `delhi.wordcamp.org/2017/`) is a subsite built from shared organizer themes/plugins, so organizers don't need to build a site from scratch.
- **CampTix** — the open-source ticketing plugin (originally by Automattic, code now lives under the `WordPress/wordcamp.org` GitHub repo) that WordCamps use for:
  - Multiple ticket types (attendee, speaker, sponsor, volunteer, student rates)
  - Coupon/discount codes
  - Attendee CSV/XML export, mass email to attendees
  - Public attendee list (opt-in)
  - Refunds and revenue reporting
  - Stripe/PayPal payment integration
- **GlotPress / polyglots**, **Contributor Day tooling**, and standard WP block-theme patterns round out the shared infrastructure.

Sources: [CampTix on GitHub (Automattic/camptix)](https://github.com/Automattic/camptix), [Using CampTix Event Ticketing Plugin](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/web-presence/using-camptix-event-ticketing-plugin/)

## 6. Code of Conduct & Safety

Every WordCamp must publish a **Code of Conduct** page immediately once dates are announced, aligned with the community-wide WordPress Code of Conduct emphasizing inclusivity, harassment-free participation, and respectful behavior at both in-person and online events. Local safety leads/incident-response contacts are required at in-person events.

Source: [Code of Conduct – WordCamp US](https://us.wordcamp.org/2024/code-of-conduct/)

## 7. Flagship vs. Local WordCamps

- **Flagship events** (much larger, run by WordPress Community Support directly rather than fully independent local teams): **WordCamp US**, **WordCamp Europe**, **WordCamp Asia**, and — announced in 2026 — **WordCamp India** as the **fourth flagship**, targeted for **October–December 2027**.
- **Local/regional WordCamps** are the majority: city-level events (e.g., WordCamp Delhi, Mumbai, Pune, Nashik, Bangalore in India; hundreds globally) run by local volunteer teams under the same Central rules.

Sources: [WordCamp India 2027: What's Next? – Make WordPress](https://make.wordpress.org/community/2026/04/30/wordcamp-india-2027-whats-next/), [WC Asia Winds Up, Declares WordCamp India As Fourth Flagship Event](https://wp-content.co/wc-asia-winds-up-wordcamp-india-fourth-flagship-event/)

## 8. WordCamp India / Delhi — Specific History

- **India's very first WordCamp** was held **21–23 February 2009 in Delhi**, organized by the *Delhi Bloggers Bloc* and *Blog Design Studio*. It was also, at the time, India's biggest blogging-related gathering, and WordPress founder **Matt Mullenweg** attended alongside tech blogger Om Malik.
- Delhi has hosted local WordCamps in subsequent years too (e.g., **WordCamp Delhi 2017**, at `delhi.wordcamp.org/2017/`).
- **WordCamp India** later ran as a national/online edition (e.g., **WordCamp India 2021**, held online during the pandemic).
- India's WordPress community has since matured significantly, with many active city-level Meetup groups and recurring local WordCamps (Mumbai, Pune, Nashik, Ahmedabad, Bhopal, Kochi, etc.), leading to WordCamp Asia being hosted in India (Bangalore 2025 was the original plan; **WordCamp Asia 2026 is in Mumbai, April 9–11**) and the 2027 designation of WordCamp India as a flagship event.

Sources: [Global Voices – India: WordCamp (2009)](https://globalvoices.org/2009/02/20/india-wordcamp/), [About – WordCamp Delhi 2017](https://delhi.wordcamp.org/2017/about/), [WordCamp India 2021 – A recap](https://central.wordcamp.org/news/2021/03/wordcamp-india-2021-a-recap/), [About Us – WordCamp Asia 2026](https://asia.wordcamp.org/2026/about-us/)

## 9. Typical Event-Day Format

| Element | Description |
|---|---|
| Registration & badge pickup | Morning check-in, swag bag distribution |
| Opening remarks | Welcome, code of conduct reminder, sponsor thanks |
| Multi-track talks | Concurrent 30–45 min sessions (Dev / Design / Business / Beginner tracks) |
| Sponsor hall | Booths open throughout the day, demo stations |
| Lunch & networking | Often the most valuable part for attendees |
| Lightning talks / panels | Shorter, informal sessions |
| Closing & swag/prize giveaways | Sponsor-donated prizes, thank-yous |
| (Optional next day) Contributor Day | Hands-on contribution to WordPress core/meta/support/docs/marketing/training teams |

## 10. Key Takeaways Relevant to Building a "WordCamp Delhi" Project/Site

If this repository (`wordcamp-delhi-2206`) is intended to model, plan, or build tooling/content for a WordCamp Delhi event, the research above suggests these are the load-bearing concepts to design around:
1. **Multi-track schedule data model** (talks, speakers, tracks, rooms, time slots).
2. **Ticketing** with tiered types (attendee/speaker/volunteer/sponsor) and coupon support — CampTix is the reference implementation.
3. **Sponsorship tiers** with clear, transparent benefit levels and no pay-for-speaking-slots rule.
4. **Code of Conduct** page/policy published early and visibly.
5. **Volunteer/organizer team structure** mirroring Central's roles (lead organizer, sponsorship, program, volunteers, web, marketing, A/V).
6. **Budget transparency** — lean, sponsor-subsidized, reviewed against Central norms.
7. **Historical continuity** — Delhi holds symbolic significance as the birthplace of WordCamp India (2009), which is a strong narrative/branding angle for any Delhi-focused event site.

## Sources

- [WordCamp Central](https://central.wordcamp.org/)
- [WPBeginner – What is a WordCamp](https://www.wpbeginner.com/glossary/wordcamp/)
- [WPMarmite – WordCamp glossary](https://wpmarmite.com/en/glossary/wordcamp/)
- [Make WordPress Community Handbook – First Steps](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/)
- [WordPress Community Support & WordPress Foundation Entity Structure](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/budget-and-finances/wordpress-community-support-wordpress-foundation-entity-structure/)
- [Budget and Finances Handbook](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/budget-and-finances/)
- [Global Community Sponsorship Guidelines](https://make.wordpress.org/community/handbook/wordcamp-organizer/planning-details/fundraising/global-community-sponsorship-for-event-organizers/)
- [Using CampTix Event Ticketing Plugin](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/web-presence/using-camptix-event-ticketing-plugin/)
- [Automattic/camptix on GitHub](https://github.com/Automattic/camptix)
- [Code of Conduct – WordCamp US 2024](https://us.wordcamp.org/2024/code-of-conduct/)
- [Global Voices – India: WordCamp (2009)](https://globalvoices.org/2009/02/20/india-wordcamp/)
- [About – WordCamp Delhi 2017](https://delhi.wordcamp.org/2017/about/)
- [WordCamp India 2021 – A recap](https://central.wordcamp.org/news/2021/03/wordcamp-india-2021-a-recap/)
- [About Us – WordCamp Asia 2026](https://asia.wordcamp.org/2026/about-us/)
- [WordCamp India 2027: What's Next? – Make WordPress](https://make.wordpress.org/community/2026/04/30/wordcamp-india-2027-whats-next/)
- [WC Asia Winds Up, Declares WordCamp India As Fourth Flagship Event](https://wp-content.co/wc-asia-winds-up-wordcamp-india-fourth-flagship-event/)
