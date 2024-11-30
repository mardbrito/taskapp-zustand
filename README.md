# React Taskapp with Zustand

This app is an example using react 18, react-router 7 and zustand 5.

## How this app works

1. This app will record tasks for a specific user, as specified on the welcome page.

2. Tasks can be deleted or marked as completed.

3. This app will also allow you to apply filters to all tasks, both completed and active (not completed).

4. You can also see a summary of the tasks that remain to be completed, as well as the total for the logged-in user.

## How to test this app

- Execute `npm run dev`

- The app will redirect you to the welcome page, and then you have to inform your name and then get started.

- After that, you will be redirected to the tasks page. There you can register your tasks. Also, you can mark or delete tasks there.

_Each task will be saved in the respective username informed on the welcome page._

## Where the tasks are saved?

- The app will save every task in the **localstorage**.
