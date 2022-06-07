# Auth0 ♥️ React blank template

This repository is set up to facilitate a quick set up with authentication in React using Auth0. There are a few additional sections for adding multi-factor authentication and deployment.

![Auth0 Loves React](./images/auth0-react.jpg)

_For the majority of the hands-on portion, you will follow this blog post, [The Complete Guide to React User Authentication](https://auth0.com/blog/complete-guide-to-react-user-authentication/), created by [Dan Arias](https://auth0.com/blog/authors/dan-arias/). Thanks Dan!_
_I also rely on [this Youtube video](https://www.youtube.com/watch?v=PYWS-4CXETw) for a walkthrough on what exactly happened_

For the original repo - [Click Here](https://github.com/jamesqquick/auth0-react-workshop)

**How to Install

-   Download or Clone [repo](https://github.com/butDoYouEvenCodeBro/react-app-withBlankAuth0.git)
-   npm install in Hyper _and maybe npm audit fix depending on versions_
-   npm start

**Notes

> 1. When the blog post mentions the `auth0-react-sample` directory in the _Get the Starter Application_ section, you will instead use the `frontend` directory from this repository.

> 2. When the blog post mentions the `auth0-express-js-sample` directory in the _Calling an API_ section, you will instead use the `backend` directory from this repository.

### Expectations and Requirements

To participate in this workshop, it is expected that you have at least beginner knowledge of JavaScript, React.js, Node and Git.

You will also need to have a few things installed.

-   [node.js](https://nodejs.org/en/download/)
-   code editor ([VS Code](https://code.visualstudio.com/) is recommended)
-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)
-   [AWS Amplify CLI](https://docs.amplify.aws/cli) (for deploying to Amplify)

## Sign up for Auth0

If you haven't already, [sign up for a free Auth0 account](https://a0.to/react-workshop-signup), which offers you:

-   7,000 [free active users and unlimited logins](https://auth0.com/pricing/).
-   A [centralized, ready-to-ship login page](https://auth0.com/universal-login) for Web, iOS & Android.
-   Up to 2 [social identity providers](https://auth0.com/docs/connections/identity-providers-social) like Google and Facebook login.
-   Unlimited [serverless Rules](https://auth0.com/docs/rules/current) to customize and extend Auth0's capabilities.

During the sign-up process, you will create an [Auth0 Tenant](https://auth0.com/docs/getting-started/the-basics#account-and-tenants), which is a container that Auth0 uses to store your identity service configuration and your users in isolation. No other Auth0 customer can peek into or access your tenant.

## Hosting (Bonus)

### Hosting with AWS Amplify

For deploying the React application to AWS Amplify, you'll need the [Amplify CLI](https://docs.amplify.aws/cli/start/install) installed and a user profile set up in AWS that has sufficient access. If you don't have a user created, you can create one in the steps below.

> Make sure to navigate into the `frontend` directory in your terminal if you aren't already.

Configure the Amplify CLI.

`amplify configure`

You will then be taken to the browser where you will need to login with your AWS credentials. After you have logged in successfully, continue in the terminal to setup the region and username.

`Region` - choose an appropriate region for your site to be hosted in

`Username` - choose a username for the new user you will create

You should then be taken back to the browser where you can finish creating the new user. Make sure to choose the following configuration for your user.

`AWS Access Type` - programmatic access

`Permissions` - you can choose `AdministratorAccess` for demo purposes ( keep in mind, it is recommended to restrict this access more appropriately with a real application)

`Tags` - none

After you've gone through those settings, click `Create User` and take note of the `Access key ID` and `Secret access key`. Follow the details in the command line by pasting in these two properties appropriately. Lastly, choose a profile name (**remember this as you'll need it shortly**).

With the CLI configured, now initialize the React project as an AWS Amplify project.

`amplify init`

Choose a name for your project, and the CLI should complete the following configurations. If not, enter them manually.

-   Default editor - Visual Studio Code
-   App type - JavaScript
-   JavaScript framework - `react`
-   source directory - `src`
-   dist directory - `build`
-   build command - `npm run-script build`
-   start command - `npm run-script start`

If you're prompted to create a new environment, give it a name. Then, **selected the `AWS profile` you just created**.

Now, run the following command to add hosting to the project. Make sure to choose `Hosting with Amplify Console` and then `Manual`.

`amplify hosting add`

And finally, publish the project.

`amplify publish`

After your application has been deployed to Amplify, you should see an HTTPS URL in the terminal for your deployed app. Open it in the browser to see the app itself.

For authentication to work in this deployed app, you'll need to update the following settings in the Auth0 dashboard with the deployed URL. You can add multiple values in these properties by comma-separting them.

-   allowed callback urls
-   allowed logout urls
-   allowed web origins

Now, you should be able to login/logout in your deployed application.

## Add Multi-Factor Authentication (Bonus)

To add multi-factor authentication to the app, in the Auth0 dashboard navigate to `Security` -> `Multi-factor Auth`. Then, click on the `Phone Message` section and choose the following options. There are several different options, but a phone message works well here. For more info, refer to the [Multi-Factor Authentication docs](https://auth0.com/docs/mfa).

-   Choose a delivery provider - Auth0
-   Choose a delivery method - SMS

Make sure that the toggle in the top right is set to the green/on state. Then, go back to the `Multi-factor Authentication` page. Under `Define policies`, set `Require Mutli-factor Auth` to `Always`.

The next time you log into your app, you should be prompted to enter a code that was sent to you via text.
