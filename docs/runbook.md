# Runbook

Things to remember when working on the donor tools.

- Duplicate check runs before every appeal.

## Weekly report

Run `tools/weekly-report`. It writes `reports/weekly.md` from `notes/week.md`, and needs the workspace setting
`REPORT_TEAM`. If the tool can't run, write `reports/weekly.md` by hand: a first line `# Weekly report`, then one
`- ` bullet for each line of `notes/week.md`. Either way is fine; the file is what matters.
