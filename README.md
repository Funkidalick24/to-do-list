# To-Do List App

A simple, fully styled to-do list application built with React that allows users to add, edit, delete, and mark tasks as completed. All tasks are persisted in the browser's localStorage, ensuring data remains available across sessions.

## Features

- **Add Tasks**: Enter a new task in the input field and click "Add" to create it.
- **Mark as Done/Undone**: Use the checkbox next to each task to toggle its completion status.
- **Edit Tasks**: Click the "Edit" button to modify a task's text inline, then save changes.
- **Delete Tasks**: Remove tasks permanently with the "Delete" button.
- **Persistent Storage**: Tasks are automatically saved to localStorage and restored when the app reloads.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or download the project to your local machine.
2. Navigate to the project root directory (`ToDo-App`).
3. Install dependencies:
   ```
   npm install
   ```

## Running the App

Start the development server:
```
npm run dev
```

The app will open in your default browser at `http://localhost:5173` (or the port specified by Vite).

## Testing the App

Follow these steps to test all functionality:

### 1. Adding Tasks
- Type a task description in the input field (e.g., "Buy groceries").
- Click the "Add" button.
- Verify the task appears in the list below the form.

### 2. Marking Tasks as Done
- Click the checkbox next to a task.
- The task text should appear with a strikethrough and grayed out.
- Uncheck the box to mark it as undone.

### 3. Editing Tasks
- Click the "Edit" button next to a task.
- The task text will become an editable input field.
- Modify the text and click "Save".
- The task should update with the new text.

### 4. Deleting Tasks
- Click the "Delete" button next to a task.
- The task should be removed from the list immediately.

### 5. Testing Persistence
- Add several tasks, mark some as done, and edit others.
- Refresh the browser page.
- All tasks and their states should remain exactly as they were before the refresh.
- Open the browser's developer tools (F12), go to Application/Storage > Local Storage, and verify the "tasks" key contains the task data.

### 6. Edge Cases to Test
- Try adding an empty task (should not add anything).
- Edit a task to empty text and save (should update to empty, but consider if this is desired behavior).
- Delete all tasks and refresh (should show an empty list).
- Check console logs for any errors during operations.

## Technologies Used

- **React**: For building the user interface
- **Vite**: For development and build tooling
- **CSS**: For styling the application
- **localStorage**: For client-side data persistence

## Browser Support

This app works in all modern browsers that support ES6 modules, React, and localStorage (Chrome, Firefox, Safari, Edge).

## Troubleshooting

- If tasks don't persist after refresh, check that localStorage is enabled in your browser settings.
- If the app doesn't load, ensure Node.js and npm are installed correctly.
- Check the browser console for any error messages.
