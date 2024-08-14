# Meet App

This is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## User Stories and Scenarios

### 1. Filter events by city

As a user I should be able to filter events by city So that I can see the list of events that take place in that city.

#### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

**Given** a user has not searched for a city,
**When** the user opens the app,
**Then** the user should see all upcoming events from all cities.

#### Scenario 2: User should see a list of suggestions when they search for a city.

**Given** a user wants to see all upcoming events in a city,
**When** the user types the specific city in the search bar,
**Then** the user should see a list of suggestions for a city.

#### Scenario 3: User can select a city from the suggested list.

**Given** a user types the city name in an input field for city,
**When** the list of suggestions appears,
**Then** the user can select the city from the suggested list.

### 2. Show/Hide event details

As a user I should be able to expand event details So that I can view more information about a specific event.

#### Scenario 1: An event element is collapsed by default

**Given** the main page is open
**When** the user has not interacted with the app
**Then** all event elements are collapsed

#### Scenario 2: User can expand an event to see its details

**Given** the user found an event to view
**When** the user clicks on an event
**Then** the details of the event expand

#### Scenario 3: User can collapse an event to hide its details

**Given** the user finished viewing the event
**When** the user clicks to hide the event
**Then** the details of the event collapse

### 3. Specify Number of Events

As a user I should be able to view a specific number of events per page So that I can adjust my page for screen size and load time.

#### Scenario 1: When user hasn’t specified a number, 32 is the default number

**Given** the user has not specified the number of events
**When** the event page loads
**Then** the default number of 32 events will populate

#### Scenario 2: User can change the number of events they want to see

**Given** the user updated the number of events to display
**When** the event page loads
**Then** the number of events the user specified will populate

### 4. Use the App Offline

As a user I should be able to use the app offline So that I can view event information without having to connect to the internet/use data.

#### Scenario 1: Show cached data when there’s no internet connection

**Given** the user previously used the app
**When** the user opens the app with no internet
**Then** the app will display cached data

#### Scenario 2: Show error when user changes the settings (city, time range)

**Given** the app loaded with no internet connection
**When** the user attempts to change settings (city, time range)
**Then** an error message is displayed

### 5. Data Visualization

As a user I should be able to view the number of events by city So that I can visualize data about where events are taking place.

#### Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the event page for a city was loaded
**When** the user views the upcoming events
**Then** a chart with the upcoming events is displayed
