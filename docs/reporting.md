# Reporting Strategy

## Overview

This framework uses multiple report outputs to support both local debugging and CI/CD visibility.

## Report Types

### Spec Output

Useful for fast terminal feedback during local runs.

### Mochawesome Reports

Useful for readable HTML and JSON test reports.

Generated under:

```text
reports/mochawesome/
```

### JUnit XML Reports

Useful for CI/CD tools such as CircleCI and Jenkins.

Generated under:

```text
reports/junit/
```

## Cypress Artifacts

Cypress screenshots and videos are useful for debugging test failures.

Generated under:

```text
cypress/screenshots/
cypress/videos/
```

## CI/CD Usage

The CircleCI and Jenkins examples store test reports and artifacts after test execution.

This helps reviewers understand what failed without reproducing the issue locally first.
