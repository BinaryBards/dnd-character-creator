# ⚙ Github Workflow

## Starting a task

When you begin working on a task, first check out a github branch name your branch with the beginning initials of the ticket id.

For example if the ticket is:
`RDW-452: Add validation to form inputs`

The corresponding branch name would be something like:
`rdw-452-add-validation-to-form-inputs`

The name after `rdw-452-` doesn't matter as long as its concise and accurate.

This ensures the Jira tracks the branch on the ticket.

## Finishing a task

When you've made your final commit and you're ready to submit it for review:

```bash
git push orign your-branch-name
```

- Go to the repo and start a pull request.
- Fill out the pull request template.
- Create the pull request and assign a reviewer.
- If approved, make sure to click `squash and merge` and delete the branch.
