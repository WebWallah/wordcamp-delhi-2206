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

## 10. Delhi: The City's Culture & Vibe

Delhi isn't a single city so much as layered cities stacked on top of each other — Indraprastha, Tughlaqabad, Shahjahanabad, Lutyens' New Delhi, and the sprawling NCR of Gurugram/Noida — and that layering is the key to its personality.

- **Old Delhi vs. New Delhi duality** — *Purani Dilli* (Old Delhi / "Dilli-6") is the walled Mughal city: narrow lanes, Jama Masjid, Chandni Chowk, centuries-old recipes, chaos as a feature not a bug. *New Delhi* is Lutyens' planned capital and the modern NCR — wide boulevards, government buildings, glass-and-steel offices, startup hubs. A WordCamp Delhi event sits squarely in the "New Delhi" register (convention centres, hotels) while often borrowing Old Delhi's imagery for branding/nostalgia.
- **"Dil se Dilli" / "Dilli ka Dil"** — the city's own self-mythology is about an outsized, warm-hearted hospitality: strangers get invited in for chai, arguments are loud but forgotten fast, and food is the love language. This "heart of Delhi" framing shows up constantly in local branding and is a natural tagline register for a Delhi-based community event.
- **Food as identity** — chole bhature, paranthas (Paranthe Wali Gali), chaat/papri chaat, butter chicken and dal makhani (Punjabi-refugee-influenced post-Partition), kebabs, and endless street food consumed standing up mid-conversation. Food breaks at a Delhi event aren't a formality — they're where the actual networking happens.
- **Language & diversity** — overwhelmingly Hindi/Hinglish as the working language (with English fluent in professional/tech settings), plus Punjabi, Urdu, Bengali and others; religiously mixed (Hindu-majority with sizeable Muslim, Sikh, Jain, Christian communities) with a long track record of that mix coexisting.
- **Post-Partition energy** — a huge wave of Punjabi refugees after 1947 reshaped Delhi's food, business culture, and its famously loud, direct, deal-making, "josh"-filled (energetic/spirited) social style. That directness and hustle carries straight into Delhi's startup and meetup culture today.
- **Delhi/NCR as a tech and startup hub** — ranked among India's top startup ecosystems (Delhi NCR is consistently cited as India's #1 or #2 startup region by count/funding), home to GDG Delhi, PyDelhi, Women Who Code Delhi, TiE Delhi-NCR, and dense co-working spaces (91springboard, Innov8). This pre-existing meetup density is exactly the volunteer/speaker/sponsor pool a WordCamp draws from.
- **Net takeaway for events**: Delhi audiences respond to warmth-plus-hustle — big, generous hospitality (chai, food, "aap ghar aaye" welcome) combined with unapologetic ambition and directness. Branding that leans into "dil" (heart) alongside "hustle"/"community-built" resonates with the city's actual self-image.

