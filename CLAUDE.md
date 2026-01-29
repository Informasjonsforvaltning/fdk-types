# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript types library (`@fellesdatakatalog/types`) that provides common type definitions for the Norwegian National Data Catalog (Felles Datakatalog - FDK) ecosystem. It exports interfaces and enums used across various FDK applications.

## Build Command

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` folder with declaration files.

## Architecture

The library has a simple structure with two main modules:

- **`src/lib/enums.ts`** - Enum definitions for entity types, data formats, filters, access rights, language codes, metadata quality metrics, and various classification systems
- **`src/lib/domain.ts`** - Interface definitions for domain objects including datasets, data services, concepts, information models, public services, events, organizations, and search-related types

All exports are re-exported through `src/index.ts`.

## Key Domain Types

The main entity types are:

- `Dataset` / `DatasetWithIdentifier` - Data catalog entries
- `DataService` - API/service descriptions
- `Concept` - Terminology/concept definitions
- `InformationModel` - Data model descriptions
- `PublicService` - Government service descriptions
- `Event` - Life events and business events
- `SearchObject` - Unified search result representation

The `Entity` union type combines all main entity types.

## Conventions

- All multilingual text uses `Partial<TextLanguage>` with Norwegian (nb, nn, no) and English (en) support
- Entity identifiers follow patterns: `id` (internal), `uri` (full URI), `identifier` (external reference)
- Reference data uses `ReferenceDataCode` interface with `uri`, `code`, and `prefLabel` fields
