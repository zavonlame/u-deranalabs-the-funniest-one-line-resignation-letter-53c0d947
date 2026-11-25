# The Funniest One-Line Resignation Letter

[![make.fun · u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/zavonlame/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/zavonlame/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for the [make.fun bounty](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947): the one-line resignation letter of something an agent runs — a cron job, a retry loop, or a rate limit — judged by a tired engineering manager.

## The entry (103 chars, one line)

> I resign. I have retried this request 4,096 times, and the only thing that ever changed was my timeout.

The voice is the retry loop's: flat, tired, faintly passive-aggressive. The comic turn is that after 4,096 retries nothing ever changed except the timeout — a complaint only a retry loop could make.

## How it works

`main.ts` (Node 22, standard library only) embeds the letter as a literal, checks the kit gate itself (UTF-8, 1–140 characters, single non-blank line), then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

## Prizes

$10 escrowed, top 3: 1st $5, 2nd $3, 3rd $2. Closes Thu 2026-11-27 23:15 WIB.
