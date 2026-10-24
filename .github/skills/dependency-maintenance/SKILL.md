---
name: dependency-maintenance
description: 'Use when updating npm dependencies, reviewing Dependabot PRs, resolving peer dependency conflicts, or validating package.json and package-lock.json changes in this Vue 3, Jest, and Cypress project.'
---

# Dependency Maintenance

## When to Use

- Update or review npm dependencies, including Dependabot updates.
- Resolve `npm install` or `npm ci` failures caused by incompatible dependency versions.
- Decide how to handle a Dependabot PR that breaks dependency installation or tests.

## Procedure

1. Inspect `package.json`, `package-lock.json`, and the relevant Dependabot configuration before changing versions.
2. For each updated package, check its peer dependency ranges and compatibility with related packages. Treat grouped Dependabot updates as a convenience, not as proof that the resulting versions are compatible.
3. Keep tightly coupled tooling on compatible major versions. In particular, `@vue/vue3-jest` 29 requires Jest 29 and `babel-jest` 29. The project's `ts-jest` 29 also declares a TypeScript peer range below 7; verify the actual installed package metadata because these constraints can change with upgrades.
4. Update related direct dependencies together and regenerate `package-lock.json` with npm. Do not edit generated lockfile entries manually.
5. Do not use `--force` or `--legacy-peer-deps` to hide a peer dependency conflict. Resolve the incompatible version constraints instead.
6. Validate the committed dependency state with `npm ci`, then run `npm run test:unit` and the relevant project checks, such as `npm run build`. Report any command that could not be run or any remaining failure.
7. Do not merge a Dependabot PR while installation or required checks fail. If its changes can be corrected, update that PR; otherwise close it and submit a coordinated dependency fix through a normal reviewed PR. If the same incompatible update recurs, narrow Dependabot's update configuration for the problematic package or major version rather than disabling dependency updates broadly.
