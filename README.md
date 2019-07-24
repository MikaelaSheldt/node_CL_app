# node_CL_app
practice accessing 3rd party API, and node HTTP requests without express

## Dark Sky API
https://darksky.net/dev/docs#overview
request example ...api.darksky.net/forecast/[key]/[latitude],[longitude]

### Request Parameters
Required parameters slot directly into the request URL. Optional parameters should be specified as HTTP query parameters.

key: required
Your Dark Sky secret key. (Your secret key must be kept secret; in particular, do not embed it in JavaScript source code that you transmit to clients.)

latitude: required
The latitude of a location (in decimal degrees). Positive is north, negative is south.

longitude: required
The longitude of a location (in decimal degrees). Positive is east, negative is west.
