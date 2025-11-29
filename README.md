# Hematopath Master

**Morphology → Immunophenotype → Genetics → Diagnosis**

A comprehensive, mobile-first, dark-mode, offline-ready educational platform for hematopathology.

## Overview

Hematopath Master is designed for pathology residents, hematopathology fellows, and clinicians learning diagnostic hematopathology. The platform covers the full spectrum from bone marrow morphology to integrated diagnostic reasoning.

## Features

### 📚 Comprehensive Learning Modules

- **Foundations of Hematopathology**: CBC correlation, bone marrow anatomy, cellularity, dysplasia
- **Peripheral Smear & Marrow Morphology**: RBC, WBC, platelet morphology, megakaryocyte patterns
- **Acute Leukemias**: AML and ALL with cytogenetics and immunophenotypes
- **MPN & MDS**: Myeloproliferative neoplasms and myelodysplastic syndromes
- **Lymphomas**: Hodgkin and non-Hodgkin lymphomas, architecture, flow patterns
- **Flow Cytometry Mastery**: Principles, lineage patterns, aberrancy, clonality
- **Plasma Cell Neoplasms**: MGUS, myeloma, plasmacytoma, CRAB features
- **Cytogenetics & Molecular Diagnostics**: Karyotyping, FISH, translocations, mutations
- **Integrated Diagnosis & Reporting**: Combining all data sources for final diagnosis

### 🔬 Interactive Tools

- Marrow Cellularity Estimator
- Dysplasia Pattern Recognition
- Flow Cytometry Pattern Classifier
- Leukemia Logic Pathway
- Lymph Node Architecture Explorer
- Cytogenetic Signature Matcher
- Plasma Cell Clonality Checker
- Integrated Diagnosis Builder

### 📋 Case Studies

10 comprehensive case vignettes combining:
- CBC results
- Morphology findings
- Flow cytometry/immunophenotype
- Cytogenetics
- Molecular studies
- Integrated diagnostic reasoning

### ✅ Assessment

15 comprehensive questions across all topics with:
- Session-only scoring (no tracking)
- Detailed rationales
- Category-based organization

### ⚙️ User Features

- **Dark/Light Mode**: Optimized for both themes, dark mode default
- **Mobile-First**: Fully responsive design
- **Offline-Ready**: Progressive Web App with service worker
- **No Tracking**: Session-only, no user data stored
- **Accessible**: WCAG 2.2 AA compliant

## Technology Stack

- **Framework**: React 18 + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand
- **Build Tool**: Vite
- **PWA**: vite-plugin-pwa with Workbox
- **Offline**: Service Worker for offline capability

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173` in development mode.

### Production Build

The production build creates an optimized, offline-capable PWA in the `dist` folder.

## Project Structure

```
HEMATOPATH-MASTER/
├── src/
│   ├── components/
│   │   ├── ui/           # Base UI components (Button, Card, Tabs, Badge)
│   │   ├── layout/       # Layout components (Header, Footer, Layout)
│   │   └── ...
│   ├── pages/            # Page components (Home, ModulePage, Cases, etc.)
│   ├── data/             # Module content, assessments, cases
│   ├── store/            # Zustand state management
│   ├── types/            # TypeScript type definitions
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Content Organization

### Modules

Each module contains:
- Sections with subsections
- Key points
- Clinical pearls
- Comprehensive educational content

### Assessment

- 15 questions across all categories
- Multiple choice format
- Detailed rationales
- Session-only scoring

### Cases

- 10 integrated case vignettes
- Real-world diagnostic scenarios
- Multi-modal data (morphology, flow, cytogenetics, molecular)
- Educational rationales

## Educational Disclaimers

⚠️ **IMPORTANT**: This application is for educational purposes only.

- **Not for Clinical Use**: Not intended for patient diagnosis or care
- **Synthetic Data**: All cases use synthetic or de-identified data
- **No Medical Advice**: Does not provide medical advice
- **Educational Only**: Use validated clinical resources for patient care

## Data Privacy

- **No Tracking**: No user data collection or analytics
- **Session-Only**: Assessment scores are not saved
- **Local Storage**: Only theme preference stored locally
- **No Accounts**: No user registration or authentication

## License

Educational use only. See individual components for specific licenses.

## Contributing

This is an educational project. For questions or suggestions, please refer to the repository documentation.

## Acknowledgments

Content is based on:
- WHO/ICC classifications
- Established hematopathology principles
- Educational best practices
- ASCP and CAP guidelines (conceptual)

## Support

For educational purposes only. Consult primary literature and official guidelines for authoritative information.

---

**Version**: 1.0.0
**Last Updated**: 2025
