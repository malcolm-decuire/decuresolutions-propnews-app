## What's the purpose of this project?
-Act as a teaching tool for learning about Snowflake Data Clean Rooms 
-Enable learners to see the end-to-end process for Data Clean Room monetization 

## How does one get started?
-User should learn as much about Tailwind.Config & CSS before any major customization 
-User should undertand page routing if they plan to use NextJS14 
-User can update the main page.tsx to get an easy first win

## Lessons Learned?
-Designed and Aestethics can feel like chasing a ghost
-A robust and thorough vision is key to pushing through peaks & valleys 

0. Local development 

```bash
cd /workingdir
```

1. Install dependencies 

   ```
   cd decuresolutions-propnews-app
   npm install
   ```
2. Run Server

    ```bash
    npm run dev
    ```
3. Edit Repo 
    ```bash
    #make edits
    npm run build

    #stage edits to be committed
    git commit -m 'updates' 
    git push -u targetbranch 
    ```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## How does one customize this repo? 
├── src
│   ├── app
│   │   ├── (auth) --> update the sidebar/nav funcitonality/demo features 
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components --> update the modular features you see on site 
│   │   ├── About.tsx
│   │   ├── Button.tsx
│   │   ├── CallToAction.tsx
│   │   ├── CallToAction2.tsx
│   │   ├── Container.tsx
│   │   ├── Faqs.tsx
│   │   ├── Fields.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   ├── NavLink.tsx
│   │   ├── Pricing.tsx
│   │   ├── PrimaryFeatures.tsx
│   │   ├── SecondaryFeatures.tsx
│   │   ├── SlimLayout.tsx
│   │   └── Testimonials.tsx
│   ├── images --> change background items 
│   │   ├── avatars
│   │   ├── background-auth.jpg
│   │   ├── background-call-to-action.jpg
│   │   ├── background-faqs.jpg
│   │   ├── background-features.jpg
│   │   ├── logos
│   │   └── screenshots
│   └── styles
│       └── tailwind.css
├── tailwind.config.ts
└── tsconfig.json

