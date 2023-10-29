<img src="https://github.com/vishalkrishnads/swipe/assets/50231856/d8791518-ebaa-41eb-9901-c2dc657769a5" alt="Swipe" width="250" align="right">

# `Swipe`
A simple web app, forked from [this work](https://github.com/johnuberbacher/invoice-generator) by [@johnuberbacher](https://github.com/johnuberbacher), that allows creating invoices using a form. It allows you to create and save invoices, view and/or edit them later at your will. Built with [React](https://react.dev) & hosted on [Vercel](https://vercel.com).

> :warning: This is a submission of an assignment assigned to me by [Swipe (YC S21)](https://getswipe.in/) as part of the interview process for a **Frontend Engineer Intern** role and not one of my personal projects.

## Table Of Contents
* [Problem Statement](#problem-statement)
* [What's done](#whats-done)
* [How To Use](#how-to-use)
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

Any new code written has been documented, but all of the existing source which has been left unmodified haven't been. If you find it hard to use the application with it's new UI, try reading the instructions below.

## How To Use
If you're familiar with the [original app](https://invoice-generator-react.netlify.app/), then the UI will be familiar to you.

* Home page: Initially, there will be a create invoice button, which will take you to the original create invoice page. Once you add an invoice, you'll see it in a list to the left of the home page. There will be action buttons to the right of each invoice which will do exactly they say. You can click on the invoice number/bill from name area to open and review the invoice.
* Invoice editor: This is the screen which will allow you to both add a new invoice and edit existing ones. This behaves exactly similar to the original application. The only differences are that it will show a **Save Invoice** button in the pop up modal when you review an invoice & that it won't allow you to choose an invoice number that's already chosen.

I hope you will find the UI easy to use and won't have to refer this often. Hoping to hear your feedback!

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
