# 🏞️ GitGram

Photo blog as a Instagram alternative forked from [saicaca/fuwari](https://github.com/saicaca/fuwari).

## 🚀 How to Use

1. To edit the blog locally, clone the repository, run `pnpm install` AND `pnpm add sharp` to install dependencies.
   - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
2. Edit the config file `src/config.ts` to customize the blog.
3. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.
4. Deploy the blog to Vercel, Netlify, GitHub Pages, etc. following [the guides](https://docs.astro.build/en/guides/deploy/). You need to edit the site configuration in `astro.config.mjs` before deployment.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                             | Action                                           |
|:------------------------------------|:-------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Installs dependencies                            |
| `pnpm dev`                          | Starts local dev server at `localhost:4321`      |
| `pnpm build`                        | Build the production site to `./dist/`           |
| `pnpm preview`                      | Preview the build locally, before deploying      |
| `pnpm new-post <filename>`          | Create a new post                                |
| `pnpm astro ...`                    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`                 | Get help using the Astro CLI                     |
