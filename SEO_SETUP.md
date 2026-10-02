# Technical SEO & Google Indexing Guide

## Overview
This document outlines the technical SEO architecture, structured data schemas, crawlable URL endpoints, and Google Search Console indexing workflows for **501 Towing & Roadside** (`https://fiveoonetowing.com`).

---

## 1. Standalone Crawlable URL Slugs vs. Hash Anchors

Instead of relying on single-page hash fragments (`#services`, `#contact`, `#faq`), every core service and geographic coverage territory has a dedicated, crawlable URL endpoint. This enables Googlebot to rank distinct pages for high-intent search queries.

| Dedicated URL Slug | Target Query Intent | Priority | Changefreq |
| :--- | :--- | :--- | :--- |
| `https://fiveoonetowing.com/` | Towing Central Arkansas, 501 Towing, 24/7 Tow Truck | 1.0 | Daily |
| `https://fiveoonetowing.com/rate-calculator` | Towing Rate Calculator, Tow Cost Estimate Arkansas | 0.9 | Weekly |
| `https://fiveoonetowing.com/emergency-towing` | 24/7 Emergency Towing, Accident Recovery Benton AR | 0.9 | Weekly |
| `https://fiveoonetowing.com/roadside-assistance` | Roadside Assistance Little Rock, Jump Start, Lockout | 0.9 | Weekly |
| `https://fiveoonetowing.com/services/ev-towing` | Tesla Towing Benton AR, EV Flatbed Towing Little Rock | 0.9 | Weekly |
| `https://fiveoonetowing.com/services/commercial-towing` | Commercial Fleet Towing, Heavy Duty Towing Arkansas | 0.8 | Weekly |
| `https://fiveoonetowing.com/services` | Full Towing Services Directory Central Arkansas | 0.8 | Weekly |
| `https://fiveoonetowing.com/coverage/saline-county` | Towing Benton AR, Tow Truck Bryant AR, Saline County | 0.8 | Weekly |
| `https://fiveoonetowing.com/coverage/little-rock` | Towing Little Rock AR, North Little Rock Towing | 0.8 | Weekly |
| `https://fiveoonetowing.com/coverage` | Service Area Coverage Map & Response Times | 0.8 | Weekly |
| `https://fiveoonetowing.com/fleet` | Tow Truck Fleet, Low-Angle Hydraulic Flatbeds | 0.7 | Monthly |
| `https://fiveoonetowing.com/about` | About 501 Towing, Licensed WreckMaster Technicians | 0.7 | Monthly |
| `https://fiveoonetowing.com/faq` | Towing Insurance Reimbursement, EV Towing FAQ | 0.8 | Weekly |
| `https://fiveoonetowing.com/contact` | 501 Towing Phone Number, 600 S East St Benton AR | 0.8 | Monthly |

---

## 2. Schema.org JSON-LD Structured Data

Structured data is injected directly into `<head>` via `client/src/lib/seo.ts` to power Google Rich Results and Local Knowledge Graph panels.

### A. LocalBusiness / AutomotiveBusiness Schema
Deployed on:
- Homepage (`/`)
- About Page (`/about`)
- Contact Page (`/contact`)
- Service & Coverage Pages

**Key Attributes**:
- **Type**: `["AutomotiveBusiness", "AutoRepair", "EmergencyService"]`
- **Name**: `501 Towing & Roadside`
- **Phone**: `+1-501-451-2151`
- **Email**: `fiveoonetowing@gmail.com`
- **Coordinates**: `34.5645, -92.5877` (600 S. East Street, Benton, AR 72015)
- **Opening Hours**: `Mo-Su 00:00-23:59` (Continuous 24/7)
- **Service Areas**: Benton, Bryant, Little Rock, North Little Rock, Maumelle, Conway, Hot Springs, Saline County, Pulaski County.
- **OfferCatalog**: Flatbed Towing, EV Towing, Jump Starts, Lockouts, Tire Changes, Fuel Delivery, Accident Winching.

### B. FAQPage Schema
Deployed on:
- FAQ Page (`/faq`)
- Homepage FAQ Section (`/#faq`)

Enables accordion-style Q&A rich snippets in Google search results, dominating screen real estate for breakdown queries.

---

## 3. Google Search Console Sitemap Submission

### Step-by-Step Submission Instructions:

1. **Log in to Google Search Console**:
   Visit [search.google.com/search-console](https://search.google.com/search-console/) using your Google account associated with the business domain.

2. **Select Property**:
   Choose `https://fiveoonetowing.com` (or your domain property).

3. **Navigate to Sitemaps**:
   In the left sidebar under the **Indexing** section, click on **Sitemaps**.

4. **Submit Sitemap URL**:
   In the "Add a new sitemap" input field, enter:
   ```
   sitemap.xml
   ```
   (Full URL: `https://fiveoonetowing.com/sitemap.xml`)
   Click **Submit**.

5. **Verify Status**:
   - Status should read **Success** (green).
   - "Discovered pages" should show all 14 submitted URLs.

6. **Prompt Immediate Re-Crawling via URL Inspection**:
   To immediately index the newly added dedicated landing pages:
   - Paste `https://fiveoonetowing.com/services/ev-towing` into the top search bar.
   - Click **Request Indexing**.
   - Repeat for:
     - `https://fiveoonetowing.com/coverage/saline-county`
     - `https://fiveoonetowing.com/coverage/little-rock`
     - `https://fiveoonetowing.com/faq`
     - `https://fiveoonetowing.com/contact`

---

## 4. Rich Results & Schema Validation

To verify structured data compliance:
1. Open [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Enter `https://fiveoonetowing.com` and `https://fiveoonetowing.com/faq`.
3. Confirm that **Local Business** and **FAQ** valid items are detected with zero errors.