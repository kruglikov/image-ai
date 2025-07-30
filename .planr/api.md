# API Design: AI Image Generation App

The following API design outlines the single endpoint required for the AI Image Generation App, a minimal web-based application that enables casual users to generate images from text prompts using the fal.ai API's Flux-schnell model. The design aligns with the Product Requirements Document (PRD) provided, targeting a launch date of March 27, 2025. Below is the detailed schema, including endpoint definition, request/response formats, mapping to user stories, and role-based access considerations.

Endpoint: API-01

**ID:** API-01  
**Title:** Generate Image  
**Method:** POST  
**Path:** `/api/generate-image`

### Description
Allows users to submit a text prompt to generate an image via the fal.ai API's Flux-schnell model. The endpoint handles the request server-side, returning the generated image URL or an error message based on validation and API response.

### Required Roles
- **Guest:** Accessible to all users without authentication, as specified in the PRD for public access with no user identification required.

### Request Body

#### Schema
| Name | Type | Required | Description |
|------|------|----------|-------------|
| prompt | string | Yes | The text prompt describing the desired image (e.g., "cat in a hat"). |

### Responses

#### 200 - Success
**Description:** Image generated successfully, returns the URL of the generated image.

**Content:**
```json
{
  "image_url": "string"
}
```

#### 400 - Bad Request
**Description:** Invalid or missing prompt provided.

**Content:**
```json
{
  "error": "Please enter a valid prompt."
}

```

#### 429 - Too Many Requests
**Description:** API rate limit exceeded, as returned by fal.ai or enforced locally.

**Content:**
```json
{
  "error": "Rate limit reached, please try again later."
}
```

#### 402 - Payment Required
**Description:** Daily budget for API calls exceeded, based on fal.ai response or internal tracking.

**Content:**
```json
{
  "error": "Daily budget exceeded, service unavailable."
}
```

#### 500 - Internal Server Error
**Description:** Internal server error or unexpected fal.ai API failure (e.g., network issues).

**Content:**
```json
{
  "error": "An error occurred, please try again."
}
```

### Mapping to SRS Requirements

| Requirement | Description |
|-------------|-------------|
| US-001 | Generate Image from Text Prompt - Facilitates sending a prompt and receiving an image URL for display. |
| US-002 | Handle Empty Prompt - Returns 400 status with an error message if the prompt is empty or invalid. |
| US-003 | Handle Rate Limit Exceeded - Returns 429 status with a specific message when the fal.ai rate limit is hit. |
| US-004 | Handle Daily Budget Exceeded - Returns 402 status when the daily budget is exceeded, per fal.ai or internal limits. |
| US-008 | Handle API Errors - Returns 500 status for unexpected errors during API interaction. |

- Completeness: The single endpoint addresses all backend-related requirements from the PRD, specifically US-001, US-002, US-003, US-004, and US-008. Other user stories (e.g., US-005, US-006, US-007, US-009, US-010) are frontend responsibilities, such as displaying the image or managing UI state, and do not require additional endpoints.
- Consistency: The design uses a uniform JSON response structure with an "image_url" field for success and an "error" field for failures. Status codes align with HTTP standards (e.g., 400 for client errors, 429 for rate limits, 500 for server errors), ensuring predictable behavior.