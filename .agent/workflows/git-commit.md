---
description: Helper for generating atomic git commit commands
---

This workflow helps you organize your pending changes into atomic, well-structured commits, providing the exact commands to stage and commit each logical group.

1. **Analyze Status**: Check `git status` to identify all modified and untracked files.
2. **Atomic Grouping**: Identify logical groups of changes. Each commit should have ONE clear purpose/responsibility.
3. **Generate Commands**:
    - For each group, provide the specific `git add <files>` and `git commit -m "<type>(<scope>): <description>"` commands.
    - Use standard conventional commits format.
    - Ensure EVERY file identified in `git status` is included in one of the generated commands.
4. **Execution Policy**: 
    - **NEVER** run the commands automatically. 
    - **NEVER** create new branches or Pull Requests unless explicitly asked.
    - Provide the commands in a clear sequence for the user to copy.

**Example Usage**:
/git-commit "Fix UI bugs and add login logic"
