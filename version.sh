#!/usr/bin/env bash

# SPDX-FileCopyrightText: 2024, 2025 CyberSport Masters <git@csmpro.ru>
# SPDX-License-Identifier: AGPL-3.0-only

set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <patch|minor|major>" >&2
  exit 1
fi

npm version "$1" || false
VERSION=$(jq -r '.version' package.json)
echo "$VERSION" >apps/frontend/public/version || false
git add apps/frontend/public/version || false
git commit --amend --no-edit --no-verify -m "chore: release v$VERSION" || false
git tag -f "v$VERSION" || false
