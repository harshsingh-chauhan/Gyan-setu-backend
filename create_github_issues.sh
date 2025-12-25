#!/bin/bash

# A script to read tasks from tasks.md and create GitHub issues for them.

# Path to the tasks.md file
TASKS_FILE="./specs/001-quiz-management/tasks.md"
REPO_URL="https://github.com/harshsingh-chauhan/Gyan-setu-backend.git" # As provided by the user

# Check if gh is installed
if ! command -v gh &> /dev/null
then
    echo "Error: The GitHub CLI ('gh') is not installed. Please install it to use this script."
    echo "Installation guide: https://github.com/cli/cli#installation"
    exit 1
fi

# Check if tasks.md file exists
if [ ! -f "$TASKS_FILE" ]; then
    echo "Error: tasks.md file not found at $TASKS_FILE"
    exit 1
fi

echo "Found tasks file at $TASKS_FILE"
echo "Issues will be created in the repository: $REPO_URL"
echo ""

# Use grep to filter for lines that are tasks, then pipe to the while loop
# This ensures we only process lines that start with "- [ ]"
grep -- '- \[ \]' "$TASKS_FILE" | while IFS= read -r task
do
    # Extract the title from the task line using sed.
    # This command removes the markdown checkbox, task ID, and any markers like [P] or [US1] to create a clean title.
    title=$(echo "$task" | sed -E 's/^- \[ \] T[0-9]{3} (\[P\] )?(\[US[0-9]\] )?//')
    
    echo "-----------------------------------------------------"
    echo "Next task to create as issue:"
    echo "  Title: $title"
    echo "  Body:  $task"
    echo "-----------------------------------------------------"
    
    # Prompt user to continue
    read -p "Press Enter to create this issue, or Ctrl+C to abort."

    # Create the GitHub issue using the provided title and the full task line as the body.
    gh issue create --repo "$REPO_URL" --title "$title" --body "$task"
    
    # Check the exit code of the gh command to see if it was successful.
    if [ $? -eq 0 ]; then
        echo "✅ Successfully created issue for task: '$title'"
    else
        echo "❌ Failed to create issue for task: '$title'"
    fi
    
    echo "" # Add a newline for better readability
done

echo "All tasks have been processed."
