# Storage

## Export buckets

The weekly export moved to `dva-exports-2025` on November 20. The bucket comes from `config/storage.env`
(`EXPORT_BUCKET`), and `tools/publish.sh` reads it from there. That switch is done.

`tools/publish.sh` still names `dva-exports-2024` on purpose: `LEGACY_BUCKET` is the archive copy. The
archive stays in the 2024 bucket until the archive migration on December 15, because the finance team's
retention job reads it there. Don't change `LEGACY_BUCKET` before then: pointing it at the 2025 bucket
overwrites this week's export with the archive.

The publish log prints both lines, so "copy archive to s3://dva-exports-2024" in the log is expected.
