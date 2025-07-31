#!/bin/bash

# =================================================================
#  Project-Wide Code Review Script (V2)
#  Gathers files, sends them to Gemini, waits for the response,
#  and prints the result.
# =================================================================

# --- Configuration ---
PERSONA_FILE="00_AI_Prompts/Gemini-CLI-Reviewer.md"
# --- End Configuration ---

# Check if the persona file exists
if [ ! -f "$PERSONA_FILE" ]; then
    echo "❌ Error: Persona file not found at '$PERSONA_FILE'"
    exit 1
fi

echo "🚀 Preparing review prompt by gathering all project files..."

# Build the entire prompt and store it in a variable
PROMPT_CONTENT=$(
    # 1. Start with the Persona/Preamble from the file
    cat "$PERSONA_FILE"
    echo ""
    echo "---"
    echo "Please perform a comprehensive review of the entire project codebase provided below. Analyze all files (HTML, SCSS, JS) and how they interact with each other."
    echo "---"
    echo ""

    # 2. Find and append all relevant project files
    find . -type f \( -name "*.html" -o -name "*.scss" -o -name "*.js" \) -not -path "./.git/*" | while read -r filepath; do
        echo "### FILE: $filepath"
        cat "$filepath"
        echo ""
    done
)

echo "⏳ Prompt prepared. Sending to Gemini and waiting for the review... (This may take a moment)"
echo "" # Add a blank line for spacing

# Send the prompt from the variable to Gemini and CAPTURE the response into a new variable
RESPONSE=$(echo "$PROMPT_CONTENT" | gemini)

echo "✅ Review received from Gemini:"
echo "---------------------------------"
# Print the captured response
echo "$RESPONSE"
echo "---------------------------------"
echo "🎉 Review process complete."