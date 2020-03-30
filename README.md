# Covid-19 Reporter
In these times, the whole world is struggling with Covid-19 virus problems, such as quarantine, several business closures and...

I wrote a Node.js webserver to help people know which areas are mostly affected by this disease, to help them prevent dangerous areas (of course the safest place to stay is home, but anyway...).

In this program, you can do two things:
1. You can see the affected areas around the world. It is an open-source program so this information is submitted by people around the world.
2. You can submit your very own information.

So let's see how you can set this program up. 

## Installing requirements

You have to install Node.js on your system. You can check if you already have it by typing this command:
```
node --version
```
If you don't have this package, just follow the instructions from [Node.js' official website](https://nodejs.org/en/download/).

Once you set up node, clone this project into your system. Open the project's folder from Terminal. You need to set up an environment file. Do it by typing ```echo 'PORT = 3000' >.env```.

Then you can install the Node.js requirements by typing ```npm install```. Wait for the process to finish. 

The program is ready and can be started by ```npm start```.  

Now your web server is ready and waiting for requests. Let's talk about how you can use it. 

## Types of Requests

1. **GET request**
You can send a GET request to */gis/testpoint*. Your request should have two parameters: *long* and *lat* (which are longitude and latitude of your considered point). In response, you will get a JSON object with this format:
```JSON
{
    polygons : [
    ]
}
```
which the polygons array will have the names of the areas that your point in inside them. 


2. **PUT request**
You can send a PUT request to */gis/addpolygon*. Your request should have a *GeoJSON Feature* with *Polygon* type in its body. Feel free to check their [official website](https://geojson.org/) for more details.

> If you are wondering how you can send these requests, check out [Postman](https://www.postman.com/), a program designed for sending different types of requests to everywhere you want.

## Implementation Details

You can see the codes in the *src* folder. I grouped my codes into different folders.
* **controller**: codes for getting requests and handing them to *service*.
* **service**: codes for getting input from *controller* and processing them.
* **repository**: codes for working with data.
* **logger**: codes for logging different events.

Besides these folders, there is *app.js*, which is the main code that works with the codes I mentioned above. 

Also, the database is stored in the *resources* folder inside the *root*. 
