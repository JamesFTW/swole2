<h1 align="center">
  <br>
  <img src="https://github.com/JamesFTW/swole2/assets/1907496/0c288dc7-3234-497f-976f-9a014fdcf775" alt="Swole" width="200">
  <br>
  Swole
  <br>
</h1>

<h4 align="center">The fitness tracker of all fitness trackers.  Built with <a href="https://reactnative.dev/" target="_blank">React Native</a>.</h4>

### 📋 Requirements
React Native apps may target iOS 13.4 and Android 6.0 (API 23) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS.

### 🎉 Getting Started with React Native

If this is your first time using React Native, refer to the [official React Native documentation](https://reactnative.dev/docs/getting-started) for detailed instructions on installation and setup.

## 📖 How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/JamesFTW/swole2.git

# Go into the repository
$ cd swole2

# Install dependencies
$ npm install

# Run the app
$ npm run ios
```

## 🏗️ Local Development 
Have the local dockerized sql db running, seeded and the backend client running 

Currently, this only works if you have an existing login to use. So run the following 
```bash 
# Curl method of creating a dummy user (also in postman workspace) 
curl --location 'localhost:3000/api/users/signup' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'firstName=first' \
--data-urlencode 'lastName=last' \
--data-urlencode 'userName=username' \
--data-urlencode 'email=mail@e.com' \
--data-urlencode 'password=some-password'

# Test that you can login via api 
curl --location 'localhost:3000/api/users/login/' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: connect.sid=<whatever cookie sid you got from last step>' \
--data-urlencode 'username=username' \
--data-urlencode 'password=some-password'
```


```bash
# Creates env file and adds endpoint 
touch .env; \
echo "API_ENDPOINT='http://localhost:3000/api'" > .env   

# Install dependencies 
make deps 

# Start the ios sim 
make start-ios
```

Navigate to bottom left profile image (temp sign in image)

Input `username` for username 
Input `some-password` for password 
Monitor the simulator terminal for Success message 

Navigate to exercises to confirm loading data ✨