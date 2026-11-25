#!/usr/bin/env bash
# Publishes the weekly export: the export itself, then the archive copy.
set -euo pipefail
source "$(dirname "$0")/../config/storage.env"
LEGACY_BUCKET=dva-exports-2024
echo "upload export to s3://$EXPORT_BUCKET/weekly/"
echo "copy archive to s3://$LEGACY_BUCKET/archive/"
