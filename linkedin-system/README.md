# LinkedIn daily post automation — Shahriar Shuvo

A scheduled system that drafts one LinkedIn post + a matching image every day,
in Shahriar's own voice, and emails it ready-to-paste. **Nothing is auto-posted
to LinkedIn** (against LinkedIn's User Agreement) — the email is copy-ready and
Shahriar pastes it himself.

## How it runs
- A daily Routine (scheduled trigger) fires at **10:57 AM Asia/Dhaka** into the
  Claude session that has the Gmail + image-generation tools.
- Each run: pick a topic by weekday → web-search a fresh angle → write the post
  in the voice below → generate a matching image → email both to
  `shuvogt332@gmail.com`.

## Files
| file | purpose |
| --- | --- |
| `voice.md` | Shahriar's voice + niche profile. The single source of truth for tone. Refine it with real posts he liked. |
| `posts/` | archive of generated posts |
| `sample-post-2026-10-01.md` | first sample (MCP / AI automation topic) |
| `sample-image-2026-10-01.png` | first sample image |

## Weekday topic rotation
- Mon: MCP servers / AI automation in a real team
- Tue: Frontend — Next.js / React / React Native
- Wed: Backend / architecture — Node, NestJS, APIs, queues, DBs
- Thu: DevOps / shipping — AWS, Docker, Kubernetes, CI/CD, monitoring
- Fri: Engineering leadership / lessons / career
- Sat: Internal tools that remove repetitive work (Marketing OS style)
- Sun: Bangladesh tech community / learning / reflections

## Hard rules
- Never fabricate metrics, clients, or outcomes. Unknown numbers become
  `{{your number}}` with a flag.
- One specific true thing per post. No buzzword slop, no hashtag walls.
- Mostly clean professional English; occasional Bangla/Banglish when the topic
  is personal or community-specific.

## To adjust
Change the schedule time, pause the Routine, pass a specific topic/blog link for
the day, or paste 2–3 real posts to sharpen `voice.md`.
