# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## DEV NOTES

## NOTE --> ERRORS can be tested by manipulating the API's in app/thunks folder.

## Overview

This application was developed using React as the frontend framework, coupled with Redux and Redux Toolkit for state management. Chakra UI was chosen as the primary UI library for its simplicity and ease of customization. Due to the application's minimal navigation requirements, React Router DOM was not utilized.

### Technology Stack

- Frontend: React with Redux and Redux Toolkit
- UI Library: Chakra UI
- TypeScript: tsconfig.json was configured to support absolute imports
- Theming: Chakra UI theme was utilized to manage dark/light mode
- State Persistence: Redux Persist was integrated to maintain app state persistence

### Features Implemented

- **Custom Spinner:** A custom spinner was incorporated to indicate loading states during API requests.
- **Basic Error Handling:** Given the limited response codes (only 404 in this scenario), basic error handling was implemented. Error states were demonstrated by hardcoded scenarios in the failure responses. Manipulating the API in the thunks can help simulate different error scenarios for testing purposes.

### Additional Notes

- **Navigation Requirements:** React Router DOM was omitted due to the application's small size and lack of navigation complexities.
- **Hardcoded Error Handling:** Minor hardcoded error handling was implemented for demonstration purposes. Actual error handling would be more comprehensive and dynamic based on various API responses.
- **Limitations:** The application's functionalities were limited due to the restricted dataset. However, several potential enhancements could be implemented.

## Potential Improvements

Given more time or an expanded dataset, the application could be further improved in several areas:

- **Enhanced Testing:** Implement additional unit tests, integration tests, and end-to-end tests for improved code coverage and reliability.
- **Performance Optimization:** Optimize database queries, introduce caching, and explore lazy loading to enhance performance.
- **Security Measures:** Strengthen security with enhanced validation, encryption, and compliance with data protection standards.
- **Error Handling and Logging:** Improve error tracking, monitoring, and implement comprehensive error handling mechanisms.
- **User Experience (UX/UI):** Gather user feedback to enhance the UI/UX and implement design improvements.
- **Scalability and Expansion:** Prepare for scalability by optimizing infrastructure and architecture for future expansions.

Please note that this is not an exhaustive list, and there are numerous other enhancements that could be made based on the application's needs and objectives.
