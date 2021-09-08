# Interview Scheduler

Tired of being in the mentor queue for several minutes? Afraid when Rudder glitches out and cancels your mentor request? We have a solution for that: the Interview Scheduler app! This is a single-page app, built with React.js, that makes the students in control of their appointments.

!["Scheduler"](https://github.com/diannegabriel/scheduler/blob/master/docs/01scheduler.gif)

## Dependencies

Front-End: HTML, JavaScript, React, JSX, SASS, Axios\
Back-End: Node, PostgreSQL\
Testing: Storybook, JEST, Cypress

## Setup

1. Install dependencies with `npm install`.
2. To get the database running, head to `https://github.com/lighthouse-labs/scheduler-api`
3. Tune into <http://localhost:8080/> in your browser and organize your appointments!

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

## Features

### Make Appointment
Making an appointment is easy-peasy! Simply click on the + sign in an empty timeslot, and a form should pop up. Enter your name and select your mentor then save. Just like that!
!["Toggle form"](https://github.com/diannegabriel/tweeter/blob/master/docs/toggle_compose.gif)

## Edit Appointment

## Cancel Appointment

### Errors

