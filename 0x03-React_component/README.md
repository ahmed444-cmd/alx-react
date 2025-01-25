# 0x03. React Component

## Front-end | JavaScript | ES6 | React

### Project Overview
This project focused on building and testing React components while adhering to best practices. It explored topics such as lifecycle methods, Higher-Order Components (HOCs), event handling, testing, and performance optimization. 

The project was completed from **Nov 5, 2024, at 4:00 AM** to **Nov 8, 2024, at 4:00 AM**, with manual QA review on **Nov 6, 2024, at 9:53 PM**. An auto review was launched at the deadline. 

#### Final Scores:
- **Manual QA review**: 50.0/50 (mandatory tasks)
- **Auto QA review**: 0.0/5 (mandatory tasks)
- **Overall**: 90.91%

#### Summary of Reviews:
- Overall comment: "It was good."

---

### Resources
#### Recommended Reading:
- React Components
- React Developer Tools
- Enzyme Shallow, Mount, and Unmount
- React Pure Components
- React Higher Order Components
- Jest Mock Functions

---

### Learning Objectives
By the end of this project, you should be able to:
- Determine when to use a class vs. a function to create a component.
- Understand the lifecycle of a class component.
- Write tests for components.
- Use Jest spies to verify function calls.
- Understand HOCs and implement them.
- Optimize performance and control component rendering.

---

### Requirements
- Files compiled on **Ubuntu 18.04 LTS** using **Node.js 12.x.x** and **npm 6.x.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files end with a new line.
- A `README.md` file is mandatory.

---

### Tasks

#### 0. Commence with Class Components
- Convert the `App` function into a React Class.
- Ensure all tests pass and the page renders without errors or warnings.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_0/dashboard/src/App/App.js`

---

#### 1. Lifecycles
- Add a `logOut` prop with a default value of an empty function.
- Implement a keyboard event listener to detect `Control + H` and trigger an alert and the `logOut` function.
- Add appropriate tests and remove event listeners on unmount.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `Files`: `task_1/dashboard/src/App/App.js`, `task_1/dashboard/src/App/App.test.js`

---

#### 2. Handling Events
- Convert the `Notifications` component to a class and implement a `markAsRead` function.
- Pass `markAsRead` as a prop to `NotificationItem`.
- Add tests for event handling and ensure proper binding.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `Files`: `task_2/dashboard/src/Notifications/NotificationItem.js`, `task_2/dashboard/src/Notifications/NotificationItem.test.js`, `task_2/dashboard/src/Notifications/Notifications.js`, `task_2/dashboard/src/Notifications/Notifications.test.js`

---

#### 3. Reusable Components
- Create a `BodySection` component that outputs an `h2` and children.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_3/dashboard/src/BodySection/BodySection.js`

---

#### 4. Specialization
- Create a `BodySectionWithMarginBottom` component using `BodySection` and apply custom styling.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `Files`: `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js`, `task_3/dashboard/src/BodySection/BodySection.css`

---

#### 5. Use the New Components
- Modify the `App` component to use `BodySectionWithMarginBottom` and `BodySection` for specific sections.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_3/dashboard/src/App/App.js`

---

#### 6. Test the New Components
- Add tests to verify `BodySection` and `BodySectionWithMarginBottom` render correctly and pass props.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `Files`: `task_3/dashboard/src/BodySection/BodySection.test.js`, `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js`

---

#### 7. Create WithLogging HOC
- Implement an HOC that logs messages when a component mounts and unmounts.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_4/dashboard/src/HOC/WithLogging.js`

---

#### 8. Write Tests for the HOC
- Test the `WithLogging` HOC for logging messages on mount and unmount.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_4/dashboard/src/HOC/WithLogging.test.js`

---

#### 9. Declare a Pure Component
- Modify `NotificationItem` to be a pure component.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_5/dashboard/src/Notifications/NotificationItem.js`

---

#### 10. Make Your Own Pure Component
- Optimize the `Notifications` component to only update when the `listNotifications` prop length changes.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_5/dashboard/src/Notifications/Notifications.js`

---

#### 11. Add a Test
- Verify the `Notifications` component only re-renders when the `listNotifications` prop changes.

**Repo:**
- `GitHub repository`: alx-react
- `Directory`: `0x03-React_component`
- `File`: `task_5/dashboard/src/Notifications/Notifications.test.js`

---

### Conclusion
This project emphasized hands-on experience with React component architecture, testing strategies, and performance optimization. The mandatory tasks were completed successfully, achieving an overall score of 90.91%.
