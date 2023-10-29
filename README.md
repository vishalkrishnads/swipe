<img src="https://github.com/vishalkrishnads/swipe/assets/50231856/d8791518-ebaa-41eb-9901-c2dc657769a5" alt="Swipe" width="250" align="right">

# `Swipe`
A simple web app, forked from [this work](https://github.com/johnuberbacher/invoice-generator) by [@johnuberbacher](https://github.com/johnuberbacher), that allows creating invoices using a form. It allows you to create and save invoices, view and/or edit them later at your will. Built with [React](https://react.dev) & hosted on [Vercel](https://vercel.com).

> :warning: This is a submission of an assignment assigned to me by [Swipe (YC S21)](https://getswipe.in/) as part of the interview process for a **Frontend Engineer Intern** role and not one of my personal projects.

## Table Of Contents
* [Problem Statement](#problem-statement)
* [What's done](#whats-done)
* [Setup Guide](#setup-guide)
    * [Prerequisites](#prerequisites)
    * [Setup Guide](#setup-guide)
* [Contributing](#contributing)

## Problem Statement
The problem statement is outlined in [this document](https://drive.google.com/file/d/1307DzolFWTZgZoV5osLUJc_UcL-PoaBI/view?usp=sharing). The requirements stated are as follows:

1. Clone the existing GitHub repository and set up the project locally.
2. Integrate Redux into the application and create a Redux store.
3. Create Redux actions, action types, and reducers to manage the invoice state (add, edit, view,
and delete invoices).
4. Implement a component to display a list of invoices.
5. Make list of invoices as first screen and move the create to a new create invoice button
6. In the invoice list, add buttons or options for view, edit, and delete operations.
7. Ensure proper state management throughout the application by connecting components to the
Redux store.
8. Make sure the application handles errors gracefully.
9. Write clean, well-documented, and modular code.
10. Implement copy to a new invoice from existing invoice functionality

## What's done
All of the stated requirements have been fulfilled. A summary of the changes are outlined below

* A UI consistent with the existing application theme
* A home screen with a list of all active invoices
* Ability to view, edit & delete an invoice
* Option to copy to a new invoice from an existing one
* A button to add a new invoice that redirects to the original invoice editor form

## Setup Guide
You can view the application live here. However, if you want to set it up locally in your machine, follow this setup guide.

### Prerequisites
Make sure you have these prerequisites satisfied in your PC:
1. Node.js: Get the binary corresponding to your platform from the [downloads page](https://nodejs.org/en/download) & set it up. In Linux, `apt` installations may not work properly because it usually installs an older version.
2. Git VCS: It comes bundled with Linux installations. If you're not on Linux, then get the binary corresponding to your platform [here](https://git-scm.com/downloads) and install it.

### Instructions
Follow the steps below to build and run the application

1. Clone this repository

   ```
   git clone https://github.com/vishalkrishnads/swipe.git
   ```

2. Change your working directory

   ```
   cd swipe/
   ```

3. Install all dependencies

   ```
   npm install
   ```

4. Run the application

   ```
   npm start
   ```

That's about it. Your application will now open up on [port 3000](http://localhost:3000) in a new browser tab automatically. Edit `src/App.js` to get started.

## Contributing
This repository is not accepting contributions since this is an assignment being submitted as part of an interview. However, if you want to contribute, feel free to fork this and build your own!
