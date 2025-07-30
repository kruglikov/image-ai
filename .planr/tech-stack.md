# AI Image Generation App Tech Stack & Deployment Summary

This document summarizes the tech stack and deployment setup for the AI Image Generation App, a minimal web app for casual users to generate images from text prompts using the fal.ai API's Flux-schnell model. Target launch: March 2025.

## Tech Stack

| Category         | Technology / Tool         | Purpose / Notes                                                                                 |
|------------------|--------------------------|-------------------------------------------------------------------------------------------------|
| Framework        | SvelteKit (TypeScript)   | Core framework for frontend and backend, use TypeScript for type safety.                        |
| Frontend         | Svelte Components        | Build UI with reactive components: text input, Send button, image display.                      |
| Styling          | Tailwind CSS             | Utility-first CSS for fast, consistent styling.                                                 |
| State Management | Svelte Stores            | Manage prompt, image URL, loading state, and errors with built-in stores.                       |
| API Integration  | SvelteKit API Routes     | Secure server-side calls to fal.ai API, handle responses and errors.                            |
| Env Variables    | .env File                | Store `FAL_AI_API_KEY` securely, access in API routes.                                          |
| Deployments      | Vercel                   | Free hosting with serverless support, deploy via Git repository.                                |
| Testing          | Vitest (Optional)        | Unit tests for API calls, error handling, and key features if needed.                           |

### Notes
- No database required; app is minimal and stateless.
- Ensure browser compatibility (Chrome, Firefox, Safari) per US-009.
- Handle fal.ai API errors (rate limits, budget) per user stories US-003, US-004, US-008.

## Why Vercel
- **Free tier:** 1 GB serverless execution
- Optimized for SvelteKit with `@sveltejs/adapter-vercel`
- Fast CDN, easy setup, secure env vars

## Setup Instructions

### 1. Install Adapters
```bash
npm install -D @sveltejs/adapter-vercel
```

### 2. Prepare Git
Update `svelte.config.js`:
```javascript
import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter()
  }
};
```

### 3. Push code to a GitHub/GitLab/Bitbucket repository

### 4. Deploy
1. Sign up at [vercel.com](https://vercel.com)
2. Import repository
3. Add `FAL_AI_API_KEY` in Vercel dashboard under Environment Variables
4. Deploy; app will be live at `your-project.vercel.app`

### 5. Verify
Test image generation, error messages, and loading states in browsers.

## Limits
- 1 GB serverless execution covers API calls ($0.003/image)
- Monitor usage; daily budget error (US-$0.04) helps avoid overages

## Development Tips

### Add Skeleton UI
```bash
npm i @skeletonlabs/skeleton
```

### Use Skeleton UI Components
	Add Skeleton UI: Run npm i @skeletonlabs/skeleton in the project directory to install.
	Use Skeleton UI Components: Implement UI elements with:
	<Input> for the text input.
	<Button> for the Send button.
	<Alert> for error messages.
	<Spinner> for loading indicators.