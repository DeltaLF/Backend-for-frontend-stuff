# Backend-for-frontend-stuff

GraphQL backend server for frontend stuff repository  
Hoster: Render  
Schema registry: Apollographql  
Database: MongoDB Atlas

request from FE → Node express server on Render.com → resolver handles corresponding query or mutation → invoke method of datasource → update data in MongoDB Atlas → responds result to FE
