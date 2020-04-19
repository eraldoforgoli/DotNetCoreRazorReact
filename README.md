# DotNetCoreRazorReact

DotNetCoreRazorReact is an integration of React in ASP .Net Core 3.1.
The result is a hosted react application within the Razor pages.

You can use all the features of react, as normally used. 
In this example, i am using typescript, redux for state management, 
less, react-router etc.


## How it works ? 
The react application needs an entry point, so inside the declaration of 
the razor pages, you need to create a razor page, that will 'host'
our single page application.
In this case, inside **Pages** folder , i have created a page called **ReactApp**.
This page will be the entry point of the React app.
It contains the html id attribute to wire up the react dom, and the script to import
the files that webpack has bundled. 
The id in this file needs to be the same as the id that the **ReactApp** 
uses inside **index.tsx**.

Another thing to consider is the fallback, that happens inside Startup.cs

```           
app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapFallbackToPage("/reactapp");
            });
```
It tells the host, in this case the .net application, to fallback to 
/reactapp for paths that are not defined in the razor pages.

The other configuration needed is done inside the ReactApp itself.
Webpack is needed to make the bundle.
Inside ReactApp, you will find the webpack configuration script 
```
webpack.config.js
```
I have added typescript, redux, react-router as well as less there.

Everything else is the same as in a regular react application.

# How to run it ? 
If you start the .netCore application, the react app will run too,
(because they are hosted in the same space).
To develop, you need to go to
```
cd ReactApp
npm start
```
Webpack will do the magic and watch for changes in the react app.
