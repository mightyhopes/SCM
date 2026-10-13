# Project Setup & Homepage Implementation --- PT. Sinlie Cahaya Matahari

## 1. Project Overview

Build the initial frontend foundation and homepage for **PT. Sinlie
Cahaya Matahari (SCM)**, an Indonesian sock manufacturing company.

The website is a corporate company profile intended to communicate
manufacturing capabilities, product categories, production facilities,
quality assurance, and business contact information to prospective B2B
customers.

The visual direction is **Modern Industrial Corporate**: professional,
clean, confident, and visually distinctive without excessive animation,
unnecessary decoration, or overly generic corporate styling.

The final result should feel like a credible manufacturing company
website, not an e-commerce storefront or a technology startup landing
page.

## 2. Technology Stack

Use the following stack:

-   Next.js with App Router.
-   TypeScript with TSX for React components.
-   Tailwind CSS for styling.
-   Lucide React for icons.
-   React Server Components by default.
-   Client Components only when interactivity requires them.

Before making changes, inspect the existing project structure,
`package.json`, installed dependencies, and current configuration.

If the project is empty, initialize it using the stack above. If a
project already exists, preserve its working configuration and adapt it
rather than unnecessarily recreating everything.

Use the package manager already present in the project, based on the
lockfile. Do not switch package managers without a reason.

Do not install additional libraries unless they provide a clear benefit.

## 3. Brand Identity and Color System

Use the following design tokens consistently across the entire
application.

### Brand Colors

  -----------------------------------------------------------------------
  Token                   HEX                     Intended Usage
  ----------------------- ----------------------- -----------------------
  `primary`               `#08615D`               Primary buttons, brand
                                                  elements, selected
                                                  navigation states

  `primary-hover`         `#064E4B`               Hover state for primary
                                                  buttons

  `primary-dark`          `#073F3C`               Footer and dark brand
                                                  sections

  `secondary`             `#4D9A99`               Secondary accents,
                                                  icons, decorative
                                                  elements

  `secondary-light`       `#D6E8E5`               Soft teal backgrounds

  `accent`                `#FFCC00`               Highlights, decorative
                                                  lines, selected visual
                                                  accents

  `accent-hover`          `#E6B800`               Hover state for yellow
                                                  elements

  `background`            `#F7F8F5`               Main page background

  `surface`               `#FFFFFF`               Cards, navigation, form
                                                  surfaces

  `surface-muted`         `#E8F1EF`               Secondary sections and
                                                  muted surfaces

  `text-primary`          `#202B29`               Main headings and body
                                                  text

  `text-secondary`        `#5B6965`               Supporting text

  `text-inverse`          `#FFFFFF`               Text on dark
                                                  backgrounds

  `border`                `#DCE4E0`               Borders, dividers, card
                                                  outlines
  -----------------------------------------------------------------------

### Color Usage Rules

-   Keep white and off-white as the dominant backgrounds.
-   Use deep teal as the main brand color.
-   Use yellow sparingly to create visual emphasis.
-   Do not use yellow as the dominant background color.
-   Avoid introducing unrelated bright colors.
-   Ensure readable text contrast and accessible focus states.
-   Use dark teal rather than soft teal for small text on light
    backgrounds.
-   Maintain consistent colors across buttons, links, navigation, cards,
    and footer.

Create centralized color tokens using CSS custom properties in
`globals.css` and integrate them with Tailwind using the configuration
approach appropriate for the installed Tailwind version.

Do not scatter arbitrary HEX values throughout components when a
semantic token already exists.

## 4. Typography and Visual Language

Use a clean sans-serif typeface suitable for a professional industrial
company website.

Recommended hierarchy:

-   Hero heading: large, bold, approximately 52--64px on desktop.
-   Section headings: approximately 32--44px on desktop.
-   Body text: approximately 16--18px.
-   Supporting labels: approximately 12--14px.

Use fluid sizing where appropriate so the typography scales naturally
across screen sizes.

Visual principles:

-   Generous whitespace.
-   Strong typography hierarchy.
-   Consistent spacing and alignment.
-   Clean grid layouts.
-   Subtle borders and restrained corner radii.
-   High-quality photography as the main visual element.
-   Asymmetric layouts only where they improve visual storytelling.
-   Minimal shadows.
-   Subtle transitions for buttons, links, and cards.

