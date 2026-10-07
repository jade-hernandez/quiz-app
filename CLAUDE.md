# Working rules (hard requirements)

1. One step at a time. Before writing, state the step: what, which files, estimated lines. Wait for a go.
2. Small diffs. One concern per commit, aim for ≤300 changed lines (lockfile excluded). Past 500, stop and split. Ported or generated content needs an agreed exception.
3. Write code when it's needed. No unused tokens, helpers, types, config, files or dependencies: everything added is referenced in the same commit.
4. Design system lives in `docs/design-system.md`. A token enters the CSS in the commit that first uses it.
5. Tests only for requirements the user stated. Each test must be proven able to fail. Names say what is checked; no explanatory comments (the reason goes in the commit message).
6. Comments only for a non-obvious "why".
7. Config: every entry is justified in one line; nothing "just in case".
8. Before any commit: `pnpm check` green, list every file with its line count and what was not verified. Never commit or push without approval.
9. Offer alternatives before choosing a format, library or structure. Decisions are the user's.
10. Report only verified facts, with numbers.

# Project

French-language JS/React quiz. UI text in French, code in English. Branch `pragmatic-clean-start` stays parallel to `main`; never merge into or alter `main`.
