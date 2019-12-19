# React Based Redbrick DCU Site

## Overview

The old site was nice but difficult to update, this site just uses a google
sheet which cmt can edit. This allows for all cmt members to make changes which
can be monitored through google sheets history.

Aside from the dynamic changes this site was written in some rushed ReactJS.
Changes to the site don't really need to be made apart from styling updates or
changing the year for the current cmt and the majority of changes should just be
made to the google sheet.

## Google Sheet

The google sheet controlling the information can be found
[here](https://docs.google.com/spreadsheets/d/15pFYVzuFPK4HFOpnnFHuoTNh3L3iThBCpoVMQzT5RlM/edit?usp=sharing).

## Features

- Google Sheets / JSON Fetch
  - Dynamic Image Gallery
  - Event List
    - Upcoming Events
    - Past Events
    - Talk Slides
- Displaying general information about the society
- Mobile friendlyish

## Deployment

1. git clone the repo.
2. run `yarn`.
3. ensure the `homepage` in `package.json` is set correctly.
4. ensure `siteMetadata.dataURL` in `gatsby-config.js` is set to pull
   information from the correct JSON file.
5. run `yarn build`.
6. ensure there are no errors in the output.
7. copy &amp; paste the static files in the build folder that has been created.
   This is your site now :)

- Ensure the JSON file `siteMetadata.dataURL` is set to pull from is being
  regularly updated (~ once day)

- As of 19/11/2019, the release of this site, the `data.json` file can be pulled
  from `fraz.redbrick.dcu.ie/data.json`
  - This file is updated by a cron job running at 00:00 everyday. :)

## I want to make changes

So you want to make changes? okay.

### Requirements

- Node
- `npm`/`yarn`
- Slight insanity
- general understanding of ReactJS

### Installation

1. git clone the repo
2. run `yarn` in the root directory
3. start a hotreload server with `npm dev`
4. make changes and watch the magical hot reload take action live!

Note: the main code is located in `src`
