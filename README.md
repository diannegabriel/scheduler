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
Making an appointment is easy-peasy! Simply click the + sign on an empty timeslot, and a form should pop up. Enter your name and select your mentor then save. Just like that!
!["Make appointment"](https://github.com/diannegabriel/scheduler/blob/master/docs/02scheduler.gif)

## Edit Appointment
Oops! Was there a mistake? No worries. Simply click on the edit button on the bottom right side of your appointment. A form will let you edit your appointment.
!["Edit appointment"](https://github.com/diannegabriel/scheduler/blob/master/docs/03scheduler.gif)

## Cancel Appointment
Don't need to speak to a mentor anymore? That's totally fine! Just click on the delete button on the bottom right side of your appointment. It will ask you to confirm because mentor help is 100% in demand so we need to be really sure.
!["Cancel appointment"](https://github.com/diannegabriel/scheduler/blob/master/docs/04scheduler.gif)

### Errors
If you don't enter a name or select an interviewer, Scheduler will not allow you to save that. Also, if something goes wrong with deleting an appointment, you will be met with an error as well.
!["Error - Save"](https://github.com/diannegabriel/scheduler/blob/master/docs/05scheduler.gif)
!["Error - Delete"](https://github.com/diannegabriel/scheduler/blob/master/docs/06-02scheduler.gif)

### Full Slots
We will let you know when spots are all full. Just try again for another day :)
!["Full slots"](https://github.com/diannegabriel/scheduler/blob/master/docs/07scheduler.gif)
