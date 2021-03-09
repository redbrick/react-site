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
- Automatic build daily on github

## Deployment


Deployment has been made simple!  
Github now builds the site daily. All you have to do is simply:  
1. click on the latest build.
2. scroll down to artifacts.
3. download the tar, extract it.
4. deploy its content to redbrick using:
```
rsync -avh --chown=1001:1022 ./public/* hardcase:/storage/webtree/redbrick/htdocs 
```
5. congrats, you're done!

- Ensure the JSON file `siteMetadata.dataURL` is set to pull from is being
  regularly updated (~ once day)

- As of 19/11/2019, the release of this site, the `data.json` file can be pulled
  from `fraz.redbrick.dcu.ie/data.json`

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
