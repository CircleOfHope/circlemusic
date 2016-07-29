# Circle of Hope Music Catalog

This repository is for the official rewrite of the [Circle of Hope Music Table](http://music.circleofhope.net). 

## Introduction

### Why a rewrite?

The Music Table has served us well for the last 5 years. It was a fantastic upgrade from the Google Spreadsheet we were using to maintain our music catalog. Even so, there are still many leaders who opt not to use it, in addition to the feedback and feature requests we've gotten for improvement.

The original application was written in a somewhat outdated framework. This makes adding new features and making improvements a bit more sluggish and difficult. By rewriting the code base, we are hoping to make iterative improvements easier, bigger feature requests more viable, and contribution more open.

### Goals

As stated above the goals of the new application are:

* Quicker, more iterative improvements
	* A better admin experience for managing the catalog
	* Better search capabilities
* Ability to add big new features
	* User logins for saving songs, and creating worship sets
	* Automatic generation of charts and slides for Sunday Meetings
* Highlight the good work our musicians are doing
	* Integrate the work of the Audio Art team
	* Provide new ways to discover songs
* More contribution from other developers
	* Use modern languages and frameworks to keep the code base relevant

## Getting Started

In order to run the project locally, you will need to have [Node JS](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed. 

### Installation

Clone this repo and then run `npm install` from the project folder.

### Running the app

From the project folder, simply `npm start`.

### Importing old data

If you have a copy of the legacy database accessible, you can import the data into MongoDB using the `bin/import` script. Type `bin/import --help` to see required options.

## Contributing

Contributions are welcome. We try to follow Thoughtbot's [Git Protocol](https://github.com/thoughtbot/guides/tree/master/protocol/git).

We are also discussing our progress in the Circle of Hope [Slack](circleofhope.slack.com) channel. If you need an invite for our team, create an issue in this repo and we'll get you one.
