# Nikos Chelmis - interactive CV

An original platform-style career adventure with a photo character, six worlds,
IT-office Easter eggs, gym details, and an accessible conventional CV.
Built with React, TypeScript, Vite, CSS, and original vector/CSS scenery.
No backend, analytics, external fonts, paid services, or game assets are required.

## Run locally

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Open the URL Vite prints. To check types and build:

```sh
npm run build
npm run preview
```

## Publish on GitHub Pages

Repository: [helnik/CV](https://github.com/helnik/CV).

1. Open [Settings > Pages](https://github.com/helnik/CV/settings/pages).
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Open [Actions > Deploy CV to GitHub Pages](https://github.com/helnik/CV/actions/workflows/deploy.yml).
   Click **Run workflow**, select `main`, and click **Run workflow** again.
4. Wait for both the `build` and `deploy` jobs to succeed.
5. Visit **https://helnik.github.io/CV/**.

The included [deployment workflow](.github/workflows/deploy.yml) automatically
publishes subsequent pushes to `main`. If the first deployment failed because
Pages was not enabled yet, run the workflow again after completing step 2.

The relative Vite base supports both a project URL (`username.github.io/repository/`)
and a root URL or custom domain. No Azure service is needed.

## Content and privacy

- Edit [src/data.ts](src/data.ts) to update roles, education, credentials, and links.
- The main CV takes precedence over the profile PDF for conflicting details.
- Certification screenshot dates take precedence over CV certification dates.
- Credentials show issue dates only, with no expiry dates or status labels.
  FinOps Practitioner is intentionally excluded.
- Every credential links to its official certification, program, or issuer-hosted badge page.
  These are program information links, not personal verification records.
- Personal credential identifiers and verification URLs are not published.
- Official badge artwork is stored in [public/badges](public/badges), sourced from
  Microsoft Learn, ICAgile, Scrum.org, and Microsoft MCAPS Academy's Credly page.
  Microsoft Expert, Associate, and Fundamentals artwork retains the original tier
  labels and stars. MCT uses a neutral icon because its current official badge
  download is available only through the authenticated trainer portal.
- The People category includes the four Microsoft MCAPS Academy Customer Facing
  Skills Initiative badges, with official issuer-owned Credly pages and artwork.
- Only non-conflicting supplementary details from the profile PDF are included.
- The photo used by the app is [public/portrait.jpg](public/portrait.jpg).
- Original source documents and the certification screenshot are excluded by `.gitignore`.
  The published site deliberately includes the professional photo, name, location, email,
  LinkedIn, GitHub, and CV details. The telephone number is not included.
- Review the content before making your repository public.

## Interaction

- Desktop: scroll through the horizontal world; left/right arrows or chapter links
  jump to checkpoints. Space or **Jump** animates the character.
- Small or short screens: the worlds stack vertically for native touch scrolling.
- **Motion off** switches to a static vertical layout. The OS reduced-motion setting
  is honored on load and when changed.
- **Quick CV** provides all content without gameplay. Its **Print / save PDF** button
  opens the browser print dialog; select "Save as PDF" to download a current copy.
- Six featured badge buttons can be collected during a visit. Collection is cosmetic
  and never blocks access. Nothing is stored or tracked.
- Dialogs support Escape, focus trapping, and focus restoration. All content is
  accessible through normal buttons and links.

Visuals and humor are original, with retro platformer and IT-office influences.
This is a personal CV, not an official Nintendo or Microsoft site.

Compact PNG company icons identify the employment history and are stored locally under
[public/logos](public/logos). Sources:
[Agile Actors](https://www.agileactors.com),
[Deloitte](https://www.deloitte.com/global/en.html), and
[National Bank of Greece](https://www.nbg.gr/en/individuals).
The PNG icons use the official site touch icons and favicons, converted to genuine
PNG where needed. Deloitte's excess outer padding is cropped for small-size legibility.
Logos, certification artwork, and trademarks belong to their respective owners.
