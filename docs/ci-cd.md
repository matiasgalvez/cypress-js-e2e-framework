# CI/CD Strategy

## Overview

This framework includes two CI/CD examples:

1. CircleCI as the main pipeline example.
2. Jenkins as an optional enterprise pipeline example.

## CircleCI

File:

```text
.circleci/config.yml
```

Pipeline behavior:

- Checkout repository
- Restore dependency cache
- Install dependencies with `npm ci`
- Verify Cypress binary
- Run smoke tests
- Run regression tests after smoke tests on `main`
- Store JUnit results
- Store reports, screenshots and videos as artifacts

## Jenkins

File:

```text
Jenkinsfile
```

Pipeline behavior:

- Install dependencies
- Verify Cypress binary
- Run smoke tests
- Run regression tests on `main`
- Publish JUnit results
- Archive reports and artifacts

## Quality Gate Strategy

Recommended usage:

- Pull requests: run smoke tests.
- Main branch: run smoke and regression tests.
- Releases: run full regression and review artifacts.

## Why CircleCI and Jenkins

CircleCI is useful for cloud-based CI/CD integration with GitHub.

Jenkins is useful for enterprise environments where teams maintain custom infrastructure and pipeline stages.
