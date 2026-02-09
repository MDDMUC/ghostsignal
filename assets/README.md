# assets/

This folder is a local-only "asset vault" (raw exports, working files, inspiration images).

Policy:
- Do not commit raw assets here.
- Only assets that the website actually uses should be copied into `apps/web/public/` and committed.

Workflow:
1. Drop new source material into `assets/`.
2. Copy the specific files needed into `apps/web/public/images/...` with clean filenames.
3. Reference only the `public/` paths from code.

If you need to version large binaries, consider Git LFS or a separate storage bucket.
