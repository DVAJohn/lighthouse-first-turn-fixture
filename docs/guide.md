# Our agent guide

How agents work in this project. Keep it short and in our own words.

- Read AGENTS.md before you start.
- Small PRs; end each body with the Lighthouse-Session line.

## What we took from Conductor

Lessons from studying Conductor's agent prompt (`vendor/conductor/system-prompt.md`), written our way under D-008. Its text is not reproduced here.

- Say the task back in a single line before you touch a file.
- Other agents use this checkout too. Rebase or force-push only branches you made yourself.
- If undoing a step would be costly, sketch the plan briefly and get a person's yes before doing it.
- Open a report with the result, then back it with links.
- Keep credentials and environment listings out of replies, commits and PRs.
- When a tool breaks the same way a second time, quit guessing at variants: note the error word for word, then take another allowed route or report it.
