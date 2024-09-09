# Commit Message Structure

Commit messages should follow the Conventional Commits specification.

### Type
One of the following must be used:

- **build**: Changes affecting the build system or external dependencies (e.g., gulp, broccoli, npm)
- **ci**: Changes to CI configuration files and scripts (e.g., Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (e.g., whitespace, formatting, missing semicolons)
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries (e.g., documentation generation)

### Subject
The subject should include a short description of the change:

- Write in English.
- Use imperative mood, present tense: "change" not "changed" or "changes"
- Do not capitalize the first letter
- Do not use a period (.) at the end
- Avoid unnecessary details.

### Examples

- `feat: add signup page`
- `fix: fix signup page`
- `docs: update README.md`


# Branch Name Guidelines

### Type
One of the following must be used:

- **feature**: Adding a new feature, reworking an existing feature, or removing a feature
- **bugfix**: A bug fix
- **hotfix**: An urgent fix for a production issue (usually a critical bug fix)
- **test**: Experimenting with new features or technologies

### Subject
The subject should include a short description of the change:

- Use kebab-case
- Write in English.
- Use imperative mood, present tense: "change" not "changed" or "changes"
- Do not capitalize the first letter
- Do not use a period (.) at the end
- Avoid unnecessary details.

### Examples

- `feature/signup-page`
- `bugfix/header-navigation`