Avoid excessive glassmorphism, neon colors, giant gradient backgrounds,
unnecessary floating elements, and excessive scroll-triggered
animations.

## 5. Homepage Structure

Build the homepage in the following order.

### A. Navbar

Create a responsive navigation bar containing:

-   SCM logo.
-   About.
-   Products.
-   Capabilities.
-   Contact.
-   A prominent "Request a Quote" or "Contact Us" button.

Use the actual company logo if the asset is available in the project.
Preserve the logo's proportions and original colors.

On mobile, implement an accessible collapsible navigation menu.

The navbar should be visually light and unobtrusive, with a clear CTA. A
sticky navbar is optional if it improves navigation.

### B. Hero Section

Create a strong introductory section with a two-column desktop layout.

Left column:

-   Small eyebrow label: "SOCK MANUFACTURING · INDONESIA".
-   Main headline: "Precision in Every Stitch."
-   Supporting text introducing SCM as a sock manufacturing partner.
-   Primary CTA: "Explore Our Products".
-   Secondary CTA: "Our Capabilities".

Right column:

-   A prominent photograph of the factory, production machines, or
    finished socks.

The hero should communicate manufacturing expertise rather than retail
shopping.

Use a light background, dark teal typography, and restrained yellow
accents.

On mobile, stack the text and image vertically, preserving a strong
heading hierarchy.

### C. Company at a Glance

Create a compact company statistics section.

Potential metrics include:

-   Year the business began.
-   Current monthly production capacity.
-   Manufacturing experience.

**Important:** Company data must be verified before being presented as
fact.

The existing company profile contains references to a business history
beginning in 2018, legal incorporation in March 2023, and production
capacity of approximately 100,000 dozen per month. These figures still
require confirmation.

Do not present conflicting or unverified figures as definitive. Until
verified, use editable placeholder data or omit the corresponding
metric.

### D. About Us

Create an editorial-style section introducing PT. Sinlie Cahaya
Matahari.

Use a two-column layout with company information on one side and an
actual factory photograph on the other.

Content should cover:

-   Company background.
-   Manufacturing experience.
-   Business focus.
-   Vision and mission, if verified.

Do not invent company history, achievements, certifications, clients, or
export markets.

Use concise introductory copy rather than lengthy paragraphs.

### E. Product Categories

Create a responsive product category grid.

Potential categories based on the existing company profile:

-   Baby Socks.
-   Kids Socks.
-   Ladies Socks.
-   Men's Socks.
-   Other categories, subject to confirmation.

Each card should include:

-   Product image.
-   Category name.
-   Short description.
-   Optional link to a future product detail page.

Prioritize product photography and consistent image proportions.

Do not invent material compositions or product specifications.

If suitable product images are unavailable, use clearly identifiable
placeholders rather than pretending stock photography represents SCM's
actual products.

### F. Manufacturing Capabilities

Create a visually strong section showcasing the company's manufacturing
capabilities.

Potential content:

-   Sock knitting machinery.
-   Production facilities.
-   Custom design capabilities.
-   OEM or private-label services, if confirmed.
-   Production capacity, if verified.
-   Packaging and finishing capabilities, if confirmed.

Use a combination of photographs, concise descriptions, and structured
information.

Do not claim that every manufacturing process is performed in-house
unless verified.

### G. Production Process

Create a horizontal process layout on desktop and a vertical timeline on
mobile.

Potential stages:

1.  Material preparation.
2.  Knitting.
3.  Finishing.
4.  Quality inspection.
5.  Packaging and delivery.

Treat these as proposed content until the actual production workflow has
been confirmed.

Use subtle connectors and restrained iconography. Avoid elaborate
animations.

### H. Quality Assurance

Create a dedicated section describing how product quality is maintained.

Potential topics:

-   Product inspection.
-   Stitching and knitting consistency.
-   Size and specification checks.
-   Final product inspection.

These must be presented as actual company practices only after
confirmation.

Do not fabricate ISO certifications, audit results, quality percentages,
or other compliance claims.

### I. Factory Gallery

