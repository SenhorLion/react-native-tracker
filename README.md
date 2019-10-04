# Tracker App

Record a users movement to create 'tracks' of walks, runs or bike rides.

## Features:

- React Native App:
  - Create new track
  - Record track
  - Save track
  - Display list of recorded tracks
  - Display real time tracker on map
- Express API with MongoDB:
  - https://cloud.mongodb.com
  - User authentication: Sign up, Sign in
  - JWT to provide token access

  ## Usage:

  If running locally for development you can use a local Mongo db instance, in this case:

  1. start Mongod: `mongod`
  1. start mongo: `mongo`
  1. start backend: `npm run start:dev`

  

  **Otherwise, you can use the Mongo Cloud Atlas instance:**

  1. start backend: `npm run start:prod`
