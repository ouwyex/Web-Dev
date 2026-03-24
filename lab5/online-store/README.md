# Lab 5 Online Store

Angular 17 standalone application for the Lab 5 online store task.

## Implemented requirements

- 3 components only: `AppComponent`, `ProductListComponent`, `ProductItemComponent`
- Category to product hierarchy
- 4 categories with 5 products each
- `input()` and `output()` syntax
- Like button with instant UI update
- Delete button with child-to-parent event flow
- WhatsApp and Telegram share buttons
- Responsive scoped component styles

## Project structure

```text
lab5/
  online-store/
    src/
```

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
ng serve
```

3. Open:

```text
http://localhost:4200/
```

## Build

```bash
ng build
```

## Notes

- Product and category data are stored in `src/app/services/product.service.ts`
- Interfaces are stored in `src/app/models`
- `node_modules/` should not be committed because it is already ignored by `.gitignore`
