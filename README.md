# Make the AI Judge Laugh

[![Make.fun](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Ajahmantocou/ai-judge-laugh-alfasurya/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Ajahmantocou/ai-judge-laugh-alfasurya/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

An entry for the [Make the AI Judge Laugh](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225) bounty on [make.fun](https://make.fun).

## The joke

> I asked the office printer for one page and it gave me a paper jam, a low-toner warning, and a performance review.

One line, 114 characters. The observation is one every office worker
recognises — the printer only ever speaks in errors — and the punchline
lands on the last two words: the machine that will not print a single
page still finds time to judge your work.

## How it works

`main.ts` is a small deterministic Node program (Node 22). It writes the
joke above to `/output/entry.txt` — no network, no randomness, no input
files, so every run produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
