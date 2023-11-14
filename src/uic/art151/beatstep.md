---
layout: tutorial.njk
weekNum: 0
title: Arturia BeatStep 
---

# Arturia Beatstep

![picture of arturia beatstep](/assets/img/beatstep.png)

## Setup

### Downloads

#### Windows/Mac

##### GitHub

1. Download [GitHub Desktop](https://desktop.github.com/).

2. make a GitHub account.

3. Inside GitHub desktop, "clone" this repository using this URL: https://github.com/diagrammatic-media/p5.beatstep

4. Sync to the most current code from the instructor by "fetching" and "pulling" changes.

#####

Microsoft Visual Studio Code

1. download Microsoft [Visual Studio Code](https://code.visualstudio.com/download) (not! Visual Studio)

2. Add ["live server extension"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to Microsoft Visual Studio Code

3. (optional) return to GitHub desktop. Go to settings>integrations and select Microsoft Visual Studio Code as your default code editor.

Chrome

1. Download [Chrome browser](https://www.google.com/chrome/). Use this browser for all these assignments.

Getting Started

1. Got to GitHub Desktop. Find the respository and click "open in Visual Studio Code". Have a look at "sketch.js" inside VS Code.

2. Make sure your Beatstep Pro is plugged in.

3. click "Go Live" in the bottom right hand corner of VS Code.

4. If it didn't open in Chrome, copy the URL from whatever browser your site opened in and paste that in Chrome.

5. Right click Chrome and select inspect. Click "console" to view the console in the side panel.

6. You should see a message that BeatStep is connected as well as a blank black Canvas.

7. On your Controller, click "CNTRL/SEQ" until the button is red. Now turn the knobs on the controller; the changes should appear in the Canvas. If not, review the previous steps. If yes, all things are go and you're ready to compose your own work.

### Chrome OS

#### Repository

1. Github desktop is not available for ChromeOS, so instead you will need to download the code. If changes are made to this code (your instructor will tell you), you'll need to download the code this way again.

2. Go to the [p5.beatstep repository](https://github.com/diagrammatic-media/p5.beatstep)

3. Click the green "code" button. Select download zip. Unzip/extract the files to somewhere easy to access (documents, desktop, etc).

##### Text

1. You'll need a program to edit your code. Download [Text](https://chromewebstore.google.com/detail/text/mmfbcljfglbokpmkimbfghdkjmjhdgbg).

2. Open `index.html` and `sketch.js`. Make sure the html file is pointing to `sketch.js`, not another js file.

##### Web Server for Chrome

1. Download [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/).
2. Open the application and select "choose folder". Then, find where you downloaded the repository. Sometimes when you download this way, your files are stored in a folder within a folder. Be sure to select the innermost folder.
3. Click start if it isn't already started.
4. Click one of the live server links. The default sketch should appear in Chrome. If not, review the previous steps. If so, you're ready to make your own sketch controlled by the beatstep pro!

## Make your Own Work

1. Make a copy of "sketch.js" and call it something unique to you. Go to index.html and replace "sketch.js" with "unique.js" (or whatever you called it). Continue your work there.

2. You can access dial data by calling "abs.dials". That will be an array that will contain the 16 dials data. Each dial reports its state between 0-127.