Sources: [Culture of Delhi – Tradition, Lifestyle, Language](https://www.travelogyindia.com/delhi/culture-of-delhi.html), [20 Famous Foods of Delhi That Define the City's Soul](https://www.restaurantindia.in/article/20-famous-foods-of-delhi-that-define-the-city-s-soul.14913), ["Dilli ka dil comes calling" – The Tribune](https://www.tribuneindia.com/news/archive/lifestyle/dilli-ka-dil-comes-calling-498700), [Delicious Delhi: nostalgia, consumption and the old city](https://www.tandfonline.com/doi/full/10.1080/1070289X.2015.1034130), [The Role of Tech Communities in Delhi, India](https://www.nucamp.co/blog/coding-bootcamp-india-ind-the-role-of-tech-communities-in-delhi-india-how-to-get-involved), [What Makes Delhi Attractive for Tech Talent?](https://www.nucamp.co/blog/coding-bootcamp-india-ind-what-makes-delhi-india-attractive-for-tech-talent)

## 11. WordCamp Delhi Specifically — Editions & Story

- **2009 — The origin story.** WordCamp India's very first edition ran **21–23 February 2009 in Delhi**, organized by the *Delhi Bloggers Bloc* and *Blog Design Studio* — at the time it was India's biggest blogging-community gathering. WordPress founder **Matt Mullenweg** and tech blogger **Om Malik** both attended. This makes Delhi, literally, the birthplace of the WordPress community event in India.
- **2017 — WordCamp Delhi.** Held **19 August 2017**, branded with a "Welcome to New Delhi" theme on its own subsite (`delhi.wordcamp.org/2017/`), following the standard local-WordCamp format (talks + speakers announced on the subsite).
- **2024 — WordCamp Delhi 2024.** The most recent, largest-documented edition: **30 November – 1 December 2024** at the **NDMC Convention Centre**.
  - **32 speakers** from **4 countries** (India, Nepal, Bangladesh, Afghanistan) — reflecting Delhi's role as a South Asian regional hub, not just a national one.
  - **25 sponsors** and **35+ organizing team members**.
  - A **Contributor Day** ran the first day (8 AM–5 PM) alongside the main track, with mentors guiding attendees into WordPress core, docs, support, translation, marketing, and training teams.
  - Notable sessions included Dr. Govind's *"The untold story of Indian internet"* (on the `.in` ccTLD/domain history) and Amartya Gaur's *"Mastering Gutenberg blocks: From basics to building your own"* — a mix of India-specific web-history storytelling and hands-on modern WordPress (block editor) skill-building.
  - A public "by the numbers" wrap-up post and photo/video album were published afterward, consistent with Central's expectation of a post-event report.
- **2025 —** Community activity continued with an event noted for **8 March 2025** in Delhi (International Women's Day-adjacent format, consistent with the broader trend of "Women's Day Meetups" mentioned as a next-gen event format in India).
- **Trajectory**: Delhi's WordCamp lineage — first-ever (2009) → recurring local camp (2017, 2024, 2025) — plus India's WordPress community's overall growth (hundreds of meetups, WordCamp Asia 2026 in Mumbai, WordCamp India named the **4th flagship WordCamp** for **2027**) positions Delhi as a historically anchor city even as the flagship spotlight currently sits elsewhere.

Sources: [Global Voices – India: WordCamp (2009)](https://globalvoices.org/2009/02/20/india-wordcamp/), [About – WordCamp Delhi 2017](https://delhi.wordcamp.org/2017/about/), [Welcome to New Delhi – WordCamp Delhi 2017](https://delhi.wordcamp.org/2017/welcome-to-new-delhi/), [WordCamp Delhi 2024](https://delhi.wordcamp.org/2024/), [WordCamp Delhi 2024: Contributor Day schedule and details](https://make.wordpress.org/community/2024/11/25/wordcamp-delhi-2024-contributor-day-schedule-and-details/), [Wrapping up WordCamp Delhi 2024: By the numbers](https://delhi.wordcamp.org/2024/wrapping-up-wordcamp-delhi-2024-by-the-numbers-photo-album-videos/), [WordCamp Delhi 2024 – Bluehost Blog](https://www.bluehost.com/in/blog/events/wordcamp-delhi/), [Past WordCamps – WordCamp Central](https://central.wordcamp.org/schedule/past-wordcamps/)

## 12. WordCamp Website Anatomy — Full Page Template (from WordCamp Asia 2025 & 2026)

WordCamp Asia is the flagship event, so its sites (`asia.wordcamp.org/2025/`, `asia.wordcamp.org/2026/`) represent the most complete, "maximal" version of a WordCamp site — effectively a superset checklist of every page a WordCamp *can* have. A small local camp wouldn't need all of these, but this is the reference sitemap.

### Navigation structure (grouped by menu section)

**Details / Home**
- Home — hero with dates/venue, attendee count, keynote highlights, countdown

**News**
- `/updates/` — blog-style announcements, recaps, "by the numbers" wrap-ups, press coverage

**Event**
- `/about-us/` — mission, history, why-this-city rationale
- `/about-the-venue/` (Venue & Location) — hall maps, getting there
- `/live-streaming/` and `/live-captioning/` — remote-access accommodations
- `/shuttle-service-guide/` — transit between hotels/venue
- `/official-hotels/` and `/hotel-choices/` — accommodation options, sometimes with negotiated rates
- `/visa/` — visa guidance, invitation-letter requests, embassy pointers
- `/accessibility-at-wordcamp-[city]-[year]/` — physical access, mobility support, wayfinding, staff support (see detail below)
- `/things-to-do-in-[city]/` (Explore City) and `/food-walk/` — local tourism/culture add-ons
- `/side-events/` — community meetups/parties happening around the main event
- `/faq/` — logistics Q&A (see detail below)
- `/contact/` — organizer contact form/email
- `/need-to-know/` (seen on 2025 site) — practical need-to-know logistics digest
- `/lunch-menu/` and `/wapuu/` (2025) — meal info and the event's custom WordPress "Wapuu" mascot artwork
- `/press-kit/` — logos, boilerplate, media assets for journalists

**Program**
- `/schedule/` — full multi-track timetable
- `/contributor-day/` — dedicated contribution-day page, teams, RSVP info, "no experience necessary" framing
- `/youthcamp-is-back-at-wordcamp-...` (YouthCamp) — a youth/student-focused track or side-program
- `/solutions-spotlight/` (2025) — sponsor-led product/solution demo sessions distinct from the main talk tracks
- `/the-after-party/` — post-conference social event page

**Sponsors**
- `/sponsors/` — sponsor logos grouped by tier (see tier detail below)
- `/micro-sponsors/` (2025) — a lower-cost sponsorship tier for very small companies/individuals
- Sponsor Manual (2025) — a linked resource/PDF for sponsors on logistics/deliverables

**People**
- `/organisers/` (or `/organizers/`) — full team by function (see detail below)
- `/speakers/` — speaker bios/photos
- `/emcees/` — hosts who run the stage between talks
- `/media-partners/` — press/blog partners cross-promoting the event
- `/volunteers/` — volunteer team acknowledgment/recruitment
- `/attendees/` — sometimes a stats/photo page celebrating who showed up; sometimes a recruitment page ("who should attend")
- `/community-spotlight/` (2025) — features on local community members/contributions

**Policies & Support (footer)**
- `/code-of-conduct/` — see detail below
- `/contact/`
- Cookie Policy — usually links out to the shared `wordpress.org/about/privacy/cookies/` page rather than a local one

**Future Events**
- A footer pointer to the *next* year's WordCamp Asia site (continuity link, e.g. 2026 site links to 2027 in Penang, Malaysia)

### Page content deep-dives

**About Us** — states the flagship's three-part mission: (1) broaden beyond "just WordPress" to a wider web/tech-professional audience, (2) strengthen community-building models across the region, (3) aim for record scale while still prioritizing meaningful engagement over headcount. Explains "why this city" using local community stats (e.g., Mumbai chosen partly because India has 20+ active WordPress groups and organized 15+ major WordPress events in 2025).

**Sponsors** — tiers are named using **WordPress user-role terminology** as a cute naming convention, from highest to lowest: **Super Admin → Admin → Editor → Author → Contributor → Subscriber → Viewer**, plus an **Add-On Sponsors** category for supplementary/in-kind sponsors (e.g., a specific tool/service sponsor). No public pricing is shown on the page itself (pricing lives in a private sponsorship prospectus/manual).

**Organizers** — structured as: 1-2 Global Leads + Local Lead(s), then named leads for each functional team: **Attendee Experience, A/V, Communications, Contributor Day, Design, Finance, Operations, Program, Sponsors, Technology, Venue, Volunteers.** This is essentially the canonical "org chart" template for any WordCamp team, scaled up or down by event size.

**FAQ** — recurring question categories across both years: dates/venue, registration cost & payment methods (UPI/cards common in India), dress code, badge pickup process, livestream availability, Contributor Day RSVP requirements, meal/dietary accommodations (vegetarian/vegan/Jain/halal/kosher — notably India-specific dietary inclusivity), after-party timing, transport/parking, visa guidance, venue accessibility, lost-and-found.

**Code of Conduct** — consistent structure across WordCamps generally: (1) inclusion statement covering gender/orientation/disability/ethnicity/religion/age, (2) explicit list of unacceptable behaviors (harassment, stalking, unwelcome contact, disruptive conduct), (3) reporting process (find an organizer on-site, registration-desk point of contact, email to a shared `report@wordcamp.org` address, discreet handling at social events), (4) scope covering all participant types at all venues/affiliated social events, (5) enforcement — organizers can expel violators without warning or refund.

**Accessibility** — venue-specific but follows a pattern: step-free/wide-path entry, elevators, wheelchairs/mobility aids available on request, accessible restrooms and seating, clear wayfinding signage, help-desk staff support, and an honest caveat about limits (e.g., specialized powered mobility devices may not be available on-site — bring your own if needed).

### Why this matters for a WordCamp Delhi site

This gives a concrete, near-exhaustive **information architecture checklist** to plan a WordCamp Delhi website against — far more complete than the general organizer-handbook guidance in §3–§6. Even a modest local camp can scope its site as "which subset of this full sitemap do we need," rather than inventing page types from scratch: Home, About, Schedule, Speakers, Sponsors (with WP-role-named tiers), Organizers (by function team), Volunteers, Attendees, Code of Conduct, FAQ, Venue/Accessibility, Contact — with Contributor Day, Visa, Hotels, Side Events, and After Party as the "add when the event is large/international enough to need them" tier.

Sources: [WordCamp Asia 2026](https://asia.wordcamp.org/2026/), [WordCamp Asia 2025](https://asia.wordcamp.org/2025/), [About Us – WordCamp Asia 2026](https://asia.wordcamp.org/2026/about-us/), [Sponsors – WordCamp Asia 2026](https://asia.wordcamp.org/2026/sponsors/), [Accessibility – WordCamp Asia 2026](https://asia.wordcamp.org/2026/accessibility-at-wordcamp-asia-2026/), [FAQ – WordCamp Asia 2026](https://asia.wordcamp.org/2026/faq/), [Code of Conduct – WordCamp Asia 2026](https://asia.wordcamp.org/2026/code-of-conduct/), [Organizers – WordCamp Asia 2025](https://asia.wordcamp.org/2025/organizers/)

## 13. Key Takeaways Relevant to Building a "WordCamp Delhi" Project/Site

If this repository (`wordcamp-delhi-2206`) is intended to model, plan, or build tooling/content for a WordCamp Delhi event, the research above suggests these are the load-bearing concepts to design around:
1. **Multi-track schedule data model** (talks, speakers, tracks, rooms, time slots).
2. **Ticketing** with tiered types (attendee/speaker/volunteer/sponsor) and coupon support — CampTix is the reference implementation.
3. **Sponsorship tiers** with clear, transparent benefit levels and no pay-for-speaking-slots rule.
4. **Code of Conduct** page/policy published early and visibly.
5. **Volunteer/organizer team structure** mirroring Central's roles (lead organizer, sponsorship, program, volunteers, web, marketing, A/V).
6. **Budget transparency** — lean, sponsor-subsidized, reviewed against Central norms.
7. **Historical continuity** — Delhi holds symbolic significance as the birthplace of WordCamp India (2009), which is a strong narrative/branding angle for any Delhi-focused event site.
8. **Regional pull** — 2024's edition drew speakers from Nepal, Bangladesh, and Afghanistan; Delhi WordCamp content/marketing can credibly position itself as a South Asian hub, not purely a Delhi-local event.
9. **Cultural tone** — branding, copy, and swag should lean into Delhi's actual self-image: generous hospitality ("dil se"), food-centric networking breaks, and energetic/direct "josh" rather than a generic corporate-conference tone.
10. **Existing volunteer pool** — Delhi/NCR's dense pre-existing tech-meetup scene (GDG, PyDelhi, Women Who Code, TiE Delhi-NCR, co-working hubs) is the natural recruiting ground for organizers, speakers, and sponsors.
11. **Full site-page checklist** (from §12) — scope any WordCamp Delhi website against the WordCamp Asia reference sitemap: Home, About, News/Updates, Schedule, Speakers, Emcees, Sponsors (WP-role-named tiers + micro-sponsor tier for small/local businesses), Organizers (by function team), Volunteers, Attendees, Media Partners, Code of Conduct, FAQ, Contact, Venue & Accessibility, Press Kit — plus Contributor Day, Visa, Hotels, Side Events, and After Party once the event is large enough to warrant them.

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
- [Welcome to New Delhi – WordCamp Delhi 2017](https://delhi.wordcamp.org/2017/welcome-to-new-delhi/)
- [WordCamp Delhi 2024](https://delhi.wordcamp.org/2024/)
- [WordCamp Delhi 2024: Contributor Day schedule and details](https://make.wordpress.org/community/2024/11/25/wordcamp-delhi-2024-contributor-day-schedule-and-details/)
- [Wrapping up WordCamp Delhi 2024: By the numbers, Photo Album & Videos](https://delhi.wordcamp.org/2024/wrapping-up-wordcamp-delhi-2024-by-the-numbers-photo-album-videos/)
- [WordCamp Delhi 2024 – Bluehost Blog](https://www.bluehost.com/in/blog/events/wordcamp-delhi/)
- [Past WordCamps and WordPress Events – WordCamp Central](https://central.wordcamp.org/schedule/past-wordcamps/)
- [Culture of Delhi – Tradition, Lifestyle, Language](https://www.travelogyindia.com/delhi/culture-of-delhi.html)
- [20 Famous Foods of Delhi That Define the City's Soul](https://www.restaurantindia.in/article/20-famous-foods-of-delhi-that-define-the-city-s-soul.14913)
- ["Dilli ka dil comes calling" – The Tribune](https://www.tribuneindia.com/news/archive/lifestyle/dilli-ka-dil-comes-calling-498700)
- [Delicious Delhi: nostalgia, consumption and the old city](https://www.tandfonline.com/doi/full/10.1080/1070289X.2015.1034130)
- [The Role of Tech Communities in Delhi, India](https://www.nucamp.co/blog/coding-bootcamp-india-ind-the-role-of-tech-communities-in-delhi-india-how-to-get-involved)
- [What Makes Delhi Attractive for Tech Talent?](https://www.nucamp.co/blog/coding-bootcamp-india-ind-what-makes-delhi-india-attractive-for-tech-talent)
- [WordCamp Asia 2026](https://asia.wordcamp.org/2026/)
- [WordCamp Asia 2025](https://asia.wordcamp.org/2025/)
- [Sponsors – WordCamp Asia 2026](https://asia.wordcamp.org/2026/sponsors/)
- [Accessibility – WordCamp Asia 2026](https://asia.wordcamp.org/2026/accessibility-at-wordcamp-asia-2026/)
- [FAQ – WordCamp Asia 2026](https://asia.wordcamp.org/2026/faq/)
- [Code of Conduct – WordCamp Asia 2026](https://asia.wordcamp.org/2026/code-of-conduct/)
- [Organizers – WordCamp Asia 2025](https://asia.wordcamp.org/2025/organizers/)
