# uplifts


## Project Concept

The primary goal of this app is to offer users a chance to focus on the positive that happens in their lives every day. As humans, we all have experiences that layer with each passing moment. This often happens so fast that we barely have time to process one event before the next begins. Compounding this, research reveals that our brains tend to amplify what we perceive as negative events far more than the positive. 

upLIFT offers us a way to capture, celebrate, and revisit the positive moments in our lives - a quick reminder of the good that is happening all around us, if only we pause to perceive it.

An upLIFT can be *anything* positive that happens in a day - sharing a laugh with your barista, creating a beautiful piece of music or art, or stretching beyond your comfort zone to meet with colleagues outside of work. Capturing and revisiting these moments can offer us an inspiring perspective in discouraging moments of life, as we can see and reflect on all of the good that has come our way.

In this way, upLIFT is a digital journaling tool or gratitude practice of sorts, designed for those on-the-go who wish to record the experiences that inspire them. 


## Getting Started

upLIFT is an app currently hosted via Heroku at http://uplifts.heroku.com/uplifts.
In order to access the app, simply visit the link above and click Join upLIFT to create your username and password. No additional installations or programs are required to use it.


## Technologies Implemented

This app was created with Node.js, Mongoose, Express, and EJS and was developed using [GitHub Pages](https://pages.github.com/) and [Atom](https://atom.io/). All site images are included courtesty [Unsplash](https://unsplash.com/) and the logo was designed with [Canva](https://www.canva.com/).


## Technical Challenges and Unsolved Issues

### Technical Challenges
The greatest technical challenge of this project was attempting to integrate images. My original intention was to connect the images contained in my /public/ directory with the category users select in the dropdown menu. In this way, selecting a category (i.e. "Adventured") would cause a thumbnail gallery, dropdown menu, or image carousel to populate with the images corresponding to that category. Unfortunately, the timeframe of this version did not allow me to explore the inclusion of this feature, although I intend to integrate it into future versions.

A secondary technical challenge for me was responsive design, which I have not entirely achieved in this version. My initial focus was to render the layout and visuals I needed on the page to ensure display, tending to responsiveness once this was achieved. Troubleshooting route errors took a considerable amount of time and I have not yet been able to revisit responsive design features. 

### Unsolved Issues

There are some minor unresolved issues in this first version of the app, including but not limited to:

* Login and Authorization
  * Upon creating a new account, the gallery page does not offer a personalized welcome message (this occurs upon a user's       second login).
  * During the most recent testing (10-17-2018, 9:19PM PST), it appears that a user is required to create a new account each       time they wish to login to the site.
  
* Aesthetics
  * On the create/new page, the cursor in the textbox is oriented halfway down the side of the box instead of in the top left     corner.
  * I intended to integrate a variety of fonts but the timeline for this version did not allow.
  * I intended to include an introductory modal that would appear within 3 seconds of a new user's login. This modal would         have briefly outlined the features and purpose of the app.
  * I also intended for each upLIFT on the gallery page to be accessed with a modal rather than an additional show page,           though that would not have satisified the assignment's primary requirement of including the 7 Restful Routes.
  * With more time, I would have preferred to feature additional minor styling techniques, such as button effects and precise     positioning of elements. These will be integrated in future versions as I gain more comfort with CSS and frameworks such       as Bootstrap.
  * This version involved more inline styling to override other properties than I would have preferred.


## Future Optimizations

The following is a list of optimizations to be incorporated into future versions of this app:

* The ability for users to add images from their own devices or at least to select from among options rendered from the app     database.
* Global responsive design features.
* Mobile version - reminders for users to create upLIFTs throughout the day.
* An incentive program in which users who create at least three upLIFTs in a day will receive a "gift" in the form of a link     to an inspirational article or video. 
* I intend for future versions to feature DRY code that is much cleaner and includes clear, consistent commenting throughout.