Create a responsive gallery with a balanced mixture of landscape and
portrait images.

Use a slightly asymmetric grid rather than a generic grid of identical
cards.

Potential image subjects:

-   Factory exterior.
-   Knitting machines.
-   Production floor.
-   Operators at work.
-   Finished products.
-   Packaging and inventory.

Prioritize the real assets provided by the client.

Do not use generic external stock images as if they depict SCM's
factory. If image assets are unavailable, create a maintainable
placeholder structure and document where the actual assets should be
placed.

### J. Business Inquiry / Contact

Create a prominent contact section with a dark teal background and clear
contrast.

Include:

-   A concise business inquiry headline.
-   Supporting text.
-   Primary CTA: "Request a Quote".
-   Contact information placeholders.
-   Optional inquiry form.

Any contact details should come from verified company information.

If a form is implemented, include accessible labels, basic validation,
and clear feedback. Do not imply that form submissions are being
delivered to the company unless a working backend or submission endpoint
exists.

### K. Footer

Include:

-   Company logo and name.
-   Short company description.
-   Navigation links.
-   Verified contact information.
-   Company address, if approved for publication.
-   Copyright notice.

Use deep teal with white text and restrained yellow accents.

## 6. Component Architecture

Organize the project into reusable components.

Suggested structure:

``` text
app/
  layout.tsx
  page.tsx
  globals.css
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      CompanyStats.tsx
      AboutSection.tsx
      ProductCategories.tsx
      ManufacturingSection.tsx
      ProductionProcess.tsx
      QualitySection.tsx
      FactoryGallery.tsx
      ContactSection.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      Container.tsx
```

This structure is a starting point, not a requirement to create
unnecessary abstractions. Adapt it to the existing repository where
appropriate.

Keep data separate from presentation when it improves maintainability,
particularly for product categories, statistics, and gallery items.

Use strict TypeScript types. Avoid `any` unless there is a clear
technical reason.

## 7. Responsive Design

The page must work well on:

-   Mobile phones.
-   Tablets.
-   Desktop screens.
-   Wide desktop screens.

Requirements:

-   No horizontal overflow.
-   Responsive navigation.
-   Proper image cropping.
-   Fluid typography.
-   Responsive grids.
-   Adequate touch target sizes.
-   Consistent spacing across breakpoints.

Design mobile layouts intentionally rather than simply shrinking the
desktop layout.

## 8. Accessibility and Performance

Implement:

-   Semantic HTML.
-   Proper heading hierarchy.
-   Accessible button and link labels.
-   Visible keyboard focus states.
-   Appropriate color contrast.
-   Meaningful alt text for content images.
-   Next.js Image optimization where applicable.
-   Appropriate image dimensions and aspect ratios.
-   Minimal unnecessary client-side JavaScript.

Do not add animation libraries unless needed. If subtle motion is
introduced, respect the user's reduced-motion preference.

## 9. Scope and Constraints

For this initial implementation, prioritize a polished homepage and a
reusable project foundation.

-   Do not build a complete e-commerce system, customer portal,
    inventory management system, or backend CMS.
-   Do not invent missing company information.
-   Do not overcomplicate the design with excessive effects or
    unnecessary components.
-   Do not replace the actual SCM logo with a text-only approximation if
    the original asset is available.
-   Use the supplied assets where appropriate and keep asset paths
    organized.

## 10. Definition of Done

The implementation is complete when:

1.  The project runs successfully using its documented development
    command.
2.  The homepage contains all planned sections in the correct order.
3.  The color system is centralized and consistently applied.
4.  All components use TypeScript and TSX.
5.  The layout is responsive and usable on mobile and desktop.
6.  The navigation and CTA links work as intended.
7.  No unverified company claims are presented as facts.
8.  There are no avoidable TypeScript errors or obvious console errors.
9.  The codebase remains readable and maintainable.

After implementation, report:

-   The project structure created or modified.
-   The components implemented.
-   The design tokens established.
-   Any dependencies added.
-   Any missing assets or company information that still needs to be
    supplied.
-   Any checks or build commands executed and their results.

Begin by inspecting the existing project, then implement the setup and
homepage. Do not stop at a design proposal or a list of instructions.
