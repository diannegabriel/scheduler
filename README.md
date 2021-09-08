# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Tree File Path

```bash
.
├── README.md
├── coverage
├── cypress 
│   ├── downloads
│   ├── fixtures
│   ├── integration
│   │   ├── 1-getting-started
│   │   ├── 2-advanced-examples
│   │   ├── appointments.spec.js
│   │   └── navigation.spec.js
│   ├── plugins
│   └── support
├── cypress.json
├── jsconfig.json
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
│   ├── components
│   │   ├── Application.js
│   │   ├── Application.scss
│   │   ├── Appointment
│   │   │   ├── Confirm.js
│   │   │   ├── Empty.js
│   │   │   ├── Error.js
│   │   │   ├── Form.js
│   │   │   ├── Header.js
│   │   │   ├── Show.js
│   │   │   ├── Status.js
│   │   │   ├── index.js
│   │   │   └── styles.scss
│   │   ├── Button.js
│   │   ├── Button.scss
│   │   ├── DayList.js
│   │   ├── DayListItem.js
│   │   ├── DayListItem.scss
│   │   ├── InterviewerList.js
│   │   ├── InterviewerList.scss
│   │   ├── InterviewerListItem.js
│   │   ├── InterviewerListItem.scss
│   │   └── __tests__
│   │       ├── Application.test.js
│   │       ├── Appointment.test.js
│   │       ├── Button.test.js
│   │       ├── DayListItem.test.js
│   │       └── Form.test.js
│   ├── helpers
│   │   ├── selectors.js
│   │   └── selectors.test.js
│   ├── hooks
│   │   ├── __tests__
│   │   │   └── useVisualMode.test.js
│   │   ├── useApplicationData.js
│   │   └── useVisualMode.js
│   ├── index.js
│   ├── index.scss
│   ├── setupTests.js
│   └── styles
├── stories
│   └── index.js
└── yarn.lock
```