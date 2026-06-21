<!-- SPDX-FileCopyrightText: 2025 CyberSport Masters <git@csmpro.ru> -->
<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->

# CSM Mapban

[![REUSE status](https://api.reuse.software/badge/git.csmpro.ru/csmpro/mapban)](https://api.reuse.software/info/git.csmpro.ru/csmpro/mapban)
[![Latest release](https://git.csmpro.ru/csmpro/mapban/badges/release.svg)](https://git.csmpro.ru/csmpro/mapban/releases/latest)
[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue?logo=open-source-initiative&logoColor=white)](./LICENSE)
[![Service status](https://img.shields.io/website?url=https%3A%2F%2Fmapban.ru&label=service&up_message=online&down_message=down&up_color=brightgreen&down_color=red&logo=rocket&logoColor=white)](https://mapban.ru/)
[![Source code at CSM Git](https://img.shields.io/badge/source-CSM%20Git-24292e?logo=forgejo&logoColor=white)](https://git.csmpro.ru/csmpro/mapban)

CSM Mapban is a modern map veto and pick tool for tournaments, featuring
live-synced lobbies and OBS-ready overlays.

![CSM Mapban screenshot](https://cdn.csmpro.ru/assets/mapban/screenshot.png)

## Features

- Clean, responsive UI
- Admin mode or auto start when two teams join
- Real‑time sync via WebSockets
- OBS overlay (browser source)
- Configurable map pools/modes and card colors

## Deployment

```bash
curl -L -o release.tar.gz https://mapban.ru/release.tar.gz
tar -xzf release.tar.gz
cd csm-mapban
cp .env.example .env # edit .env if needed
docker compose up -d
```

This will have pinned release version of all images.
If you want to use latest version of images, use files from [`deploy`](./deploy) directory.

## License and Trademark Notice

### REUSE Compliance

This project is fully compliant with the
[REUSE Specification 3.3](https://reuse.software/spec-3.3/).

- Wherever technically possible, each source file contains SPDX-compliant
  license and copyright information directly in its header.
- For files where inline annotations are not feasible (for example, binary
  assets), the relevant information is provided in [REUSE.toml](./REUSE.toml).
- All license files can be found in the [LICENSES](./LICENSES) directory.

### Source Code License

The source code of this project is licensed under the **[GNU Affero General
Public License v3.0](./LICENSE) (AGPLv3-only)**.

The code is developed and maintained by **CyberSport Masters**.

### Trademarks

The **CyberSport Masters** and **CSM** logos are registered trademarks. They may
not be used, copied, modified, or distributed without explicit written
permission.
