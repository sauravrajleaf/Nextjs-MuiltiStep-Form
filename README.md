
# Project Title

## Overview 🗒️
Multistep Form aka Wizard form 🧙‍♂️🪄
_“Multi Step Form” is a sleek and responsive web application developed using **Next.js 14** . The form guides users through a step-by-step process to input personal details while ensuring a seamless user experience._

---

## Key Features 🎂
- ✅**Step-by-Step Form Process**: Users are guided through a three-step form, making it easier to input data incrementally.
- ✅**Responsive Design**: Fully optimized for mobile and desktop devices using **Tailwind CSS**.
- ✅**Dynamic Validation**: Real-time form validation ensures data integrity.
- ✅**User-Friendly UI**: Smooth transitions and easy navigation using **Next.js 14** app router.
- ✅**Local Storage**: Save progress across form steps to ensure users don’t lose data if they navigate away.

---

## Technologies Used
List the key technologies, libraries, or frameworks that you used in the project. You can provide links or brief descriptions if needed. Example:

- **Next.js 13**: For building a modern, server-side rendered React application.
- **Tailwind CSS**: For easy, utility-first styling.
- **Yup**: For form validation.
- **React Context**: Context lets components pass information deep down without explicitly passing props.
 
---

## Screenshots 📷🖼️

**Home Page**  
Image representing the home page of the application:

![Home Page](https://github.com/user-attachments/assets/c2352021-7d7b-4315-a567-92c84abf1abc)

---

**Error Validation**  
Image representing the form's error validation:

![Error Validation](https://github.com/user-attachments/assets/9bd2b0a7-7672-40b2-9bfd-5a36126cef03)


---

**Progress Indicator**  
Image representing the form's progress indicator:

![image](https://github.com/user-attachments/assets/84eb36a8-bbb5-45d0-939f-6ca73f40af31)

---

**Responsive Design**:
Fully optimized for mobile and desktop devices using **Tailwind CSS**.

![image](https://github.com/user-attachments/assets/1d411c56-8235-4d5a-9710-ae5f6bfd67c9)


---
## Features in Progress 😲😃⚒️

1. **Multi-Step Progress Bar**  
   Adding a visual progress bar at the top of the form to indicate which step the user is on and how many steps are remaining.

2. **Dark Mode**  
   Developing a toggle for dark mode to enhance user experience in low-light environments.

3. **Showing Password Strength**  
   
---

## Bugs in Progress to Fix 🐞

1. **🛠️ Fixing the Error State Persistence Issue**  
   There are certain cases where the form's error state causes unexpected behavior. 

   **🚨 Example Scenario**:  
   If a user makes a mistake on a specific step of the form and then decides to close the form without correcting it, the local storage retains the `isValid` state as `false`. When the user reopens the form and starts from the first step, even if the data on the initial step is correct, the system will not allow the user to proceed to the next step. This is because the form is still referencing the previously stored `isValid: false` state from the other step.

   **💡 Proposed Solution**:  
   The issue requires clearing or resetting the validation state upon re-entering the form, ensuring that the form checks the current step's validity rather than relying on previously saved states. This will prevent unnecessary blocking when the user revisits a correctly filled step.

2. **Form Styling Issue**  
   There's an inconsistency in form rendering across different steps. Working on fixing the form size so that it stays consistent.


---

## Setup & Installation
Provide clear and easy-to-follow steps to set up the project locally. Example:

1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/project-name.git
   cd project-name
   ```
2. **Open the project in VS Code or editor of your choice**:
   ```
   code .
   ```

3. **Install the packages via npm or yarn**:
   ```
   # If using npm
   npm install

   #Or if using yarn
   yarn install
   ```
3. **Run the application locally:**:
   ```bash
   # If using npm
   npm run dev
   # Or if using yarn
   yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
