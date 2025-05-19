## What is this?


**Weathering With You** is a weather web app to get the current weather data of the zip code you submit into the form.
 Consists of 4 main components
 - the header at the top
 - the form to input your zipcode, choose the temperature metric, and save button
 - [left-hand panel] Display weather data
 - [right-hand panel] 10 most recent weather data queries

## Setup
Prereq apps to have downloaded
- [Node](https://nodejs.org/en/) 
- [git](https://git-scm.com/downloads)

Download all npm packages for both client/server
```javascript
npm run setup
```

### .env file
Need two creds. Weather api and mongo connection string

#### Mongo
Log into [mongo](https://account.mongodb.com/account/login)

On the left-hand sidebar, you should see **Database Access**. Click on it and make a new user for yourself.  
1. Click on `Add New Database User`
2. Create a new user by filling out `username` and `password`  
(this will be different creds than your actual mongo account. This is gives a user access to this particular database.)

On the left-hand sidebar, you should see **Network Access**.  
Make a new access point for your IP address to get permission on using your mongodb.

Now create a `.env` file in your root directory of `mern-weather-app` and dynamically add this to your `.env`
```javascript
DB=mongodb+srv://<username>:<password>@<cluster-id>.mongodb.net/test?retryWrites=true&w=majority
```
To get the cluster ID, go to **Clusters** and click on **Connect > Connect your application** to get a more detailed view of how the DB string should look like. 

#### Weather API
Make an account at   and go to the [api keys](https://home.openweathermap.org/api_keys) section.
Copy/pasta that key to the .env file using `WEATHER_KEY` as your key
```
WEATHER_KEY=1234567890asdfjkl
```

## Run Locally

```

You can now run your local.  
Go to your root directory and start your web app:
```javascript
npm run dev
```
SCREENSHOTS
->Header and input section
![Screenshot 2025-05-15 015251](https://github.com/user-attachments/assets/b498f727-6433-4ede-a765-c2b5c651d4cc)
->Weather updates in celsius and Fahrenheit for different pincodes of usa
![Screenshot 2025-05-15 015307](https://github.com/user-attachments/assets/434a5d58-4298-45b6-86f3-df0a15cfc87f)
![Screenshot 2025-05-15 015329](https://github.com/user-attachments/assets/46dec90e-79d2-46af-9431-fe33da61b443)
![Screenshot 2025-05-15 015355](https://github.com/user-attachments/assets/77bdb620-60f2-4364-9c28-bc6576212fc4)
->Here we can see that google provides the weather report of New York we can see that they are approximately similar to our weather app output
![Screenshot 2025-05-15 015459](https://github.com/user-attachments/assets/0016193d-0c89-42aa-87bd-ed0e6d1d3b1e)


This is command will your client and server concurrently. 
- client - localhost:3000
- server - localhost:5000

The service will auto-watch both frontend and backend, so no need to restart to see your changes.  
Once you save your changes, it'll auto-refresh to view your changes.

### Deploy
Connect this repo to heroku and it'll auto deploy once you update master, if that's the branch heroku is watching to auto deploy.
