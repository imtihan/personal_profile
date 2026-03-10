# Logo assets manual upload

Logo binaries are intentionally **not committed** to this repository.
Use the scripts below to fetch and package them for manual PR upload.

## 1) Fetch logo assets locally

```bash
./scripts/fetch-logo-assets.sh
```

This populates:

- `assets/logos/companies/*`
- `assets/logos/tech/*`

## 2) Create a zip for manual upload

```bash
./scripts/create-logo-assets-zip.sh
```

This creates:

- `dist/logo-assets-binaries.zip`

You can upload/extract those binaries manually in your PR workflow.
