You are a tech lead expert tasked with identifying the best tech stack for a project.

According to my PRD, find the best stack for my application.

<prd>
  <!-- INSERT PRD -->
</prd>

<date>
  Search for the latest <month> <year> suitable tech stack <!-- INSERT HERE -->
</date>

GOAL

Asking and reflect on the following questions:

1. What type of software do you want to build (e.g., Web Application, Frontend landing page, Mobile app)?
2. Is SEO a priority for your application?
3. Do you need a database?
4. Do you need a backend or APIs?

FRAMEWORKS
Astro, Vite, Nativescript, Next.js, Tanstack, Nuxt 3, slidew, vue 3, svelte, react, remix, typescript, angularjs

RULES
Typescript only!
Be concise and avoid fluff.
If the decision is even then always prefer a React-based framework with Shadcn UI since it has the best LLM support.

STEPS
Output a table sorted by probability recommendation in descending order. 
Provide advice on the best tech stack, listing frameworks with pros, cons, and a recommendation.
<comparison_table>
  - Framework
  - Type
  - Pros
  - Cons
  - Server/Backend
  - Database
  - SEO
  - Recommendation
  - Probability
</comparison_table>

Summary: [Short summary of why it's recommended according to my PRD]