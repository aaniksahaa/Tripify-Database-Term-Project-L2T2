# Tripify

# Introduction

Discover, plan, and explore effortlessly with Tripify: the ultimate travel platform. Curate your ideal journey, connect with fellow adventurers, and unlock AI-powered trip guides. Elevate your travel experience with seamless bookings and personalized recommendations. Your gateway to limitless exploration.

# Contents

## 1. [How to Run](#how-to-run-1)
## 2. [Frontend - Demonstration](#tripify---frontend)
## 3. [Backend - API Documentation](#tripify---backend)

# How to Run

## Setting Up The Schema

1. Go to sqlplus and login with system username and password

2. Run the following four commands sequentially in sqlplus
```sql
CREATE USER c##tripify IDENTIFIED BY tripify;    
GRANT CONNECT, RESOURCE, DBA TO c##tripify;    
GRANT CREATE SESSION TO c##tripify;    
GRANT UNLIMITED TABLESPACE TO c##tripify;    
```
3. type disconnect
4. Now close sqlplus
5. Again go to sqlplus and login with system username and password
6. type conn
7. Enter username: c##tripify
8. Enter password: tripify
9. Just for testing, create this table,
```sql
CREATE TABLE Hotels (
 id INTEGER PRIMARY KEY,
 name VARCHAR(20)
);
```
10. Insert this data
```sql
INSERT INTO Hotels VALUES(1,'Mountain View');
```
11. Test whether the data have been inserted properly.
```sql
SELECT * FROM HOTELS;
```
12. Now drop that test table
```sql
DROP TABLE HOTELS;
```
13. Close sqlplus
14. Go to Navicat, New Oracle connection, type above username and password in 
the place of 'hr' and 'hr' that we previously wrote for setting up HR schema.

16. Now Set up the database as per the following specification.
```
Go to the directory ``backend/sqldump/master_dump``.
If your are setting the database for the first time, run ``dump_first_time.sql``
Otherwise, run ``dump_any_time_later.sql``
```
17. For running the queries, just create query files of same names in Navicat and copy the content.

## Setting Up The Project Directory

#### 1. First clone the repository.
#### 2. Open the Directory on VS Code and Open a new terminal. Click split terminal so that you may run frontend and backend both with convenience.
#### 3. On one terminal, head over to the backend, install the dependencies and run the server.
```
cd backend
```
```
npm i
```
```
npm start
```
#### 4. On the other terminal, head over to the frontend, install the dependencies and run the client.
```
cd frontend
```
```
npm i
```
```
npm run dev
```
#### 5. Click on the localhost link that pops up on the client terminal.
#### 6. You may also test the API separately on Postman or anything similar.   

![Screenshot (115)](https://github.com/aaniksahaa/Tripify/assets/63545621/6328d778-7d29-4fb5-b8fa-83f15ade4d2e)

## Data Generation (Optional)

1. Go to the directory ``backend/data_generators``
2. First Run ``master_generator.py``
3. Then run ``sql_generator.py``
4. The generator large_insert.sql file will be in the directory ``backend/data_generators/sql``
5. You may control data generation parameters in ``config.py``

# Tripify - Frontend

## Demonstration:

## 1. Hotels Dashboard

![Screenshot (111)](https://github.com/aaniksahaa/Tripify/assets/63545621/746fd124-0870-4def-a88a-b4599988c033)

## 2. Hotel Viewer ( Dark Mode )

![Screenshot (114)](https://github.com/aaniksahaa/Tripify/assets/63545621/869ae9c7-5e93-412d-bbb5-9f285a278169)

## 3. User Dashboard ( Dark Mode )

![Screenshot (112)](https://github.com/aaniksahaa/Tripify/assets/63545621/24b2c4a0-4229-4c9e-b653-725efb6baf92)


# Tripify - Backend 

# Tripify API Documentation

# API Endpoints
The API Endpoints belong to  major routes. The routes are as follows:   

## [Login](#login-1)
## [User](#user-1)
## [City](#city-1)
## [Destination](#destination-1)
## [Activity](#activity-1)
## [Trip](#trip-1)
## [Hotel](#hotel-1)
## [Restaurant](#restaurant-1)
## [Flight](#flight-1)
## [Review](#review-1)
## [TripBooking](#tripbooking-1)
## [Post](#post-1)
## [Comment](#comment-1)
## [Feed](#feed-1)
## [Stat](#stat-1)

The respective API endpoints are as follows:    

# Login

## a. Login with username and password

Endpoint URL:    
```
POST
```
```
/api/v1/login
```  
Request Body: 
```json
{
    "username": "aaniksahaa",
    "password": "123"
}
```
Example Response:    
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhbmlrc2FoYWEiLCJpZCI6MSwiaWF0IjoxNjkxMDk1MjQ4fQ.40HbWfyXnqH9-rZ-bscoRykL0wJW_qDuyaAE-6EkMDw",
    "user": {
        "user_id": 1,
        "username": "aaniksahaa",
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-03T07:32:21.000Z",
        "status": "active",
        "created_on": "2023-08-03T07:32:21.000Z",
        "last_updated_on": "2023-08-03T07:32:21.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```

# User

## a. Get Single User by user_id

Endpoint URL:    
```
GET
```
```
/api/v1/user/1
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "user_id": 1,
    "email": "abc@gmail.com",
    "password_hash": "123",
    "role": "client",
    "name": "Anik Saha",
    "bio": "Little Coder",
    "city_id": 1,
    "facebook_url": "facebook.com/abc",
    "twitter_url": "twitter.com/abc",
    "instagram_url": "instagram.com/abc",
    "profile_picture": "dummy.jpg",
    "dob": "2002-09-16T18:00:00.000Z",
    "registration_date": "2023-08-01T10:46:19.000Z",
    "status": "active",
    "created_on": "2023-08-01T10:46:19.000Z",
    "last_updated_on": "2023-08-01T10:46:19.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```

## b. Get Users by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/user?name=e&city_id=1,2,3&min_age=5&max_age=92&page=1&per_page=3&orderby=name&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "user_id": 7,
        "email": "12@example.com",
        "password_hash": "hashed_password",
        "role": "user",
        "name": "Newton",
        "bio": "I love traveling and exploring new places.",
        "city_id": 1,
        "facebook_url": "https://www.facebook.com/johndoe",
        "twitter_url": "https://twitter.com/johndoe",
        "instagram_url": "https://www.instagram.com/johndoe",
        "profile_picture": "https://example.com/profile_picture.jpg",
        "dob": "2010-05-14T18:00:00.000Z",
        "registration_date": "2023-08-01T12:25:51.000Z",
        "status": "active",
        "created_on": "2023-08-01T12:25:51.000Z",
        "last_updated_on": "2023-08-01T12:25:51.000Z"
    },
    {
        "user_id": 1,
        "email": "changed_email@example.com",
        "password_hash": "hashed_password",
        "role": "user",
        "name": "John Doe",
        "bio": "I love traveling and exploring new places.",
        "city_id": 1,
        "facebook_url": "https://www.facebook.com/johndoe",
        "twitter_url": "https://twitter.com/johndoe",
        "instagram_url": "https://www.instagram.com/johndoe",
        "profile_picture": "https://example.com/profile_picture.jpg",
        "dob": "1990-05-14T18:00:00.000Z",
        "registration_date": "2023-08-01T10:46:19.000Z",
        "status": "active",
        "created_on": "2023-08-01T10:46:19.000Z",
        "last_updated_on": "2023-08-01T11:46:58.000Z"
    },
    {
        "user_id": 2,
        "email": "xyz@gmail.com",
        "password_hash": "456",
        "role": "client",
        "name": "Jaber Ahmed Deeder",
        "bio": "Pro Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/xyz",
        "twitter_url": "twitter.com/xyz",
        "instagram_url": "instagram.com/xyz",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-01T10:46:19.000Z",
        "status": "active",
        "created_on": "2023-08-01T10:46:19.000Z",
        "last_updated_on": "2023-08-01T10:46:19.000Z"
    }
]
```

## c. Create New User
### These five attributes are mandatory
Endpoint URL: 
```
POST
```
```
/api/v1/user/
```  
Request Body:    
```json
{
    "username": "john_buet",
    "email": "example@example.com",
    "password": "123",
    "name": "John Doe",
    "dob": "1990-05-15"
}
```
Example Response:  
```json
{
    "user_id": 11,
    "username": "john_buet",
    "email": "example@example.com",
    "role": "client",
    "name": "John Doe",
    "bio": "Hey! I am using Tripify",
    "city_id": 0,
    "facebook_url": "https://www.facebook.com/leomessi",
    "twitter_url": "https://twitter.com/imessi",
    "instagram_url": "https://www.instagram.com/leomessi",
    "profile_picture": "https://avatars.dicebear.com/api/avataaars/avatar.svg",
    "dob": "1990-05-14T18:00:00.000Z",
    "registration_date": "2023-08-03T08:37:53.000Z",
    "status": "active",
    "created_on": "2023-08-03T08:37:53.000Z",
    "last_updated_on": "2023-08-03T08:37:53.000Z",
    "city": {
        "city_id": 0,
        "name": "Dummy",
        "country_name": "Dummy",
        "population": 0,
        "weather_type": "sunny"
    }
}
```
## d. Update a User
### If a user is also a guide, just include the substring 'guide' in his role...
### Here all attributes are mandatory except for password, you may include or omit the password from the request body
Endpoint URL: 
```
PUT
```
```
/api/v1/user/
```  
Request Body:    
```json
{
    "user_id":10,
    "username": "cooljohn",
    "password": "my_new_password",
    "email": "changed@example.com",
    "role": "user,guide,new",
    "name": "John Doe",
    "bio": "I love traveling and exploring new places.",
    "city_id": 1,
    "facebook_url": "https://www.facebook.com/johndoe",
    "twitter_url": "https://twitter.com/johndoe",
    "instagram_url": "https://www.instagram.com/johndoe",
    "profile_picture": "https://example.com/profile_picture.jpg",
    "dob": "1990-05-15"
}
```
Example Response:  
```json
{
    "user_id": 10,
    "username": "cooljohn",
    "email": "changed@example.com",
    "role": "user,guide,new",
    "name": "John Doe",
    "bio": "I love traveling and exploring new places.",
    "city_id": 1,
    "facebook_url": "https://www.facebook.com/johndoe",
    "twitter_url": "https://twitter.com/johndoe",
    "instagram_url": "https://www.instagram.com/johndoe",
    "profile_picture": "https://example.com/profile_picture.jpg",
    "dob": "1990-05-14T18:00:00.000Z",
    "registration_date": "2023-08-03T08:12:59.000Z",
    "status": "active",
    "created_on": "2023-08-03T08:12:59.000Z",
    "last_updated_on": "2023-08-03T08:35:06.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```

## e. Delete a User ( Soft Delete )

Endpoint URL:  
```
DELETE
```
```
api/v1/user/4
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "user_id": 4,
    "email": "example@example.com",
    "password_hash": "hashed_password",
    "role": "user",
    "name": "John Doe",
    "bio": "I love traveling and exploring new places.",
    "city_id": 1,
    "facebook_url": "https://www.facebook.com/johndoe",
    "twitter_url": "https://twitter.com/johndoe",
    "instagram_url": "https://www.instagram.com/johndoe",
    "profile_picture": "https://example.com/profile_picture.jpg",
    "dob": "1990-05-14T18:00:00.000Z",
    "registration_date": "2023-08-01T11:37:45.000Z",
    "status": "active",
    "created_on": "2023-08-01T11:37:45.000Z",
    "last_updated_on": "2023-08-01T11:37:45.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```

## f. Delete a User ( Permanent Delete )

Endpoint URL:
```
DELETE
```
```
/api/v1/user/danger/5
``` 
Request Body: `None`    
Example Response:    
```json
{
    "user_id": "5",
    "status": "permanently deleted"
}
```

## g. Following a User
Endpoint URL: 
```
POST
```
```
/api/v1/user/2/follow/1
```  
Request Body:    
```
None
```
Example Response:  
```json
{
    "follower_id": 2,
    "followee_id": 1,
    "since_date": "2023-08-02T17:22:34.000Z"
}
```

## h. Unfollowing a User
Endpoint URL: 
```
DELETE
```
```
/api/v1/user/2/follow/1
```  
Request Body:    
```
None
```
Example Response:  
```json
{
    "follower_id": "2",
    "followee_id": "1",
    "message": "unfollowed"
}
```
## i. Making an object Favorite
Endpoint URL: 
```
POST
```
```
/api/v1/user/1/favorite/2
```  
Request Body:    
```
{
    "object_type": "hotel"
}
```
Example Response:  
```json
{
    "user_id": 1,
    "object_type": "hotel",
    "object_id": 2,
    "added_on": "2023-08-03T21:46:15.000Z"
}
```

## j. Removing Favorite from an object
Endpoint URL: 
```
DELETE
```
```
/api/v1/user/1/favorite/2
```  
Request Body:    
```
{
    "object_type": "hotel"
}
```
Example Response:  
```json
{
    "user_id": 1,
    "object_type": "hotel",
    "object_id": 2,
    "added_on": "2023-08-03T21:46:15.000Z"
}
```

## k. Get User Profile

Endpoint URL:    
```
GET
```
```
/api/v1/user/1/profile?page=1&per_page=3
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "user_id": 1,
    "username": "aaniksahaa",
    "email": "abc@gmail.com",
    "role": "client",
    "name": "Anik Saha",
    "bio": "Little Coder",
    "city_id": 1,
    "facebook_url": "facebook.com/abc",
    "twitter_url": "twitter.com/abc",
    "instagram_url": "instagram.com/abc",
    "profile_picture": "dummy.jpg",
    "dob": "2002-09-16T18:00:00.000Z",
    "registration_date": "2023-08-24T23:04:05.000Z",
    "status": "active",
    "created_on": "2023-08-24T23:04:05.000Z",
    "last_updated_on": "2023-08-24T23:04:05.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    },
    "followee_count": 5,
    "follower_count": 2,
    "hotels_created": [],
    "restaurants_created": [],
    "trips_created": [
        {
            "trip_id": 1,
            "from_city_id": 1,
            "to_city_id": 2,
            "from_city_name": "Dhaka",
            "to_city_name": "Chittagong",
            "name": "Summer Vacation in Paris",
            "description": "Enjoy the charm of Paris in summer",
            "image_url": "paris_summer.jpg",
            "total_price": 212557,
            "start_date": "2023-06-30T18:00:00.000Z",
            "end_date": "2023-07-24T18:00:00.000Z",
            "creator_user_id": 1,
            "created_on": "2023-08-24T23:04:16.000Z",
            "last_updated_on": "2023-08-24T23:04:16.000Z",
            "deleted_on": null,
            "rating_info": {
                "rating_1": 0,
                "rating_2": 13,
                "rating_3": 5,
                "rating_4": 9,
                "rating_5": 11,
                "rating_avg": 3.47
            },
            "images": null
        },
        {
            "trip_id": 4,
            "from_city_id": 11,
            "to_city_id": 12,
            "from_city_name": "Gazipur",
            "to_city_name": "Feni",
            "name": "Coastal Odyssey",
            "description": "Embark on a thrilling journey of discovery and relaxation, exploring both natures wonders and vibrant city life.",
            "image_url": "dummy.jpg",
            "total_price": 69005,
            "start_date": "2023-08-15T18:00:00.000Z",
            "end_date": "2023-09-01T18:00:00.000Z",
            "creator_user_id": 1,
            "created_on": "2023-08-24T23:04:16.000Z",
            "last_updated_on": "2023-08-24T23:04:16.000Z",
            "deleted_on": null,
            "rating_info": {
                "rating_1": 0,
                "rating_2": 6,
                "rating_3": 12,
                "rating_4": 8,
                "rating_5": 3,
                "rating_avg": 3.28
            },
            "images": null
        },
        {
            "trip_id": 5,
            "from_city_id": 15,
            "to_city_id": 4,
            "from_city_name": "Bandarban",
            "to_city_name": "Rajshahi",
            "name": "Historical Journey",
            "description": "Get ready for an eco-friendly escapade, where youll connect with nature and support sustainable tourism.",
            "image_url": "dummy.jpg",
            "total_price": 118210,
            "start_date": "2023-08-17T18:00:00.000Z",
            "end_date": "2023-08-29T18:00:00.000Z",
            "creator_user_id": 1,
            "created_on": "2023-08-24T23:04:16.000Z",
            "last_updated_on": "2023-08-24T23:04:16.000Z",
            "deleted_on": null,
            "rating_info": {
                "rating_1": 0,
                "rating_2": 16,
                "rating_3": 9,
                "rating_4": 5,
                "rating_5": 10,
                "rating_avg": 3.23
            },
            "images": null
        }
    ],
    "reviews_created": [
        {
            "review_id": 820,
            "user_id": 1,
            "posting_date": "2023-08-24T23:04:21.000Z",
            "description": "From relaxing breathtaking sights to savoring exquisite cuisines at gourmet restaurants, my breathtaking trip was enriched by a enthusiastic storytellers who shared fascinating insights.",
            "rating": 4,
            "image_url": "dummy.jpg",
            "upvote_count": 0,
            "object": {
                "object_type": "trip",
                "object_id": 3
            },
            "user": {
                "user_id": 1,
                "username": "aaniksahaa",
                "email": "abc@gmail.com",
                "role": "client",
                "name": "Anik Saha",
                "bio": "Little Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/abc",
                "twitter_url": "twitter.com/abc",
                "instagram_url": "instagram.com/abc",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-24T23:04:05.000Z",
                "status": "active",
                "created_on": "2023-08-24T23:04:05.000Z",
                "last_updated_on": "2023-08-24T23:04:05.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        },
        {
            "review_id": 822,
            "user_id": 1,
            "posting_date": "2023-08-24T23:04:21.000Z",
            "description": "Prompt and helpful responses from the front desk improved our overall experience. Central location made it easy to explore the city. Timely wake-up calls assisted our daily schedule. Regular housekeeping maintained a clean and organized environment. Luxurious amenities provided a pampering experience.",
            "rating": 3,
            "image_url": "dummy.jpg",
            "upvote_count": 0,
            "object": {
                "object_type": "hotel",
                "object_id": 6
            },
            "user": {
                "user_id": 1,
                "username": "aaniksahaa",
                "email": "abc@gmail.com",
                "role": "client",
                "name": "Anik Saha",
                "bio": "Little Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/abc",
                "twitter_url": "twitter.com/abc",
                "instagram_url": "instagram.com/abc",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-24T23:04:05.000Z",
                "status": "active",
                "created_on": "2023-08-24T23:04:05.000Z",
                "last_updated_on": "2023-08-24T23:04:05.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        },
        {
            "review_id": 821,
            "user_id": 1,
            "posting_date": "2023-08-24T23:04:21.000Z",
            "description": "Inventive plating made each dish a work of art. Indulgent desserts provided a perfect ending. Aromatic spices elevated every dish. Thoughtful attention to dietary needs was appreciated.",
            "rating": 2,
            "image_url": "dummy.jpg",
            "upvote_count": 0,
            "object": {
                "object_type": "restaurant",
                "object_id": 2
            },
            "user": {
                "user_id": 1,
                "username": "aaniksahaa",
                "email": "abc@gmail.com",
                "role": "client",
                "name": "Anik Saha",
                "bio": "Little Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/abc",
                "twitter_url": "twitter.com/abc",
                "instagram_url": "instagram.com/abc",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-24T23:04:05.000Z",
                "status": "active",
                "created_on": "2023-08-24T23:04:05.000Z",
                "last_updated_on": "2023-08-24T23:04:05.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        }
    ],
    "flights_created": [],
    "trip_bookings_created": [],
    "activities_created": [],
    "destinations_created": [],
    "posts_created": [
        {
            "post_id": 2,
            "user_id": 1,
            "posting_date": "2023-08-25T06:13:46.000Z",
            "description": "New Amazing Post",
            "image_url": "new-amazing.jpg",
            "comments": [],
            "reacts": []
        },
        {
            "post_id": 1,
            "user_id": 1,
            "posting_date": "2023-08-25T06:13:23.000Z",
            "description": "Amazing Post",
            "image_url": "amazing.jpg",
            "comments": [],
            "reacts": []
        }
    ]
}
```
# City

## a. Get Single City by city_id

Endpoint URL: 
```
GET
```
```
/api/v1/city/1
``` 
Request Body: 
```
None
```
Example Response:    
```json
{
    "city_id": 1,
    "name": "Dhaka",
    "country_name": "Bangladesh",
    "population": 168957745,
    "weather_type": "rainy"
}
```

## b. Get Cities by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL: 
```
GET
```
```
/api/v1/city?name=a&country_name=ban&population_min=1000000&population_max=231231231&weather_type=rainy&orderby=population&ordertype=desc&page=1&per_page=10
``` 
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    },
    {
        "city_id": 3,
        "name": "Khulna",
        "country_name": "Bangladesh",
        "population": 15563000,
        "weather_type": "rainy"
    },
    {
        "city_id": 9,
        "name": "Barisal",
        "country_name": "Bangladesh",
        "population": 3393084,
        "weather_type": "rainy"
    }
]
```
## c. Create New City

Endpoint URL:
```
POST
```
```
/api/v1/city/
```  
Request Body:    
```json
{
    "name": "Savar",
    "country_name": "Bangladesh",
    "population": 957745,
    "weather_type": "rainy"
}
```
Example Response:  
```json
{
    "city_id": 32,
    "name": "Savar",
    "country_name": "Bangladesh",
    "population": 957745,
    "weather_type": "rainy"
}
```
## d. Update a City
Endpoint URL: 
```
PUT
```
```
/api/v1/city/
```  
Request Body:    
```json
{
  "city_id": 32,
  "name": "New Savar",
  "country_name": "Bangladesh",
  "population": 1500000,
  "weather_type": "sunny"
}
```
Example Response:  
```json
{
    "city_id": 32,
    "name": "New Savar",
    "country_name": "Bangladesh",
    "population": 1500000,
    "weather_type": "sunny"
}
```

## e. Delete a City

Endpoint URL:  
```
DELETE
```
```
/api/v1/city/32
```
Request Body: 
```
None
```
Example Response:    
```json
{
    "city_id": 32,
    "name": "New Savar",
    "country_name": "Bangladesh",
    "population": 1500000,
    "weather_type": "sunny"
}
```


# Destination

## a. Get Single Destination by destination_id

Endpoint URL:    
```
GET
```
```
/api/v1/destination/1
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "destination_id": 1,
    "name": "Ahsan Manzil",
    "address": "Bangsha Road, Old Dhaka",
    "city_id": 1,
    "latitude": 23.7104,
    "longitude": 90.4074,
    "description": "Ahsan Manzil, also known as Pink Palace, is a historic mansion and museum in Dhaka.",
    "image_url": "ahsan_manzil.jpg",
    "created_on": "2023-08-24T20:53:16.000Z",
    "last_updated_on": "2023-08-24T20:53:16.000Z",
    "creator_user_id": 0,
    "activities": [
        {
            "activity_id": 1,
            "price": 500,
            "activity": {
                "activity_id": 1,
                "name": "Boat Tour",
                "category": "Adventure",
                "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
                "image_url": "boat_tour.jpg",
                "min_age": 8,
                "max_age": 60,
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:21.000Z",
                "last_updated_on": "2023-08-24T20:53:21.000Z",
                "images": [
                    "https://cdn.getyourguide.com/img/tour/5cb3c36a97f0d.jpeg/148.jpg",
                    "https://images.myguide-cdn.com/perth/companies/rottnest-island-day-trip-by-ferry-adventure-boat-tour/large/rottnest-island-day-trip-by-ferry-adventure-boat-tour-560869.jpg",
                    "https://images.tripshock.com/activity/2761/1080x1080/Thriller-Miami-Speedboat-Tours.jpg",
                    "https://fallsmeetings.com/wp-content/uploads/2017/04/Boat8.jpg"
                ]
            }
        },
        {
            "activity_id": 4,
            "price": 50,
            "activity": {
                "activity_id": 4,
                "name": "Cultural Tour",
                "category": "Culture",
                "description": "Immerse in the local culture and traditions with a guided cultural tour.",
                "image_url": "cultural_tour.jpg",
                "min_age": 15,
                "max_age": 65,
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:21.000Z",
                "last_updated_on": "2023-08-24T20:53:21.000Z",
                "images": [
                    "https://asahitreks.com/wp-content/uploads/2017/04/Cultural-Tour-in-Nepal-3.jpg",
                    "https://www.shikhar.com/images/gallery/tours/117/2.jpg",
                    "https://www.shikhar.com/blog/wp-content/uploads/2017/08/893_11.jpg",
                    "https://asahitreks.com/wp-content/uploads/2017/04/Cultural-Tour-in-Nepal-800x420.jpg"
                ]
            }
        },
        {
            "activity_id": 6,
            "price": 200,
            "activity": {
                "activity_id": 6,
                "name": "Wildlife Safari",
                "category": "Adventure",
                "description": "Embark on a thrilling wildlife safari and spot exotic animals.",
                "image_url": "wildlife_safari.jpg",
                "min_age": 18,
                "max_age": 60,
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:21.000Z",
                "last_updated_on": "2023-08-24T20:53:21.000Z",
                "images": [
                    "https://www.ngorongorocratertanzania.org/wp-content/uploads/2020/10/5-Days-Best-of-Tanzania-Wildlife-Safari.jpg",
                    "https://www.expertafrica.com/images/background-image/d8aaade7bbcd42d4a0a39588bbf4aa7d-1600.jpg",
                    "https://www.serengetiparktanzania.com/wp-content/uploads/2020/11/7-Days-Tanzania-Wildlife-Safaris.jpg",
                    "https://www.expertafrica.com/images/background-image/01a037ba6e6b403a8c6cfe4d64a249f0-1600.jpg"
                ]
            }
        }
    ],
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    },
    "images": [
        "https://www.citytravelerbd.com/wp-content/uploads/2020/01/Ahsan_Manzil-Front_View.jpg",
        "https://2.bp.blogspot.com/-yrHnrrhqAQ0/Vs9-riUHavI/AAAAAAAACRY/JE2bdRmk27U/s1600/Ahsan-Manzil.jpg",
        "https://i.ytimg.com/vi/3Nqg5jAsiVU/maxresdefault.jpg",
        "https://4.bp.blogspot.com/-alMqK8AGxiQ/VrwxVfzAkSI/AAAAAAAAAb0/2Q4Y5_rTou0/s1600/Ahsan_Manzil22-1140x641_c.jpg"
    ]
}
```

## b. Get Destinations by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/destination?name=e&address=dhaka&city_id=1,2,3&page=2&per_page=2&orderby=name&ordertype=asc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "destination_id": 9,
        "name": "Bangabandhu Memorial Museum",
        "address": "Dhanmondi, Dhaka",
        "city_id": 1,
        "latitude": 23.7465,
        "longitude": 90.3863,
        "description": "This museum is dedicated to Sheikh Mujibur Rahman, the founding father of Bangladesh.",
        "image_url": "bangabandhu_museum.jpg",
        "created_on": "2023-08-24T20:53:17.000Z",
        "last_updated_on": "2023-08-24T20:53:17.000Z",
        "creator_user_id": 0,
        "activities": [
            {
                "activity_id": 2,
                "price": 350,
                "activity": {
                    "activity_id": 2,
                    "name": "Hiking",
                    "category": "Adventure",
                    "description": "Embark on a thrilling hiking adventure amidst picturesque hills.",
                    "image_url": "hiking.jpg",
                    "min_age": 12,
                    "max_age": 55,
                    "creator_user_id": 0,
                    "created_on": "2023-08-24T20:53:21.000Z",
                    "last_updated_on": "2023-08-24T20:53:21.000Z",
                    "images": [
                        "https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/10/best-hiking-trails-canada-1024x683.jpg",
                        "http://www.lilkickerschicago.com/wp-content/uploads/2019/06/dawn-view-1200.jpg",
                        "https://all.accor.com/middleware/media/1385716182466/1618327327711/hiking.jpg",
                        "https://www.explore-mag.com/media/image/57291.jpg"
                    ]
                }
            },
            {
                "activity_id": 5,
                "price": 350,
                "activity": {
                    "activity_id": 5,
                    "name": "Historical Sites Visit",
                    "category": "Culture",
                    "description": "Explore ancient historical sites and learn about their rich history.",
                    "image_url": "historical_sites.jpg",
                    "min_age": 12,
                    "max_age": 70,
                    "creator_user_id": 0,
                    "created_on": "2023-08-24T20:53:21.000Z",
                    "last_updated_on": "2023-08-24T20:53:21.000Z",
                    "images": [
                        "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/Taj-Mahal.jpg",
                        "https://worldinsidepictures.com/wp-content/uploads/2013/10/7-1024x682.jpg",
                        "https://yehaindia.com/wp-content/uploads/2019/05/tajmahal-garden.jpg",
                        "https://www.tripsavvy.com/thmb/Vm-xdyjrWpZiQgtV-rVbd7EsUBk=/2125x1416/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-580758423-56c6ab0c3df78cfb37860807.jpg"
                    ]
                }
            },
            {
                "activity_id": 15,
                "price": 350,
                "activity": {
                    "activity_id": 15,
                    "name": "Yoga Retreat",
                    "category": "Relaxation",
                    "description": "Rejuvenate your mind and body with a peaceful yoga retreat.",
                    "image_url": "yoga_retreat.jpg",
                    "min_age": 20,
                    "max_age": 70,
                    "creator_user_id": 0,
                    "created_on": "2023-08-24T20:53:21.000Z",
                    "last_updated_on": "2023-08-24T20:53:21.000Z",
                    "images": [
                        "https://bookretreats.com/blog/wp-content/uploads/2020/11/1000_1603815965.jpg",
                        "https://magazine.bluekarmasecrets.com/wp-content/uploads/2019/10/retreatbox4.jpg",
                        "https://retreatmehappy.com/wp-content/uploads/2019/10/Yoga-Retreat-e1574557062145.jpg",
                        "https://breathingtravel.com/wp-content/uploads/2020/05/Yoga-retreat-Australia.jpg"
                    ]
                }
            }
        ],
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        },
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/05/f3/69/85/bangabandhu-museum-terrace.jpg",
            "https://i.pinimg.com/originals/e9/a7/e9/e9a7e99e45360d1618333636957d15ff.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/8e/84/89/bangabandhu-memorial.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/05/f3/69/86/bangabandhu-museum-entrance.jpg"
        ]
    },
    {
        "destination_id": 18,
        "name": "Bangladesh Liberation War Museum",
        "address": "Agargaon, Dhaka",
        "city_id": 1,
        "latitude": 23.7745,
        "longitude": 90.3641,
        "description": "This museum commemorates the Liberation War of Bangladesh with historical artifacts.",
        "image_url": "liberation_war_museum.jpg",
        "created_on": "2023-08-24T20:53:17.000Z",
        "last_updated_on": "2023-08-24T20:53:17.000Z",
        "creator_user_id": 0,
        "activities": [
            {
                "activity_id": 2,
                "price": 300,
                "activity": {
                    "activity_id": 2,
                    "name": "Hiking",
                    "category": "Adventure",
                    "description": "Embark on a thrilling hiking adventure amidst picturesque hills.",
                    "image_url": "hiking.jpg",
                    "min_age": 12,
                    "max_age": 55,
                    "creator_user_id": 0,
                    "created_on": "2023-08-24T20:53:21.000Z",
                    "last_updated_on": "2023-08-24T20:53:21.000Z",
                    "images": [
                        "https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/10/best-hiking-trails-canada-1024x683.jpg",
                        "http://www.lilkickerschicago.com/wp-content/uploads/2019/06/dawn-view-1200.jpg",
                        "https://all.accor.com/middleware/media/1385716182466/1618327327711/hiking.jpg",
                        "https://www.explore-mag.com/media/image/57291.jpg"
                    ]
                }
            },
            {
                "activity_id": 9,
                "price": 50,
                "activity": {
                    "activity_id": 9,
                    "name": "Water Sports",
                    "category": "Adventure",
                    "description": "Indulge in various water sports activities like jet skiing, parasailing, and more.",
                    "image_url": "water_sports.jpg",
                    "min_age": 16,
                    "max_age": 55,
                    "creator_user_id": 0,
                    "created_on": "2023-08-24T20:53:21.000Z",
                    "last_updated_on": "2023-08-24T20:53:21.000Z",
                    "images": [
                        "https://nomadparadise.com/wp-content/uploads/2020/08/water-sports-flyboard-flying.jpg",
                        "https://www.tripsavvy.com/thmb/3sYPZPdIbNedmJj501qXWO7mCeE=/1261x835/filters:no_upscale():max_bytes(150000):strip_icc()/KorisRamos-56a34e515f9b58b7d0d16646.jpg",
                        "https://multimedia.andalucia.org/media/80B4B346BD45484497680DC1229FE4F7/img/C43F415C44C0474A85D70F0F5BEE8CAC/CA_Tarifa_Playa_Valdevaqueros_11.jpg?responsive",
                        "https://hellscanyon.tours/wp-content/uploads/2021/06/RiverAdventuresInc-73025-Water-Sports-Summer-image1-scaled.jpg"
                    ]
                }
            },
            {
                "activity_id": 12,
                "price": 350,
                "activity": {
                    "activity_id": 12,
                    "name": "Fishing Adventure",
                    "category": "Adventure",
                    "description": "Go on a fishing expedition and test your angling skills.",
                    "image_url": "fishing_adventure.jpg",
                    "min_age": 10,
                    "max_age": 65,
                    "creator_user_id": 0,
                    "created_on": "2023-08-24T20:53:21.000Z",
                    "last_updated_on": "2023-08-24T20:53:21.000Z",
                    "images": [
                        "https://gametrex.com/wp-content/uploads/2019/12/Fishing-Adventure-Free-Download-1200x675.jpg",
                        "https://cdn.akamai.steamstatic.com/steam/apps/1101140/capsule_616x353.jpg?t=1602851078",
                        "https://outdooradventurelife.com/wp-content/uploads/2020/10/fishing-2.jpg",
                        "https://i.ytimg.com/vi/UmmmTfU1npY/maxresdefault.jpg"
                    ]
                }
            }
        ],
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        },
        "images": [
            "https://c8.alamy.com/comp/2DE5E1P/dhaka-bangladesh-november-27-2020-the-liberation-war-museum-is-a-museum-in-sher-e-bangla-nagar-in-dhaka-bangladesh-which-commemorates-the-bangl-2DE5E1P.jpg",
            "https://i.ytimg.com/vi/1jbcIooYUBQ/maxresdefault.jpg",
            "https://c8.alamy.com/comp/2DE5E2K/dhaka-bangladesh-november-27-2020-the-liberation-war-museum-is-a-museum-in-sher-e-bangla-nagar-in-dhaka-bangladesh-which-commemorates-the-bangl-2DE5E2K.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/66/eb/81/newly-built-liberation.jpg?w=1200&h=-1&s=1"
        ]
    }
]
```

## c. Create New Destination

Endpoint URL: 
```
POST
```
```
/api/v1/destination/
```  
Request Body:    
```json
{
    "name": "Shishu Park",
    "address": "Ramna, Dhaka",
    "city_id": 1,
    "latitude": 23.7104,
    "longitude": 90.4074,
    "description": "Shishu Park is a fantastic place for children in Dhaka.",
    "image_url": "dummy.jpg",
    "activities": [
        {
            "activity_id": 1,
            "price": 50
        },
        {
            "activity_id": 33,
            "price": 100
        }
    ]
}
```
Example Response:  
```json
{
    "destination_id": 83,
    "name": "Shishu Park",
    "address": "Ramna, Dhaka",
    "city_id": 1,
    "latitude": 23.7104,
    "longitude": 90.4074,
    "description": "Shishu Park is a fantastic place for children in Dhaka.",
    "image_url": "dummy.jpg",
    "created_on": "2023-08-01T19:24:43.000Z",
    "last_updated_on": "2023-08-01T19:24:43.000Z",
    "activities": [
        {
            "activity_id": 1,
            "price": 50,
            "activity": {
                "activity_id": 1,
                "name": "Boat Tour",
                "category": "Adventure",
                "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
                "image_url": "boat_tour.jpg",
                "min_age": 8,
                "max_age": 60
            }
        },
        {
            "activity_id": 33,
            "price": 100,
            "activity": {
                "activity_id": 33,
                "name": "Gardens and Parks",
                "category": "Adventure",
                "description": "Relax and take a leisurely stroll in beautiful gardens and parks.",
                "image_url": "gardens_parks.jpg",
                "min_age": 5,
                "max_age": 80
            }
        }
    ],
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```
## d. Update a Destination
Endpoint URL: 
```
PUT
```
```
/api/v1/destination/
```  
Request Body:    
```json
{
    "destination_id":1,
    "name": "New Magnificent Ahsan Manzil",
    "address": "Bangsha Road, Old Dhaka",
    "city_id": 1,
    "latitude": 23.7104,
    "longitude": 90.4074,
    "description": "Ahsan Manzil, also known as Pink Palace, is a historic mansion and museum in Dhaka.",
    "image_url": "dummy.jpg",
    "activities": [
        {
            "activity_id": 4,
            "price": 250
        }
    ]
}
```
Example Response:  
```json
{
    "destination_id": 1,
    "name": "New Magnificent Ahsan Manzil",
    "address": "Bangsha Road, Old Dhaka",
    "city_id": 1,
    "latitude": 23.7104,
    "longitude": 90.4074,
    "description": "Ahsan Manzil, also known as Pink Palace, is a historic mansion and museum in Dhaka.",
    "image_url": "dummy.jpg",
    "created_on": "2023-08-01T10:46:19.000Z",
    "last_updated_on": "2023-08-01T19:29:24.000Z",
    "activities": [
        {
            "activity_id": 4,
            "price": 250,
            "activity": {
                "activity_id": 4,
                "name": "Cultural Tour",
                "category": "Culture",
                "description": "Immerse in the local culture and traditions with a guided cultural tour.",
                "image_url": "cultural_tour.jpg",
                "min_age": 15,
                "max_age": 65
            }
        }
    ],
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```

## e. Delete a Destination

Endpoint URL:  
```
DELETE
```
```
api/v1/destination/83
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "destination_id": 83,
    "name": "Shishu Park",
    "address": "Ramna, Dhaka",
    "city_id": 1,
    "latitude": 23.7104,
    "longitude": 90.4074,
    "description": "Shishu Park is a fantastic place for children in Dhaka.",
    "image_url": "dummy.jpg",
    "created_on": "2023-08-01T19:24:43.000Z",
    "last_updated_on": "2023-08-01T19:24:43.000Z",
    "activities": [
        {
            "activity_id": 1,
            "price": 50,
            "activity": {
                "activity_id": 1,
                "name": "Boat Tour",
                "category": "Adventure",
                "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
                "image_url": "boat_tour.jpg",
                "min_age": 8,
                "max_age": 60
            }
        },
        {
            "activity_id": 33,
            "price": 100,
            "activity": {
                "activity_id": 33,
                "name": "Gardens and Parks",
                "category": "Adventure",
                "description": "Relax and take a leisurely stroll in beautiful gardens and parks.",
                "image_url": "gardens_parks.jpg",
                "min_age": 5,
                "max_age": 80
            }
        }
    ],
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```

# Activity

## a. Get Single Activity by activity_id

Endpoint URL:    
```
GET
```
```
/api/v1/activity/1
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "activity_id": 1,
    "name": "Boat Tour",
    "category": "Adventure",
    "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
    "image_url": "boat_tour.jpg",
    "min_age": 8,
    "max_age": 60,
    "creator_user_id": 0,
    "created_on": "2023-08-24T20:53:21.000Z",
    "last_updated_on": "2023-08-24T20:53:21.000Z",
    "images": [
        "https://cdn.getyourguide.com/img/tour/5cb3c36a97f0d.jpeg/148.jpg",
        "https://images.myguide-cdn.com/perth/companies/rottnest-island-day-trip-by-ferry-adventure-boat-tour/large/rottnest-island-day-trip-by-ferry-adventure-boat-tour-560869.jpg",
        "https://images.tripshock.com/activity/2761/1080x1080/Thriller-Miami-Speedboat-Tours.jpg",
        "https://fallsmeetings.com/wp-content/uploads/2017/04/Boat8.jpg"
    ]
}
```

## b. Get Activities by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/activity?name=k&category=adventure&age=10&page=1&per_page=2&orderby=name&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "activity_id": 3,
        "name": "Snorkeling",
        "category": "Adventure",
        "description": "Discover the underwater world and vibrant marine life through snorkeling.",
        "image_url": "snorkeling.jpg",
        "min_age": 10,
        "max_age": 50,
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:21.000Z",
        "last_updated_on": "2023-08-24T20:53:21.000Z",
        "images": [
            "https://fthmb.tqn.com/XtDX5UROYmPakUeif3ahefihJoI=/1500x1050/filters:fill(auto,1)/SnorkelingWithKids_Getty-56effe365f9b5867a1c4bfb4.jpg",
            "https://www.crystalsandsonsiestakey.com/wp-content/uploads/2020/08/siesta-key-snorkeling.jpg",
            "https://diveukhurghada.co.uk/wp-content/uploads/2020/02/Snorkelling-1.jpg",
            "https://www.sandals.com/blog/content/images/2019/04/3_islandroutes_38-Adv-Eco.jpg"
        ]
    },
    {
        "activity_id": 7,
        "name": "Nature Walks",
        "category": "Adventure",
        "description": "Take peaceful walks in nature and enjoy the tranquility it offers.",
        "image_url": "nature_walks.jpg",
        "min_age": 8,
        "max_age": 65,
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:21.000Z",
        "last_updated_on": "2023-08-24T20:53:21.000Z",
        "images": [
            "https://www.naturalhealth365.com/wp-content/uploads/2020/04/nature-scaled.jpeg",
            "https://www.atlmentalhealth.com/wp-content/uploads/2021/01/nature-walk.jpg",
            "http://images.unsplash.com/photo-1559544948-da38a2615cb7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
            "https://yogafeststatecollege.com/wp-content/uploads/2017/09/Nature-Walk-900px.jpg"
        ]
    }
]
```

## c. Create New Activity

Endpoint URL: 
```
POST
```
```
/api/v1/activity/
```  
Request Body:    
```json
{
    "name": "Photography Session",
    "category": "Adventure",
    "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
    "image_url": "photo.jpg",
    "min_age": 5,
    "max_age": 90
}
```
Example Response:  
```json
{
    "activity_id": 52,
    "name": "Photography Session",
    "category": "Adventure",
    "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
    "image_url": "photo.jpg",
    "min_age": 5,
    "max_age": 90
}
```
## d. Update a Activity
Endpoint URL: 
```
PUT
```
```
/api/v1/activity/
```  
Request Body:    
```json
{
    "activity_id": 52,
    "name": "New Photography Session",
    "category": "Adventure",
    "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
    "image_url": "photo.jpg",
    "min_age": 5,
    "max_age": 90
}
```
Example Response:  
```json
{
    "activity_id": 52,
    "name": "New Photography Session",
    "category": "Adventure",
    "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
    "image_url": "photo.jpg",
    "min_age": 5,
    "max_age": 90
}
```

## e. Delete an Activity 

Endpoint URL:  
```
DELETE
```
```
api/v1/activity/52
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "activity_id": 52,
    "name": "New Photography Session",
    "category": "Adventure",
    "description": "Experience the breathtaking beauty of a boat tour in a mangrove forest.",
    "image_url": "photo.jpg",
    "min_age": 5,
    "max_age": 90
}
```

# Trip

## a. Get Single Trip by trip_id
Endpoint URL: 
```
GET
```
```
/api/v1/trip/4
```
Request Body: 
```
None
```
Example Response:    
```json
{
    "trip_id": 4,
    "from_city_id": 11,
    "to_city_id": 12,
    "from_city_name": "Gazipur",
    "to_city_name": "Feni",
    "name": "Coastal Odyssey",
    "description": "Embark on a thrilling journey of discovery and relaxation, exploring both natures wonders and vibrant city life.",
    "image_url": "dummy.jpg",
    "total_price": 69005,
    "start_date": "2023-08-15T18:00:00.000Z",
    "end_date": "2023-09-01T18:00:00.000Z",
    "creator_user_id": 1,
    "created_on": "2023-08-24T20:53:27.000Z",
    "last_updated_on": "2023-08-24T20:53:27.000Z",
    "deleted_on": null,
    "rating_info": {
        "rating_1": 0,
        "rating_2": 6,
        "rating_3": 12,
        "rating_4": 8,
        "rating_5": 3,
        "rating_avg": 3.28
    },
    "images": null
}
```

## b. Get Single Trip Details by trip_id
Endpoint URL: 
```
GET
```
```
/api/v1/trip/details/2
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "trip_id": 2,
    "from_city_id": 3,
    "to_city_id": 4,
    "from_city_name": "Khulna",
    "to_city_name": "Rajshahi",
    "name": "Adventure in the Himalayas",
    "description": "Experience thrilling adventure in the Himalayas",
    "image_url": "himalayas_adventure.jpg",
    "total_price": 192155,
    "start_date": "2023-08-09T18:00:00.000Z",
    "end_date": "2023-08-29T18:00:00.000Z",
    "creator_user_id": 2,
    "created_on": "2023-08-24T20:53:27.000Z",
    "last_updated_on": "2023-08-24T20:53:27.000Z",
    "deleted_on": null,
    "contains": [
        {
            "destination_id": 2,
            "destination_name": "Lalbagh Fort",
            "activity_id": 8,
            "activity_name": "Beach Relaxation",
            "price": 400,
            "tentative_date": "2023-08-14T18:00:00.000Z"
        },
        {
            "destination_id": 2,
            "destination_name": "Lalbagh Fort",
            "activity_id": 9,
            "activity_name": "Water Sports",
            "price": 150,
            "tentative_date": "2023-08-17T18:00:00.000Z"
        }
    ],
    "hotels": [
        {
            "hotel_id": 5,
            "checkin_date": "2023-08-09T18:00:00.000Z",
            "checkout_date": "2023-08-19T18:00:00.000Z",
            "hotel": {
                "hotel_id": 5,
                "name": "Best Western PLUS Maya",
                "address": "1 Sunset Boulevard Dhaka , Bangladesh",
                "city_id": 1,
                "description": "A Gracefully Spectacular hotel in Dhaka.",
                "image_url": "dummy.jpg",
                "price_per_day": 13357,
                "phone": "014573464154",
                "email": "best_western@gmail.com",
                "has_wifi": 1,
                "has_parking": 1,
                "has_gym": 0,
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:21.000Z",
                "last_updated_on": "2023-08-24T20:53:21.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                },
                "rating_info": {
                    "rating_1": 0,
                    "rating_2": 3,
                    "rating_3": 11,
                    "rating_4": 6,
                    "rating_5": 3,
                    "rating_avg": 3.39
                },
                "images": [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/00/1a/84/best-western-plus-maya.jpg?w=1500&h=1000&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/14/46/02/premium-room-2-single.jpg?w=1500&h=1000&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/14/46/01/standard-room.jpg?w=1500&h=1000&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/14/45/fd/executive-room.jpg?w=1500&h=1000&s=1"
                ]
            }
        },
        {
            "hotel_id": 8,
            "checkin_date": "2023-08-24T18:00:00.000Z",
            "checkout_date": "2023-08-29T18:00:00.000Z",
            "hotel": {
                "hotel_id": 8,
                "name": "Ascott Palace Dhaka",
                "address": "56 Lakeview Drive Dhaka , Bangladesh",
                "city_id": 1,
                "description": "A Exquisitely Seaside hotel in Dhaka.",
                "image_url": "dummy.jpg",
                "price_per_day": 11201,
                "phone": "013365955244",
                "email": "ascott_palace@outlook.com",
                "has_wifi": 1,
                "has_parking": 0,
                "has_gym": 0,
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:21.000Z",
                "last_updated_on": "2023-08-24T20:53:21.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                },
                "rating_info": {
                    "rating_1": 0,
                    "rating_2": 13,
                    "rating_3": 9,
                    "rating_4": 10,
                    "rating_5": 9,
                    "rating_avg": 3.37
                },
                "images": [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/30/46/ae/ascott-palace-limited.jpg?w=1500&h=1000&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/30/49/4a/ascott-palace-limited.jpg?w=1500&h=1000&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/30/49/38/ascott-palace-limited.jpg?w=1500&h=1000&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/30/49/22/ascott-palace-limited.jpg?w=1500&h=1000&s=1"
                ]
            }
        }
    ],
    "restaurants": [
        {
            "restaurant_id": 10,
            "restaurant": {
                "restaurant_id": 10,
                "name": "Grandiose Restaurant",
                "reservation_price": 470,
                "address": "41 Dining Boulevard",
                "city_id": 1,
                "description": "A restaurant serving Delightfully Quaint French Steak.",
                "image_url": "dummy.jpg",
                "cuisine_type": "Italian,Japanese",
                "contact": "015318645120",
                "email": "grandiose_restaurant@gmail.com",
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:25.000Z",
                "last_updated_on": "2023-08-24T20:53:25.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                },
                "rating_info": {
                    "rating_1": 0,
                    "rating_2": 11,
                    "rating_3": 8,
                    "rating_4": 7,
                    "rating_5": 8,
                    "rating_avg": 3.35
                },
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-s/17/b6/2e/21/grandiose-restaurant.jpg"
                ]
            }
        },
        {
            "restaurant_id": 15,
            "restaurant": {
                "restaurant_id": 15,
                "name": "Barcode Cafe",
                "reservation_price": 60,
                "address": "24 Main Street",
                "city_id": 2,
                "description": "A restaurant serving Savoringly Charming Indian Tacos.",
                "image_url": "dummy.jpg",
                "cuisine_type": "Italian,Contemporary",
                "contact": "019823167403",
                "email": "barcode.cafe@outlook.com",
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:25.000Z",
                "last_updated_on": "2023-08-24T20:53:25.000Z",
                "city": {
                    "city_id": 2,
                    "name": "Chittagong",
                    "country_name": "Bangladesh",
                    "population": 28607074,
                    "weather_type": "sunny"
                },
                "rating_info": {
                    "rating_1": 0,
                    "rating_2": 0,
                    "rating_3": 0,
                    "rating_4": 0,
                    "rating_5": 0,
                    "rating_avg": 2.5
                },
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-o/07/41/46/cb/barcode-cafe.jpg"
                ]
            }
        },
        {
            "restaurant_id": 20,
            "restaurant": {
                "restaurant_id": 20,
                "name": "Krave",
                "reservation_price": 1500,
                "address": "35 Culinary Avenue",
                "city_id": 2,
                "description": "A restaurant serving Wonderfully Elegant Thai Steak.",
                "image_url": "dummy.jpg",
                "cuisine_type": "Steakhouse,Italian",
                "contact": "015625729520",
                "email": "krave@yahoo.com",
                "creator_user_id": 0,
                "created_on": "2023-08-24T20:53:25.000Z",
                "last_updated_on": "2023-08-24T20:53:25.000Z",
                "city": {
                    "city_id": 2,
                    "name": "Chittagong",
                    "country_name": "Bangladesh",
                    "population": 28607074,
                    "weather_type": "sunny"
                },
                "rating_info": {
                    "rating_1": 0,
                    "rating_2": 0,
                    "rating_3": 0,
                    "rating_4": 0,
                    "rating_5": 0,
                    "rating_avg": 2.5
                },
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-s/1c/0c/cf/95/krave.jpg"
                ]
            }
        }
    ],
    "guides": [
        {
            "guide_id": 1,
            "guide": {
                "user_id": 1,
                "username": "aaniksahaa",
                "email": "abc@gmail.com",
                "role": "client",
                "name": "Anik Saha",
                "bio": "Little Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/abc",
                "twitter_url": "twitter.com/abc",
                "instagram_url": "instagram.com/abc",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-24T20:53:16.000Z",
                "status": "active",
                "created_on": "2023-08-24T20:53:16.000Z",
                "last_updated_on": "2023-08-24T20:53:16.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        }
    ],
    "rating_info": {
        "rating_1": 0,
        "rating_2": 12,
        "rating_3": 6,
        "rating_4": 3,
        "rating_5": 13,
        "rating_avg": 3.5
    },
    "images": null
}
```

## c. Get Trips by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/trip?from_city_id=1,2&to_city_id=1,2,3&price_min=10000&price_max=50000&start_date=2023-01-01&end_date=2024-01-01&orderby=rating&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "trip_id": 3,
        "from_city_id": 5,
        "to_city_id": 6,
        "from_city_name": "Comilla",
        "to_city_name": "Mymensingh",
        "name": "Relaxing Beach Vacation",
        "description": "Unwind on the beautiful beaches of Maldives",
        "image_url": "maldives_beach.jpg",
        "total_price": 21080,
        "start_date": "2023-09-04T18:00:00.000Z",
        "end_date": "2023-09-19T18:00:00.000Z",
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:27.000Z",
        "last_updated_on": "2023-08-24T20:53:27.000Z",
        "deleted_on": null,
        "rating_info": {
            "rating_1": 0,
            "rating_2": 10,
            "rating_3": 7,
            "rating_4": 9,
            "rating_5": 7,
            "rating_avg": 3.39
        },
        "images": null
    },
    {
        "trip_id": 8,
        "from_city_id": 12,
        "to_city_id": 7,
        "from_city_name": "Feni",
        "to_city_name": "Rangpur",
        "name": "Relaxation Retreat",
        "description": "Discover hidden gems, savor local cuisines, and immerse yourself in the rich history of each destination.",
        "image_url": "dummy.jpg",
        "total_price": 43491,
        "start_date": "2023-08-14T18:00:00.000Z",
        "end_date": "2023-09-01T18:00:00.000Z",
        "creator_user_id": 1,
        "created_on": "2023-08-24T20:53:27.000Z",
        "last_updated_on": "2023-08-24T20:53:27.000Z",
        "deleted_on": null,
        "rating_info": {
            "rating_1": 0,
            "rating_2": 11,
            "rating_3": 7,
            "rating_4": 6,
            "rating_5": 4,
            "rating_avg": 3.11
        },
        "images": null
    }
]
```


## d. Create New Trip
Endpoint URL: 
```
POST
```
```
/api/v1/trip
```  
Request Body:    
```json
{
    "from_city_id" : 1,
    "to_city_id" : 2,
    "name" : "Departmental Tour to Infinity",
    "description" : "A wonderful Trip, it will be.",
    "image_url" : "dummy.jpg",
    "start_date" : "2023-07-01",
    "end_date" : "2023-07-25",
    "contains" : [
        {
            "destination_id" : 1,
            "activity_id" : 4,
            "tentative_date" : "2023-07-15"
        },
        {
            "destination_id" : 1,
            "activity_id" : 1,
            "tentative_date" : "2023-07-17"
        }
    ],
    "hotels" : [
        {
            "hotel_id" : 1,
            "checkin_date" : "2023-07-01",
            "checkout_date" : "2023-07-07"
        },
        {
            "hotel_id" : 2,
            "checkin_date" : "2023-07-15",
            "checkout_date" : "2023-07-17"
        }
    ],
    "restaurants" : [
        {
            "restaurant_id" : 1
        },
        {
            "restaurant_id" : 2
        },
        {
            "restaurant_id" : 3
        }
    ],
    "guides" : [
        {
            "guide_id" : 1
        },
        {
            "guide_id" : 2
        }
    ]
}
```
Example Response:  
```json
{
    "trip_id": 3,
    "from_city_id": 1,
    "to_city_id": 2,
    "name": "Departmental Tour to Infinity",
    "description": "A wonderful Trip, it will be.",
    "image_url": "dummy.jpg",
    "total_price": 32571,
    "start_date": "2023-06-30T18:00:00.000Z",
    "end_date": "2023-07-24T18:00:00.000Z",
    "created_on": "2023-07-31T21:59:52.000Z",
    "last_updated_on": "2023-07-31T21:59:52.000Z",
    "deleted_on": null
}
```
## e. Update a Trip
Endpoint URL: 
```
PUT
```
```
/api/v1/trip/
```  
Request Body:    
```json
{
    "trip_id":1,
    "from_city_id" : 1,
    "to_city_id" : 2,
    "name" : "Novelty Tour",
    "description" : "A wonderful Trip, it will be.",
    "image_url" : "dummy.jpg",
    "start_date" : "2023-07-01",
    "end_date" : "2023-07-25",
    "contains" : [
        {
            "destination_id" : 1,
            "activity_id" : 6,
            "tentative_date" : "2023-07-15"
        },
        {
            "destination_id" : 2,
            "activity_id" : 8,
            "tentative_date" : "2023-07-17"
        }
    ],
    "hotels" : [
        {
            "hotel_id" : 5,
            "checkin_date" : "2023-07-01",
            "checkout_date" : "2023-07-07"
        },
        {
            "hotel_id" : 6,
            "checkin_date" : "2023-07-15",
            "checkout_date" : "2023-07-17"
        }
    ],
    "restaurants" : [
        {
            "restaurant_id" : 4
        },
        {
            "restaurant_id" : 5
        },
        {
            "restaurant_id" : 6
        }
    ],
    "guides" : [
        {
            "guide_id" : 1
        },
        {
            "guide_id" : 2
        }
    ]
}
```
Example Response:  
```json
{
    "trip_id": 1,
    "from_city_id": 1,
    "to_city_id": 2,
    "from_city_name": "Dhaka",
    "to_city_name": "Chittagong",
    "name": "Novelty Tour",
    "description": "A wonderful Trip, it will be.",
    "image_url": "dummy.jpg",
    "total_price": 22799,
    "start_date": "2023-06-30T18:00:00.000Z",
    "end_date": "2023-07-24T18:00:00.000Z",
    "created_on": "2023-08-01T12:57:17.000Z",
    "last_updated_on": "2023-08-01T12:57:17.000Z",
    "deleted_on": null,
    "contains": [
        {
            "destination_id": 1,
            "destination_name": "Ahsan Manzil",
            "activity_id": 6,
            "activity_name": "Wildlife Safari",
            "price": 400,
            "tentative_date": "2023-07-14T18:00:00.000Z"
        },
        {
            "destination_id": 2,
            "destination_name": "Coxs Bazar",
            "activity_id": 8,
            "activity_name": "Beach Relaxation",
            "price": 300,
            "tentative_date": "2023-07-16T18:00:00.000Z"
        }
    ],
    "hotels": [
        {
            "hotel_id": 6,
            "checkin_date": "2023-07-14T18:00:00.000Z",
            "checkout_date": "2023-07-16T18:00:00.000Z",
            "hotel": {
                "hotel_id": 6,
                "name": "Charming Sanctuary Hotel",
                "address": "55 Beach Road Jessore , Bangladesh",
                "city_id": 16,
                "description": "A Majestically Elevated hotel in Jessore.",
                "image_url": "dummy.jpg",
                "price_per_day": 961,
                "phone": "015116405724",
                "email": "charmingsanctuaryhotel@gmail.com",
                "has_wifi": 1,
                "has_parking": 0,
                "has_gym": 1,
                "created_on": "2023-08-01T10:46:19.000Z",
                "last_updated_on": "2023-08-01T10:46:19.000Z",
                "city": {
                    "city_id": 16,
                    "name": "Jessore",
                    "country_name": "Bangladesh",
                    "population": 237478,
                    "weather_type": "rainy"
                }
            }
        },
        {
            "hotel_id": 5,
            "checkin_date": "2023-06-30T18:00:00.000Z",
            "checkout_date": "2023-07-06T18:00:00.000Z",
            "hotel": {
                "hotel_id": 5,
                "name": "Glorious Hideaway Hotel",
                "address": "18 Beach Road Dinajpur , Bangladesh",
                "city_id": 17,
                "description": "A Extravagantly Glorious hotel in Dinajpur.",
                "image_url": "dummy.jpg",
                "price_per_day": 3256,
                "phone": "015238514617",
                "email": "glorioushideawayhotel@gmail.com",
                "has_wifi": 0,
                "has_parking": 0,
                "has_gym": 0,
                "created_on": "2023-08-01T10:46:19.000Z",
                "last_updated_on": "2023-08-01T10:46:19.000Z",
                "city": {
                    "city_id": 17,
                    "name": "Dinajpur",
                    "country_name": "Bangladesh",
                    "population": 204874,
                    "weather_type": "cold"
                }
            }
        }
    ],
    "restaurants": [
        {
            "restaurant_id": 4,
            "restaurant": {
                "restaurant_id": 4,
                "name": "Delicious Cafe Biryani Restaurant",
                "reservation_price": 460,
                "address": "19 Lakeview Drive",
                "city_id": 28,
                "description": "A restaurant serving Wonderfully Cozy Thai Pasta.",
                "image_url": "dummy.jpg",
                "cuisine_type": "Thai",
                "contact": "017157505197",
                "email": "deliciouscafebiryanirestaurant@yahoo.com",
                "created_on": "2023-08-01T10:46:20.000Z",
                "last_updated_on": "2023-08-01T10:46:20.000Z",
                "city": {
                    "city_id": 28,
                    "name": "Rangamati",
                    "country_name": "Bangladesh",
                    "population": 3482659,
                    "weather_type": "cold"
                }
            }
        },
        {
            "restaurant_id": 5,
            "restaurant": {
                "restaurant_id": 5,
                "name": "Elegant Steakhouse Tacos Restaurant",
                "reservation_price": 69,
                "address": "52 Gourmet Street",
                "city_id": 2,
                "description": "A restaurant serving Exquisitely Savory Bangladeshi Kebab.",
                "image_url": "dummy.jpg",
                "cuisine_type": "Japanese",
                "contact": "018488659370",
                "email": "elegantsteakhousetacosrestaurant@outlook.com",
                "created_on": "2023-08-01T10:46:20.000Z",
                "last_updated_on": "2023-08-01T10:46:20.000Z",
                "city": {
                    "city_id": 2,
                    "name": "Chittagong",
                    "country_name": "Bangladesh",
                    "population": 28607074,
                    "weather_type": "sunny"
                }
            }
        },
        {
            "restaurant_id": 6,
            "restaurant": {
                "restaurant_id": 6,
                "name": "Delicious Bistro Biryani Restaurant",
                "reservation_price": 112,
                "address": "40 Cafeteria Lane",
                "city_id": 17,
                "description": "A restaurant serving Tastefully Fusion Indian Kebab.",
                "image_url": "dummy.jpg",
                "cuisine_type": "Mexican",
                "contact": "018679129439",
                "email": "deliciousbistrobiryanirestaurant@yahoo.com",
                "created_on": "2023-08-01T10:46:20.000Z",
                "last_updated_on": "2023-08-01T10:46:20.000Z",
                "city": {
                    "city_id": 17,
                    "name": "Dinajpur",
                    "country_name": "Bangladesh",
                    "population": 204874,
                    "weather_type": "cold"
                }
            }
        }
    ],
    "guides": [
        {
            "guide_id": 1,
            "guide": {
                "user_id": 1,
                "email": "changed_email@example.com",
                "password_hash": "hashed_password",
                "role": "user",
                "name": "John Doe",
                "bio": "I love traveling and exploring new places.",
                "city_id": 1,
                "facebook_url": "https://www.facebook.com/johndoe",
                "twitter_url": "https://twitter.com/johndoe",
                "instagram_url": "https://www.instagram.com/johndoe",
                "profile_picture": "https://example.com/profile_picture.jpg",
                "dob": "1990-05-14T18:00:00.000Z",
                "registration_date": "2023-08-01T10:46:19.000Z",
                "status": "active",
                "created_on": "2023-08-01T10:46:19.000Z",
                "last_updated_on": "2023-08-01T11:46:58.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        },
        {
            "guide_id": 2,
            "guide": {
                "user_id": 2,
                "email": "xyz@gmail.com",
                "password_hash": "456",
                "role": "client",
                "name": "Jaber Ahmed Deeder",
                "bio": "Pro Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/xyz",
                "twitter_url": "twitter.com/xyz",
                "instagram_url": "instagram.com/xyz",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-01T10:46:19.000Z",
                "status": "active",
                "created_on": "2023-08-01T10:46:19.000Z",
                "last_updated_on": "2023-08-01T10:46:19.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        }
    ]
}
```
## f. Delete a Trip ( Soft Deletion )

Endpoint URL:  
```
DELETE
```
```
/api/v1/trip/2
``` 
Request Body: 
```
None
```
Example Response:    
```json
{
    "trip_id": 2,
    "from_city_id": 1,
    "to_city_id": 2,
    "name": "Magnificient Seashore Exploration",
    "description": "A wonderful Trip, it will be.",
    "image_url": "dummy.jpg",
    "total_price": 32571,
    "start_date": "2023-06-30T18:00:00.000Z",
    "end_date": "2023-07-24T18:00:00.000Z",
    "created_on": "2023-07-31T20:08:58.000Z",
    "last_updated_on": "2023-07-31T20:08:58.000Z",
    "deleted_on": null
}
```

## g. Delete a Trip ( Permanent )

Endpoint URL:  
```
DELETE
```
```
/api/v1/trip/danger/2
```  
Request Body: `None`    
Example Response:    
```json
{
    "trip_id": "2",
    "status": "permanently deleted"
}
```

# Hotel

## a. Get Single Hotel by hotel_id

Endpoint URL:   
```
GET
```
```
/api/v1/hotel/6
``` 
Request Body: 
```
None
```
Example Response:    
```json
{
    "hotel_id": 6,
    "name": "The Westin Dhaka",
    "address": "40 Mountain Street Dhaka , Bangladesh",
    "city_id": 1,
    "description": "A Serenely Boutique hotel in Dhaka.",
    "image_url": "dummy.jpg",
    "price_per_day": 22526,
    "phone": "019032452045",
    "email": "the.westin@gmail.com",
    "has_wifi": 1,
    "has_parking": 0,
    "has_gym": 0,
    "creator_user_id": 0,
    "created_on": "2023-08-24T20:53:21.000Z",
    "last_updated_on": "2023-08-24T20:53:21.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    },
    "rating_info": {
        "rating_1": 0,
        "rating_2": 10,
        "rating_3": 13,
        "rating_4": 10,
        "rating_5": 14,
        "rating_avg": 3.6
    },
    "images": [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0c/cb/10/exterior.jpg?w=1500&h=1000&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b2/69/7e/seasonal-tastes.jpg?w=1500&h=1000&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/e0/22/cb/the-westin-dhaka.jpg?w=1500&h=1000&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b2/69/38/prego.jpg?w=1500&h=1000&s=1"
    ]
}
```

## b. Get Hotels by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:
```
GET
```
```
/api/v1/hotel?name=hotel&address=bangladesh&city_id=24,25,26,1,2,3&min_price=500&max_price=30000&has_wifi=1&has_parking=1&has_gym=1&orderby=price_per_day&ordertype=desc&page=1&per_page=2
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "hotel_id": 252,
        "name": "Grand Prince Hotel",
        "address": "20 Mountain Street Manikganj , Bangladesh",
        "city_id": 26,
        "description": "A Enchantingly Elevated hotel in Manikganj.",
        "image_url": "dummy.jpg",
        "price_per_day": 12470,
        "phone": "014948799839",
        "email": "grand.prince@gmail.com",
        "has_wifi": 1,
        "has_parking": 1,
        "has_gym": 1,
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:24.000Z",
        "last_updated_on": "2023-08-24T20:53:24.000Z",
        "city": {
            "city_id": 26,
            "name": "Manikganj",
            "country_name": "Bangladesh",
            "population": 160093,
            "weather_type": "rainy"
        },
        "rating_info": {
            "rating_1": 0,
            "rating_2": 0,
            "rating_3": 0,
            "rating_4": 0,
            "rating_5": 0,
            "rating_avg": 2.5
        },
        "images": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/5f/9d/78/grand-prince-hotel-in.jpg?w=1500&h=1000&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/81/61/16/bangladesh-national-cricket.jpg?w=1500&h=1000&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/81/61/15/global-asus-brand-manager.jpg?w=1500&h=1000&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/81/61/14/super-shop.jpg?w=1500&h=1000&s=1"
        ]
    },
    {
        "hotel_id": 29,
        "name": "Divine Centre Ltd, Hotel and Convention Centre",
        "address": "40 Garden Lane Khulna , Bangladesh",
        "city_id": 3,
        "description": "A Exceptionally Boutique hotel in Khulna.",
        "image_url": "dummy.jpg",
        "price_per_day": 9299,
        "phone": "016793349880",
        "email": "divine.centre@yahoo.com",
        "has_wifi": 1,
        "has_parking": 1,
        "has_gym": 1,
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:21.000Z",
        "last_updated_on": "2023-08-24T20:53:21.000Z",
        "city": {
            "city_id": 3,
            "name": "Khulna",
            "country_name": "Bangladesh",
            "population": 15563000,
            "weather_type": "rainy"
        },
        "rating_info": {
            "rating_1": 0,
            "rating_2": 0,
            "rating_3": 0,
            "rating_4": 0,
            "rating_5": 0,
            "rating_avg": 2.5
        },
        "images": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/be/a9/60/super-deluxe-couple-room.jpg?w=1500&h=1000&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/be/a8/f3/super-deluxe-suit-room.jpg?w=1500&h=1000&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/be/a8/6c/super-deluxe-twin-room.jpg?w=1500&h=1000&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c7/40/87/kopotakkha-meeting-rooms.jpg?w=1500&h=1000&s=1"
        ]
    }
]
```
## c. Create New Hotel

Endpoint URL: 
```
POST
```
```
/api/v1/hotel/
```  
Request Body:    
```json
{
    "name": "Barbie Oppenheimer Hotel",
    "address": "57 Park Avenue Manikganj , Bangladesh",
    "city_id": 26,
    "description": "A Exquisitely Elevated hotel in Manikganj.",
    "image_url": "dummy.jpg",
    "price_per_day": 2500,
    "phone": "011338126183",
    "email": "barbiehotel@yahoo.com",
    "has_wifi": 1,
    "has_parking": 1,
    "has_gym": 1
}
```
Example Response:  
```json
{
    "hotel_id": 103,
    "name": "Barbie Oppenheimer Hotel",
    "address": "57 Park Avenue Manikganj , Bangladesh",
    "city_id": 26,
    "description": "A Exquisitely Elevated hotel in Manikganj.",
    "image_url": "dummy.jpg",
    "price_per_day": 2500,
    "phone": "011338126183",
    "email": "barbiehotel@yahoo.com",
    "has_wifi": 1,
    "has_parking": 1,
    "has_gym": 1,
    "created_on": "2023-07-31T19:17:46.000Z",
    "last_updated_on": "2023-07-31T19:17:46.000Z"
}
```
## d. Update a Hotel
Endpoint URL: 
```
PUT
```
```
/api/v1/hotel/
```  
Request Body:    
```json
{
    "hotel_id": 103,
    "name": "New Barbie Oppenheimer Hotel",
    "address": "57 Park Avenue Manikganj , Bangladesh",
    "city_id": 26,
    "description": "A Exquisitely Elevated hotel in Manikganj.",
    "image_url": "dummy.jpg",
    "price_per_day": 4500,
    "phone": "011338126183",
    "email": "barbiehotel@yahoo.com",
    "has_wifi": 1,
    "has_parking": 1,
    "has_gym": 1
}
```
Example Response:  
```json
{
    "hotel_id": 103,
    "name": "Barbie Oppenheimer Hotel",
    "address": "57 Park Avenue Manikganj , Bangladesh",
    "city_id": 26,
    "description": "A Exquisitely Elevated hotel in Manikganj.",
    "image_url": "dummy.jpg",
    "price_per_day": 2500,
    "phone": "011338126183",
    "email": "barbiehotel@yahoo.com",
    "has_wifi": 1,
    "has_parking": 1,
    "has_gym": 1,
    "created_on": "2023-07-31T19:17:46.000Z",
    "last_updated_on": "2023-07-31T19:17:46.000Z"
}
```

## e. Delete a Hotel

Endpoint URL: 
```
DELETE
```
```
/api/v1/hotel/99
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "hotel_id": 99,
    "name": "Cozy Castle Hotel",
    "address": "44 Ocean Drive Tangail , Bangladesh",
    "city_id": 29,
    "description": "A Exquisitely Elevated hotel in Tangail.",
    "image_url": "dummy.jpg",
    "price_per_day": 3857,
    "phone": "014298582868",
    "email": "cozycastlehotel@outlook.com",
    "has_wifi": 1,
    "has_parking": 0,
    "has_gym": 1,
    "created_on": "2023-07-31T19:43:37.000Z",
    "last_updated_on": "2023-07-31T19:43:37.000Z"
}
```

# Restaurant

## a. Get Single Restaurant by restaurant_id

Endpoint URL: 
```
GET
```
```
/api/v1/restaurant/3
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "restaurant_id": 3,
    "name": "The Garden Kitchen at Sheraton Dhaka",
    "reservation_price": 1540,
    "address": "63 Restaurant Row",
    "city_id": 1,
    "description": "A restaurant serving Wonderfully Charming Spanish Steak.",
    "image_url": "dummy.jpg",
    "cuisine_type": "International,Sushi",
    "contact": "018029299017",
    "email": "the.garden@outlook.com",
    "creator_user_id": 0,
    "created_on": "2023-08-24T20:53:25.000Z",
    "last_updated_on": "2023-08-24T20:53:25.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    },
    "rating_info": {
        "rating_1": 0,
        "rating_2": 10,
        "rating_3": 9,
        "rating_4": 11,
        "rating_5": 7,
        "rating_avg": 3.41
    },
    "images": [
        "https://media-cdn.tripadvisor.com/media/photo-s/22/44/b4/32/restaurant-interior.jpg"
    ]
}
```

## b. Get Restaurants by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL: 
```
GET
```
```
/api/v1/restaurant?city_id=1,6,22,28&min_price=50&max_price=3000&page=1&per_page=3&orderby=rating&ordertype=desc
```  
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "restaurant_id": 1,
        "name": "Elements - Global Dining at InterContinental Dhaka",
        "reservation_price": 1420,
        "address": "58 Culinary Avenue",
        "city_id": 1,
        "description": "A restaurant serving Wonderfully Quaint Thai Pasta.",
        "image_url": "dummy.jpg",
        "cuisine_type": "American,European",
        "contact": "018826094479",
        "email": "elements_-@gmail.com",
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:25.000Z",
        "last_updated_on": "2023-08-24T20:53:25.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        },
        "rating_info": {
            "rating_1": 0,
            "rating_2": 5,
            "rating_3": 5,
            "rating_4": 10,
            "rating_5": 10,
            "rating_avg": 3.83
        },
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/1a/50/53/9d/elements-global-dining.jpg"
        ]
    },
    {
        "restaurant_id": 5,
        "name": "Risotto by Sarina",
        "reservation_price": 1180,
        "address": "93 Lakeview Drive",
        "city_id": 1,
        "description": "A restaurant serving Delightfully Exquisite Mexican Dim Sum.",
        "image_url": "dummy.jpg",
        "cuisine_type": "Italian",
        "contact": "018775861678",
        "email": "risotto.by@outlook.com",
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:25.000Z",
        "last_updated_on": "2023-08-24T20:53:25.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        },
        "rating_info": {
            "rating_1": 0,
            "rating_2": 5,
            "rating_3": 8,
            "rating_4": 9,
            "rating_5": 8,
            "rating_avg": 3.67
        },
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/29/76/7b/a8/lounge-area.jpg"
        ]
    },
    {
        "restaurant_id": 7,
        "name": "Olea Turkish Restaurant at Le Meridien Dhaka",
        "reservation_price": 690,
        "address": "14 Restaurant Row",
        "city_id": 1,
        "description": "A restaurant serving Delightfully Authentic Mexican Burger.",
        "image_url": "dummy.jpg",
        "cuisine_type": "Chinese",
        "contact": "014783917035",
        "email": "olea.turkish@gmail.com",
        "creator_user_id": 0,
        "created_on": "2023-08-24T20:53:25.000Z",
        "last_updated_on": "2023-08-24T20:53:25.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        },
        "rating_info": {
            "rating_1": 0,
            "rating_2": 8,
            "rating_3": 6,
            "rating_4": 6,
            "rating_5": 10,
            "rating_avg": 3.6
        },
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/0e/ce/63/ab/salivating-seafood.jpg"
        ]
    }
]
```
## c. Create New restaurant

Endpoint URL: 
```
POST
```
```
/api/v1/restaurant/
```  
Request Body:    
```json
{
    "name": "Delicious Delights",
    "reservation_price": 75,
    "address": "123 Main Street",
    "city_id": 1,
    "description": "A cozy restaurant serving delicious delights.",
    "image_url": "https://example.com/restaurant.jpg",
    "cuisine_type": "Italian",
    "contact": "123-456-7890",
    "email": "info@deliciousdelights.com"
}
```
Example Response:  
```json
{
    "restaurant_id": 102,
    "name": "Delicious Delights",
    "reservation_price": 75,
    "address": "123 Main Street",
    "city_id": 1,
    "description": "A cozy restaurant serving delicious delights.",
    "image_url": "https://example.com/restaurant.jpg",
    "cuisine_type": "Italian",
    "contact": "123-456-7890",
    "email": "info@deliciousdelights.com",
    "created_on": "2023-08-01T13:50:25.000Z",
    "last_updated_on": "2023-08-01T13:50:25.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```
## d. Update a restaurant
Endpoint URL: 
```
PUT
```
```
/api/v1/restaurant/
``` 
Request Body:    
```json
{
    "restaurant_id" : 102,
    "name": "Ultra Delicious Delights 2",
    "reservation_price": 55,
    "address": "123 Main Street",
    "city_id": 1,
    "description": "A cozy restaurant serving delicious delights.",
    "image_url": "https://example.com/restaurant.jpg",
    "cuisine_type": "Italian",
    "contact": "123-456-7890",
    "email": "info@deliciousdelights.com"
}
```
Example Response:  
```json
{
    "restaurant_id": 102,
    "name": "Ultra Delicious Delights 2",
    "reservation_price": 55,
    "address": "123 Main Street",
    "city_id": 1,
    "description": "A cozy restaurant serving delicious delights.",
    "image_url": "https://example.com/restaurant.jpg",
    "cuisine_type": "Italian",
    "contact": "123-456-7890",
    "email": "info@deliciousdelights.com",
    "created_on": "2023-08-01T13:50:25.000Z",
    "last_updated_on": "2023-08-01T13:53:31.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```

## e. Delete a restaurant

Endpoint URL:  
```
DELETE
```
```
/api/v1/restaurant/104
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "restaurant_id": 104,
    "name": "Ultra Delicious Delights 2",
    "reservation_price": 55,
    "address": "123 Main Street",
    "city_id": 1,
    "description": "A cozy restaurant serving delicious delights.",
    "image_url": "https://example.com/restaurant.jpg",
    "cuisine_type": "Italian",
    "contact": "123-456-7890",
    "email": "info@deliciousdelights.com",
    "created_on": "2023-08-01T13:53:09.000Z",
    "last_updated_on": "2023-08-01T13:53:09.000Z",
    "city": {
        "city_id": 1,
        "name": "Dhaka",
        "country_name": "Bangladesh",
        "population": 168957745,
        "weather_type": "rainy"
    }
}
```


# Flight

## a. Get Single Flight by flight_id

Endpoint URL:    
```
GET
```
```
/api/v1/flight/1
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "flight_id": 1,
    "from_city_id": 28,
    "to_city_id": 16,
    "airline_name": "International Flights Airlines",
    "departure_date": "2023-08-09T18:00:00.000Z",
    "return_date": "2023-08-11T18:00:00.000Z",
    "price": 12204,
    "seat_class": "Business",
    "flight_duration": 55,
    "booking_url": "booking.com",
    "created_on": "2023-08-01T10:46:20.000Z",
    "last_updated_on": "2023-08-01T10:46:20.000Z",
    "from_city": {
        "city_id": 28,
        "name": "Rangamati",
        "country_name": "Bangladesh",
        "population": 3482659,
        "weather_type": "cold"
    },
    "to_city": {
        "city_id": 16,
        "name": "Jessore",
        "country_name": "Bangladesh",
        "population": 237478,
        "weather_type": "rainy"
    }
}
```

## b. Get Flights by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/flight?from_city_id=28,12,17,20&to_city_id=16,4,23,22&airline_name=e&min_price=2000&max_price=20000&seat_class=economy&min_duration=20&max_duration=150&departure_date=2023-01-01&return_date=2023-08-25&page=1&per_page=2&orderby=price&ordertype=asc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "flight_id": 4,
        "from_city_id": 20,
        "to_city_id": 22,
        "airline_name": "Luxury Airways Airlines",
        "departure_date": "2023-08-11T18:00:00.000Z",
        "return_date": "2023-08-14T18:00:00.000Z",
        "price": 3897,
        "seat_class": "Economy",
        "flight_duration": 74,
        "booking_url": "booking.com",
        "created_on": "2023-08-01T10:46:20.000Z",
        "last_updated_on": "2023-08-01T10:46:20.000Z",
        "from_city": {
            "city_id": 20,
            "name": "Netrokona",
            "country_name": "Bangladesh",
            "population": 229752,
            "weather_type": "sunny"
        },
        "to_city": {
            "city_id": 22,
            "name": "Narsingdi",
            "country_name": "Bangladesh",
            "population": 705768,
            "weather_type": "cold"
        }
    },
    {
        "flight_id": 2,
        "from_city_id": 12,
        "to_city_id": 4,
        "airline_name": "Luxury Flights Airlines",
        "departure_date": "2023-08-15T18:00:00.000Z",
        "return_date": "2023-08-21T18:00:00.000Z",
        "price": 18850,
        "seat_class": "Economy",
        "flight_duration": 39,
        "booking_url": "booking.com",
        "created_on": "2023-08-01T10:46:20.000Z",
        "last_updated_on": "2023-08-01T10:46:20.000Z",
        "from_city": {
            "city_id": 12,
            "name": "Narsingdi",
            "country_name": "Bangladesh",
            "population": 705768,
            "weather_type": "rainy"
        },
        "to_city": {
            "city_id": 4,
            "name": "Rajshahi",
            "country_name": "Bangladesh",
            "population": 9536714,
            "weather_type": "sunny"
        }
    }
]
```

## c. Create New Flight

Endpoint URL: 
```
POST
```
```
/api/v1/flight/
```  
Request Body:    
```json
{
    "from_city_id": 29,
    "to_city_id": 30,
    "airline_name": "Cool Airlines",
    "departure_date": "2023-08-09T18:00:00.000Z",
    "return_date": "2023-08-11T18:00:00.000Z",
    "price": 12204,
    "seat_class": "Business",
    "flight_duration": 55,
    "booking_url": "booking.com",
    "created_on": "2023-08-01T10:46:20.000Z",
    "last_updated_on": "2023-08-01T10:46:20.000Z"
}
```
Example Response:  
```json
{
    "flight_id": 102,
    "from_city_id": 29,
    "to_city_id": 30,
    "airline_name": "Cool Airlines",
    "departure_date": "2023-08-09T18:00:00.000Z",
    "return_date": "2023-08-11T18:00:00.000Z",
    "price": 12204,
    "seat_class": "Business",
    "flight_duration": 55,
    "booking_url": "booking.com",
    "created_on": "2023-08-01T18:01:27.000Z",
    "last_updated_on": "2023-08-01T18:01:27.000Z",
    "from_city": {
        "city_id": 29,
        "name": "Tangail",
        "country_name": "Bangladesh",
        "population": 160937,
        "weather_type": "rainy"
    },
    "to_city": {
        "city_id": 30,
        "name": "Chandpur",
        "country_name": "Bangladesh",
        "population": 115000,
        "weather_type": "rainy"
    }
}
```
## d. Update a Flight
Endpoint URL: 
```
PUT
```
```
/api/v1/flight/
```  
Request Body:    
```json
{
    "flight_id": 102,
    "from_city_id": 29,
    "to_city_id": 30,
    "airline_name": "New Cool Airlines",
    "departure_date": "2023-08-09T18:00:00.000Z",
    "return_date": "2023-08-11T18:00:00.000Z",
    "price": 12204,
    "seat_class": "Business",
    "flight_duration": 55,
    "booking_url": "booking.com",
    "created_on": "2023-08-01T10:46:20.000Z",
    "last_updated_on": "2023-08-01T10:46:20.000Z"
}
```
Example Response:  
```json
{
    "flight_id": 103,
    "from_city_id": 29,
    "to_city_id": 30,
    "airline_name": "New Cool Airlines",
    "departure_date": "2023-08-09T18:00:00.000Z",
    "return_date": "2023-08-11T18:00:00.000Z",
    "price": 12204,
    "seat_class": "Business",
    "flight_duration": 55,
    "booking_url": "booking.com",
    "created_on": "2023-08-01T18:04:40.000Z",
    "last_updated_on": "2023-08-01T18:04:40.000Z",
    "from_city": {
        "city_id": 29,
        "name": "Tangail",
        "country_name": "Bangladesh",
        "population": 160937,
        "weather_type": "rainy"
    },
    "to_city": {
        "city_id": 30,
        "name": "Chandpur",
        "country_name": "Bangladesh",
        "population": 115000,
        "weather_type": "rainy"
    }
}
```

## e. Delete a Flight

Endpoint URL:  
```
DELETE
```
```
api/v1/flight/102
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "flight_id": 102,
    "from_city_id": 29,
    "to_city_id": 30,
    "airline_name": "Cool Airlines",
    "departure_date": "2023-08-09T18:00:00.000Z",
    "return_date": "2023-08-11T18:00:00.000Z",
    "price": 12204,
    "seat_class": "Business",
    "flight_duration": 55,
    "booking_url": "booking.com",
    "created_on": "2023-08-01T18:01:27.000Z",
    "last_updated_on": "2023-08-01T18:01:27.000Z",
    "from_city": {
        "city_id": 29,
        "name": "Tangail",
        "country_name": "Bangladesh",
        "population": 160937,
        "weather_type": "rainy"
    },
    "to_city": {
        "city_id": 30,
        "name": "Chandpur",
        "country_name": "Bangladesh",
        "population": 115000,
        "weather_type": "rainy"
    }
}
```

# Review

## a. Get Single Review by review_id

Endpoint URL:    
```
GET
```
```
/api/v1/review/4
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "review_id": 4,
    "user_id": 2,
    "posting_date": "2023-08-01T21:08:54.000Z",
    "description": "Absolutely amazing restaurant",
    "rating": 5,
    "image_url": "dummy.jpg",
    "upvote_count": 0,
    "object": {
        "object_id": 15,
        "object_type": "restaurant",
        "object": {
            "restaurant_id": 15,
            "name": "Authentic Pizzeria Burger Restaurant",
            "reservation_price": 72,
            "address": "60 Riverfront",
            "city_id": 10,
            "description": "A restaurant serving Passionately Elegant Greek Dim Sum.",
            "image_url": "dummy.jpg",
            "cuisine_type": "Italian",
            "contact": "015135654557",
            "email": "authenticpizzeriaburgerrestaurant@outlook.com",
            "created_on": "2023-08-01T10:46:20.000Z",
            "last_updated_on": "2023-08-01T10:46:20.000Z",
            "city": {
                "city_id": 10,
                "name": "Narayanganj",
                "country_name": "Bangladesh",
                "population": 2200000,
                "weather_type": "sunny"
            }
        }
    },
    "user": {
        "user_id": 2,
        "email": "xyz@gmail.com",
        "role": "client",
        "name": "Jaber Ahmed Deeder",
        "bio": "Pro Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/xyz",
        "twitter_url": "twitter.com/xyz",
        "instagram_url": "instagram.com/xyz",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-01T10:46:19.000Z",
        "status": "active",
        "created_on": "2023-08-01T10:46:19.000Z",
        "last_updated_on": "2023-08-01T10:46:19.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```

## b. Get Reviews by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/review?user_id=2&rating_min=3&rating_max=5&page=1&per_page=2&orderby=rating&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "review_id": 4,
        "user_id": 2,
        "posting_date": "2023-08-01T21:08:54.000Z",
        "description": "Absolutely amazing restaurant",
        "rating": 5,
        "image_url": "dummy.jpg",
        "upvote_count": 0,
        "object": {
            "object_id": 15,
            "object_type": "restaurant",
            "object": {
                "restaurant_id": 15,
                "name": "Authentic Pizzeria Burger Restaurant",
                "reservation_price": 72,
                "address": "60 Riverfront",
                "city_id": 10,
                "description": "A restaurant serving Passionately Elegant Greek Dim Sum.",
                "image_url": "dummy.jpg",
                "cuisine_type": "Italian",
                "contact": "015135654557",
                "email": "authenticpizzeriaburgerrestaurant@outlook.com",
                "created_on": "2023-08-01T10:46:20.000Z",
                "last_updated_on": "2023-08-01T10:46:20.000Z",
                "city": {
                    "city_id": 10,
                    "name": "Narayanganj",
                    "country_name": "Bangladesh",
                    "population": 2200000,
                    "weather_type": "sunny"
                }
            }
        },
        "user": {
            "user_id": 2,
            "email": "xyz@gmail.com",
            "role": "client",
            "name": "Jaber Ahmed Deeder",
            "bio": "Pro Coder",
            "city_id": 1,
            "facebook_url": "facebook.com/xyz",
            "twitter_url": "twitter.com/xyz",
            "instagram_url": "instagram.com/xyz",
            "profile_picture": "dummy.jpg",
            "dob": "2002-09-16T18:00:00.000Z",
            "registration_date": "2023-08-01T10:46:19.000Z",
            "status": "active",
            "created_on": "2023-08-01T10:46:19.000Z",
            "last_updated_on": "2023-08-01T10:46:19.000Z",
            "city": {
                "city_id": 1,
                "name": "Dhaka",
                "country_name": "Bangladesh",
                "population": 168957745,
                "weather_type": "rainy"
            }
        }
    },
    {
        "review_id": 2,
        "user_id": 2,
        "posting_date": "2023-08-01T20:34:37.000Z",
        "description": "This restaurant was amazing! The staff was friendly, and the room was clean and comfortable.",
        "rating": 3,
        "image_url": "dummy.jpg",
        "upvote_count": 0,
        "object": {
            "object_id": null,
            "object_type": null
        },
        "user": {
            "user_id": 2,
            "email": "xyz@gmail.com",
            "role": "client",
            "name": "Jaber Ahmed Deeder",
            "bio": "Pro Coder",
            "city_id": 1,
            "facebook_url": "facebook.com/xyz",
            "twitter_url": "twitter.com/xyz",
            "instagram_url": "instagram.com/xyz",
            "profile_picture": "dummy.jpg",
            "dob": "2002-09-16T18:00:00.000Z",
            "registration_date": "2023-08-01T10:46:19.000Z",
            "status": "active",
            "created_on": "2023-08-01T10:46:19.000Z",
            "last_updated_on": "2023-08-01T10:46:19.000Z",
            "city": {
                "city_id": 1,
                "name": "Dhaka",
                "country_name": "Bangladesh",
                "population": 168957745,
                "weather_type": "rainy"
            }
        }
    }
]
```

## c. Create New Review
### user_id will be auto grabbed from req.user
Endpoint URL: 
```
POST
```
```
/api/v1/review/
```  
Request Body:    
```json
{
  "description": "Wholesome Trip !!!",
  "rating": 4.5,
  "image_url": "dummy.jpg",
  "object_type": "trip",
  "object_id": 1
}
```
Example Response:  
```json
{
    "review_id": 3,
    "user_id": 1,
    "posting_date": "2023-08-03T13:30:26.000Z",
    "description": "Wholesome Trip !!!",
    "rating": 4.5,
    "image_url": "dummy.jpg",
    "upvote_count": 0,
    "object": {
        "object_id": 1,
        "object_type": "trip",
        "object": {
            "trip_id": 1,
            "from_city_id": 1,
            "to_city_id": 2,
            "from_city_name": "Dhaka",
            "to_city_name": "Chittagong",
            "name": "Summer Vacation in Paris",
            "description": "Enjoy the charm of Paris in summer",
            "image_url": "paris_summer.jpg",
            "total_price": 49878,
            "start_date": "2023-06-30T18:00:00.000Z",
            "end_date": "2023-07-24T18:00:00.000Z",
            "creator_user_id": 1,
            "created_on": "2023-08-03T07:32:23.000Z",
            "last_updated_on": "2023-08-03T07:32:23.000Z",
            "deleted_on": null
        }
    },
    "user": {
        "user_id": 1,
        "username": "aaniksahaa",
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-03T07:32:21.000Z",
        "status": "active",
        "created_on": "2023-08-03T07:32:21.000Z",
        "last_updated_on": "2023-08-03T07:32:21.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```
## d. Update a Review
### Note that, the object_type of the review cannot be changed
Endpoint URL: 
```
PUT
```
```
/api/v1/review/
```  
Request Body:    
```json
{
  "review_id": 3,
  "description": "Wholesome Trip !!!",
  "rating": 3.5,
  "image_url": "dummy.jpg",
  "object_type": "trip",
  "object_id": 1
}
```
Example Response:  
```json
{
    "review_id": 3,
    "user_id": 1,
    "posting_date": "2023-08-03T13:30:26.000Z",
    "description": "Wholesome Trip !!!",
    "rating": 3.5,
    "image_url": "dummy.jpg",
    "upvote_count": 0,
    "object": {
        "object_id": 1,
        "object_type": "trip",
        "object": {
            "trip_id": 1,
            "from_city_id": 1,
            "to_city_id": 2,
            "from_city_name": "Dhaka",
            "to_city_name": "Chittagong",
            "name": "Summer Vacation in Paris",
            "description": "Enjoy the charm of Paris in summer",
            "image_url": "paris_summer.jpg",
            "total_price": 49878,
            "start_date": "2023-06-30T18:00:00.000Z",
            "end_date": "2023-07-24T18:00:00.000Z",
            "creator_user_id": 1,
            "created_on": "2023-08-03T07:32:23.000Z",
            "last_updated_on": "2023-08-03T07:32:23.000Z",
            "deleted_on": null
        }
    },
    "user": {
        "user_id": 1,
        "username": "aaniksahaa",
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-03T07:32:21.000Z",
        "status": "active",
        "created_on": "2023-08-03T07:32:21.000Z",
        "last_updated_on": "2023-08-03T07:32:21.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```

## e. Delete a Review

Endpoint URL:  
```
DELETE
```
```
api/v1/review/4
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "review_id": 5,
    "user_id": 2,
    "posting_date": "2023-08-01T21:49:11.000Z",
    "description": "Wholesome Trip !!!",
    "rating": 5,
    "image_url": "dummy.jpg",
    "upvote_count": 0,
    "object": {
        "object_id": 1,
        "object_type": "trip",
        "object": {
            "trip_id": 1,
            "from_city_id": 1,
            "to_city_id": 2,
            "from_city_name": "Dhaka",
            "to_city_name": "Chittagong",
            "name": "Novelty Tour",
            "description": "A wonderful Trip, it will be.",
            "image_url": "dummy.jpg",
            "total_price": 22799,
            "start_date": "2023-06-30T18:00:00.000Z",
            "end_date": "2023-07-24T18:00:00.000Z",
            "created_on": "2023-08-01T12:57:17.000Z",
            "last_updated_on": "2023-08-01T12:57:17.000Z",
            "deleted_on": null
        }
    },
    "user": {
        "user_id": 2,
        "email": "xyz@gmail.com",
        "role": "client",
        "name": "Jaber Ahmed Deeder",
        "bio": "Pro Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/xyz",
        "twitter_url": "twitter.com/xyz",
        "instagram_url": "instagram.com/xyz",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-01T10:46:19.000Z",
        "status": "active",
        "created_on": "2023-08-01T10:46:19.000Z",
        "last_updated_on": "2023-08-01T10:46:19.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```


# TripBooking

## a. Get Single TripBooking by user_id and trip_id
### user_id is auto grabbed from req.user
Endpoint URL:    
```
GET
```
```
/api/v1/tripbooking/1
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "user_id": 1,
    "trip_id": 1,
    "booking_date": "2023-08-01T22:14:06.000Z",
    "is_paid": 0,
    "is_processed": 0,
    "is_completed": 0,
    "payment_method": null,
    "transaction_id": null,
    "payment_date": null,
    "completion_date": null,
    "is_private": 0,
    "created_on": "2023-08-01T22:14:06.000Z",
    "last_updated_on": "2023-08-01T22:14:06.000Z",
    "user": {
        "user_id": 1,
        "email": "changed_email@example.com",
        "role": "user",
        "name": "John Doe",
        "bio": "I love traveling and exploring new places.",
        "city_id": 1,
        "facebook_url": "https://www.facebook.com/johndoe",
        "twitter_url": "https://twitter.com/johndoe",
        "instagram_url": "https://www.instagram.com/johndoe",
        "profile_picture": "https://example.com/profile_picture.jpg",
        "dob": "1990-05-14T18:00:00.000Z",
        "registration_date": "2023-08-01T10:46:19.000Z",
        "status": "active",
        "created_on": "2023-08-01T10:46:19.000Z",
        "last_updated_on": "2023-08-01T11:46:58.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    },
    "trip": {
        "trip_id": 1,
        "from_city_id": 1,
        "to_city_id": 2,
        "from_city_name": "Dhaka",
        "to_city_name": "Chittagong",
        "name": "Novelty Tour",
        "description": "A wonderful Trip, it will be.",
        "image_url": "dummy.jpg",
        "total_price": 22799,
        "start_date": "2023-06-30T18:00:00.000Z",
        "end_date": "2023-07-24T18:00:00.000Z",
        "created_on": "2023-08-01T12:57:17.000Z",
        "last_updated_on": "2023-08-01T12:57:17.000Z",
        "deleted_on": null
    }
}
```

## b. Get TripBookings by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/tripbooking?is_paid=1&is_processed=1&is_completed=0&payment_method=bkash&page=1&per_page=2&orderby=booking_date&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "user_id": 1,
        "trip_id": 3,
        "booking_date": "2023-08-02T14:15:12.000Z",
        "is_paid": 1,
        "is_processed": 1,
        "is_completed": 0,
        "payment_method": "bkash",
        "transaction_id": "ABCDE",
        "payment_date": "2023-08-02T15:52:58.000Z",
        "completion_date": null,
        "is_private": null,
        "created_on": "2023-08-02T14:15:12.000Z",
        "last_updated_on": "2023-08-02T15:53:13.000Z",
        "trip": {
            "trip_id": 3,
            "from_city_id": 1,
            "to_city_id": 2,
            "from_city_name": "Dhaka",
            "to_city_name": "Chittagong",
            "name": "New   New Mini Tour",
            "description": "A wonderful Trip, it will be.",
            "image_url": "dummy.jpg",
            "total_price": 29728,
            "start_date": "2023-06-30T18:00:00.000Z",
            "end_date": "2023-07-24T18:00:00.000Z",
            "creator_user_id": 1,
            "created_on": "2023-08-02T14:14:17.000Z",
            "last_updated_on": "2023-08-02T14:14:17.000Z",
            "deleted_on": null
        },
        "user": {
            "user_id": 1,
            "email": "abc@gmail.com",
            "role": "client",
            "name": "Anik Saha",
            "bio": "Little Coder",
            "city_id": 1,
            "facebook_url": "facebook.com/abc",
            "twitter_url": "twitter.com/abc",
            "instagram_url": "instagram.com/abc",
            "profile_picture": "dummy.jpg",
            "dob": "2002-09-16T18:00:00.000Z",
            "registration_date": "2023-08-02T14:11:02.000Z",
            "status": "active",
            "created_on": "2023-08-02T14:11:02.000Z",
            "last_updated_on": "2023-08-02T14:11:02.000Z",
            "city": {
                "city_id": 1,
                "name": "Dhaka",
                "country_name": "Bangladesh",
                "population": 168957745,
                "weather_type": "rainy"
            }
        }
    },
    {
        "user_id": 1,
        "trip_id": 2,
        "booking_date": "2023-08-02T14:15:08.000Z",
        "is_paid": 1,
        "is_processed": 1,
        "is_completed": 0,
        "payment_method": "bkash",
        "transaction_id": "XYZ",
        "payment_date": "2023-08-02T16:00:58.000Z",
        "completion_date": null,
        "is_private": null,
        "created_on": "2023-08-02T14:15:08.000Z",
        "last_updated_on": "2023-08-02T16:01:20.000Z",
        "trip": {
            "trip_id": 2,
            "from_city_id": 1,
            "to_city_id": 2,
            "from_city_name": "Dhaka",
            "to_city_name": "Chittagong",
            "name": "New Mini Tour",
            "description": "A wonderful Trip, it will be.",
            "image_url": "dummy.jpg",
            "total_price": 29728,
            "start_date": "2023-06-30T18:00:00.000Z",
            "end_date": "2023-07-24T18:00:00.000Z",
            "creator_user_id": 1,
            "created_on": "2023-08-02T14:14:10.000Z",
            "last_updated_on": "2023-08-02T14:14:10.000Z",
            "deleted_on": null
        },
        "user": {
            "user_id": 1,
            "email": "abc@gmail.com",
            "role": "client",
            "name": "Anik Saha",
            "bio": "Little Coder",
            "city_id": 1,
            "facebook_url": "facebook.com/abc",
            "twitter_url": "twitter.com/abc",
            "instagram_url": "instagram.com/abc",
            "profile_picture": "dummy.jpg",
            "dob": "2002-09-16T18:00:00.000Z",
            "registration_date": "2023-08-02T14:11:02.000Z",
            "status": "active",
            "created_on": "2023-08-02T14:11:02.000Z",
            "last_updated_on": "2023-08-02T14:11:02.000Z",
            "city": {
                "city_id": 1,
                "name": "Dhaka",
                "country_name": "Bangladesh",
                "population": 168957745,
                "weather_type": "rainy"
            }
        }
    }
]
```

## c. Create New TripBooking
### user_id is auto grabbed from req.user
Endpoint URL: 
```
POST
```
```
/api/v1/tripbooking/
```  
Request Body:    
```json
{
    "trip_id": 3,
    "is_private": 1
}
```
Example Response:  
```json
{
    "user_id": 1,
    "trip_id": 3,
    "booking_date": "2023-08-02T08:41:57.000Z",
    "is_paid": 0,
    "is_processed": 0,
    "is_completed": 0,
    "payment_method": null,
    "transaction_id": null,
    "payment_date": null,
    "completion_date": null,
    "is_private": 0,
    "created_on": "2023-08-02T08:41:57.000Z",
    "last_updated_on": "2023-08-02T08:41:57.000Z",
    "user": {
        "user_id": 1,
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-02T08:35:04.000Z",
        "status": "active",
        "created_on": "2023-08-02T08:35:04.000Z",
        "last_updated_on": "2023-08-02T08:35:04.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    },
    "trip": {
        "trip_id": 3,
        "from_city_id": 1,
        "to_city_id": 2,
        "from_city_name": "Dhaka",
        "to_city_name": "Chittagong",
        "name": "Sunrise Infinite",
        "description": "A wonderful Trip, it will be.",
        "image_url": "dummy.jpg",
        "total_price": 32571,
        "start_date": "2023-06-30T18:00:00.000Z",
        "end_date": "2023-07-24T18:00:00.000Z",
        "created_on": "2023-08-02T08:35:51.000Z",
        "last_updated_on": "2023-08-02T08:35:51.000Z",
        "deleted_on": null
    }
}
```

## d. Confirm Payment for TripBooking
### user_id is auto grabbed from req.user
Endpoint URL: 
```
PUT
```
```
/api/v1/tripbooking/payment/
```  
Request Body:    
```json
{
    "trip_id": 1,
    "payment_method": "bkash",
    "transaction_id": "ABCDE"
}
```
Example Response:  
```json
{
    "user_id": 2,
    "trip_id": 1,
    "booking_date": "2023-08-02T13:38:21.000Z",
    "is_paid": 1,
    "is_processed": 0,
    "is_completed": 0,
    "payment_method": "bkash",
    "transaction_id": "ABCDE",
    "payment_date": "2023-08-02T13:40:17.000Z",
    "completion_date": null,
    "is_private": 1,
    "created_on": "2023-08-02T13:38:21.000Z",
    "last_updated_on": "2023-08-02T13:40:17.000Z",
    "user": {
        "user_id": 2,
        "email": "xyz@gmail.com",
        "role": "client",
        "name": "Jaber Ahmed Deeder",
        "bio": "Pro Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/xyz",
        "twitter_url": "twitter.com/xyz",
        "instagram_url": "instagram.com/xyz",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-02T09:59:14.000Z",
        "status": "active",
        "created_on": "2023-08-02T09:59:14.000Z",
        "last_updated_on": "2023-08-02T09:59:14.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    },
    "trip": {
        "trip_id": 1,
        "from_city_id": 1,
        "to_city_id": 2,
        "from_city_name": "Dhaka",
        "to_city_name": "Chittagong",
        "name": "Departmental Tour to Infinity",
        "description": "A wonderful Trip, it will be.",
        "image_url": "dummy.jpg",
        "total_price": 32571,
        "start_date": "2023-06-30T18:00:00.000Z",
        "end_date": "2023-07-24T18:00:00.000Z",
        "creator_user_id": 0,
        "created_on": "2023-08-02T10:05:52.000Z",
        "last_updated_on": "2023-08-02T10:05:52.000Z",
        "deleted_on": null
    }
}
```

## e. Confirm Processing for TripBooking
### It is intended that this route be used only by admins or managers
Endpoint URL: 
```
PUT
```
```
/api/v1/tripbooking/onlyadmin/processed/
```  
Request Body:    
```json
{
    "user_id": 1,
    "trip_id": 3
}
```
Example Response:  
```json
{
    "user_id": 1,
    "trip_id": 3,
    "booking_date": "2023-08-02T13:38:06.000Z",
    "is_paid": 1,
    "is_processed": 1,
    "is_completed": 0,
    "payment_method": "bkash",
    "transaction_id": "ABCDE",
    "payment_date": "2023-08-02T14:06:37.000Z",
    "completion_date": null,
    "is_private": 1,
    "created_on": "2023-08-02T13:38:06.000Z",
    "last_updated_on": "2023-08-02T14:06:54.000Z",
    "user": {
        "user_id": 1,
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-02T09:59:14.000Z",
        "status": "active",
        "created_on": "2023-08-02T09:59:14.000Z",
        "last_updated_on": "2023-08-02T09:59:14.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    },
    "trip": {
        "trip_id": 3,
        "from_city_id": 1,
        "to_city_id": 2,
        "from_city_name": "Dhaka",
        "to_city_name": "Chittagong",
        "name": "Summer 33 Vacation",
        "description": "Enjoy the summer break",
        "image_url": "trip_image.jpg",
        "total_price": 49878,
        "start_date": "2023-06-30T18:00:00.000Z",
        "end_date": "2023-07-24T18:00:00.000Z",
        "creator_user_id": 1,
        "created_on": "2023-08-02T10:10:58.000Z",
        "last_updated_on": "2023-08-02T10:10:58.000Z",
        "deleted_on": null
    }
}
```

## f. Confirm Completion for TripBooking
### It is intended that this route be used only by admins or managers
Endpoint URL: 
```
PUT
```
```
/api/v1/tripbooking/onlyadmin/complete/
```  
Request Body:    
```json
{
    "user_id": 1,
    "trip_id": 3
}
```
Example Response:  
```json
{
    "user_id": 1,
    "trip_id": 3,
    "booking_date": "2023-08-02T13:38:06.000Z",
    "is_paid": 1,
    "is_processed": 1,
    "is_completed": 1,
    "payment_method": "bkash",
    "transaction_id": "ABCDE",
    "payment_date": "2023-08-02T14:06:37.000Z",
    "completion_date": "2023-08-02T14:08:21.000Z",
    "is_private": 1,
    "created_on": "2023-08-02T13:38:06.000Z",
    "last_updated_on": "2023-08-02T14:08:21.000Z",
    "user": {
        "user_id": 1,
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-02T09:59:14.000Z",
        "status": "active",
        "created_on": "2023-08-02T09:59:14.000Z",
        "last_updated_on": "2023-08-02T09:59:14.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    },
    "trip": {
        "trip_id": 3,
        "from_city_id": 1,
        "to_city_id": 2,
        "from_city_name": "Dhaka",
        "to_city_name": "Chittagong",
        "name": "Summer 33 Vacation",
        "description": "Enjoy the summer break",
        "image_url": "trip_image.jpg",
        "total_price": 49878,
        "start_date": "2023-06-30T18:00:00.000Z",
        "end_date": "2023-07-24T18:00:00.000Z",
        "creator_user_id": 1,
        "created_on": "2023-08-02T10:10:58.000Z",
        "last_updated_on": "2023-08-02T10:10:58.000Z",
        "deleted_on": null
    }
}
```

## g. Delete a TripBooking ( Soft Deletion )
### user_id is auto grabbed from req.user
Endpoint URL:  
```
DELETE
```
```
/api/v1/tripbooking/2
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "user_id": 1,
    "trip_id": 2,
    "booking_date": "2023-08-02T14:15:04.000Z",
    "is_paid": 0,
    "is_processed": 0,
    "is_completed": 0,
    "payment_method": null,
    "transaction_id": null,
    "payment_date": null,
    "completion_date": null,
    "is_private": null,
    "created_on": "2023-08-02T14:15:04.000Z",
    "last_updated_on": "2023-08-02T14:15:04.000Z",
    "user": {
        "user_id": 1,
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-02T14:11:02.000Z",
        "status": "active",
        "created_on": "2023-08-02T14:11:02.000Z",
        "last_updated_on": "2023-08-02T14:11:02.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    },
    "trip": {
        "trip_id": 1,
        "from_city_id": 1,
        "to_city_id": 2,
        "from_city_name": "Dhaka",
        "to_city_name": "Chittagong",
        "name": "Mini Tour",
        "description": "A wonderful Trip, it will be.",
        "image_url": "dummy.jpg",
        "total_price": 29728,
        "start_date": "2023-06-30T18:00:00.000Z",
        "end_date": "2023-07-24T18:00:00.000Z",
        "creator_user_id": 1,
        "created_on": "2023-08-02T14:13:58.000Z",
        "last_updated_on": "2023-08-02T14:13:58.000Z",
        "deleted_on": null
    }
}
```

## h. Delete a TripBooking ( Permanent Deletion )
### user_id is auto grabbed from req.user
Endpoint URL:
```
DELETE
```
```
/api/v1/tripbooking/danger/2
``` 
Request Body: `None`    
Example Response:    
```json
{
    "user_id": "1",
    "trip_id": "2",
    "status": "permanently deleted"
}
```

# Post

## a. Get Single Post by post_id

Endpoint URL:    
```
GET
```
```
/api/v1/post/2
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "post_id": 2,
    "user_id": 1,
    "posting_date": "2023-08-03T09:34:12.000Z",
    "description": "First Post",
    "image_url": "dummy.jpg"
}
```

## b. Get Single Post Details by post_id

Endpoint URL:    
```
GET
```
```
/api/v1/post/details/1
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "post_id": 1,
    "user_id": 1,
    "posting_date": "2023-08-03T09:30:54.000Z",
    "description": "hi",
    "image_url": "hello",
    "comments": [
        {
            "comment_id": 4,
            "user_id": 1,
            "post_id": 1,
            "commenting_date": "2023-07-28T18:00:00.000Z",
            "text": "This is a great post!",
            "upvote_count": 10,
            "user": {
                "user_id": 1,
                "username": "aaniksahaa",
                "email": "abc@gmail.com",
                "role": "client",
                "name": "Anik Saha",
                "bio": "Little Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/abc",
                "twitter_url": "twitter.com/abc",
                "instagram_url": "instagram.com/abc",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-03T07:32:21.000Z",
                "status": "active",
                "created_on": "2023-08-03T07:32:21.000Z",
                "last_updated_on": "2023-08-03T07:32:21.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        },
        {
            "comment_id": 5,
            "user_id": 1,
            "post_id": 1,
            "commenting_date": "2023-07-28T18:00:00.000Z",
            "text": "Another Comment done",
            "upvote_count": 10,
            "user": {
                "user_id": 1,
                "username": "aaniksahaa",
                "email": "abc@gmail.com",
                "role": "client",
                "name": "Anik Saha",
                "bio": "Little Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/abc",
                "twitter_url": "twitter.com/abc",
                "instagram_url": "instagram.com/abc",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-03T07:32:21.000Z",
                "status": "active",
                "created_on": "2023-08-03T07:32:21.000Z",
                "last_updated_on": "2023-08-03T07:32:21.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        },
        {
            "comment_id": 6,
            "user_id": 1,
            "post_id": 1,
            "commenting_date": "2023-07-28T18:00:00.000Z",
            "text": "Yet Another comment done!",
            "upvote_count": 10,
            "user": {
                "user_id": 1,
                "username": "aaniksahaa",
                "email": "abc@gmail.com",
                "role": "client",
                "name": "Anik Saha",
                "bio": "Little Coder",
                "city_id": 1,
                "facebook_url": "facebook.com/abc",
                "twitter_url": "twitter.com/abc",
                "instagram_url": "instagram.com/abc",
                "profile_picture": "dummy.jpg",
                "dob": "2002-09-16T18:00:00.000Z",
                "registration_date": "2023-08-03T07:32:21.000Z",
                "status": "active",
                "created_on": "2023-08-03T07:32:21.000Z",
                "last_updated_on": "2023-08-03T07:32:21.000Z",
                "city": {
                    "city_id": 1,
                    "name": "Dhaka",
                    "country_name": "Bangladesh",
                    "population": 168957745,
                    "weather_type": "rainy"
                }
            }
        }
    ],
    "reacts": [
        {
            "user_id": 1,
            "react_type": "like",
            "reacting_date": "2023-08-03T12:28:22.000Z"
        },
        {
            "user_id": 2,
            "react_type": "love",
            "reacting_date": "2023-07-28T18:00:00.000Z"
        }
    ]
}
```

## c. Get Post Details by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/post?user_id=1&posting_date=2023-08-03&page=2&per_page=2&orderby=posting_date&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "post_id": 8,
        "user_id": 1,
        "posting_date": "2023-08-03T09:34:47.000Z",
        "description": "Amazing Post",
        "image_url": "dummy.jpg",
        "comments": [
            {
                "comment_id": 7,
                "user_id": 1,
                "post_id": 8,
                "commenting_date": "2023-08-03T16:39:19.000Z",
                "text": "cool post",
                "upvote_count": 0,
                "user": {
                    "user_id": 1,
                    "username": "aaniksahaa",
                    "email": "abc@gmail.com",
                    "role": "client",
                    "name": "Anik Saha",
                    "bio": "Little Coder",
                    "city_id": 1,
                    "facebook_url": "facebook.com/abc",
                    "twitter_url": "twitter.com/abc",
                    "instagram_url": "instagram.com/abc",
                    "profile_picture": "dummy.jpg",
                    "dob": "2002-09-16T18:00:00.000Z",
                    "registration_date": "2023-08-03T07:32:21.000Z",
                    "status": "active",
                    "created_on": "2023-08-03T07:32:21.000Z",
                    "last_updated_on": "2023-08-03T07:32:21.000Z",
                    "city": {
                        "city_id": 1,
                        "name": "Dhaka",
                        "country_name": "Bangladesh",
                        "population": 168957745,
                        "weather_type": "rainy"
                    }
                }
            }
        ],
        "reacts": [
            {
                "user_id": 1,
                "react_type": "like",
                "reacting_date": "2023-08-03T13:04:17.000Z"
            }
        ]
    },
    {
        "post_id": 7,
        "user_id": 1,
        "posting_date": "2023-08-03T09:34:42.000Z",
        "description": "Cool Post",
        "image_url": "dummy.jpg",
        "comments": [],
        "reacts": []
    }
]
```

## d. Create New Post
### user_id is auto grabbed from req.user
Endpoint URL: 
```
POST
```
```
/api/v1/post/
```  
Request Body:    
```json
{
    "description": "Amazing Post",
    "image_url": "amazing.jpg"
}
```
Example Response:  
```json
{
    "post_id": 10,
    "user_id": 1,
    "posting_date": "2023-08-03T09:38:43.000Z",
    "description": "Amazing Post",
    "image_url": "amazing.jpg"
}
```
## e. Update a Post
### user_id is auto grabbed from req.user
Endpoint URL: 
```
PUT
```
```
/api/v1/post/
```  
Request Body:    
```json
{
    "post_id": 10,
    "description": "Updated Amazing Post",
    "image_url": "amazing.jpg"
}
```
Example Response:  
```json
{
    "post_id": 10,
    "user_id": 2,
    "posting_date": "2023-08-03T09:38:43.000Z",
    "description": "Updated Amazing Post",
    "image_url": "amazing.jpg"
}
```

## f. Delete a Post

Endpoint URL:  
```
DELETE
```
```
api/v1/post/10
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "post_id": 10,
    "user_id": 2,
    "posting_date": "2023-08-03T09:38:43.000Z",
    "description": "Updated Amazing Post",
    "image_url": "amazing.jpg"
}
```
## g. Reacting to a post
### The user_id will be auto grabbed from req.user
### Allowable reacts: 1 - like, 2 - love, 3 - haha, 4 - care, 5 - wow, 6 - sad
Endpoint URL:    
```
POST
```
```
/api/v1/post/11/react/4
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "user_id": 1,
    "post_id": 11,
    "react_type": "care",
    "reacting_date": "2023-08-03T13:07:59.000Z"
}
```

## h. Removing react from a post
### The user_id will be auto grabbed from req.user
### Allowable reacts: 1 - like, 2 - love, 3 - haha, 4 - care, 5 - wow, 6 - sad
Endpoint URL:    
```
DELETE
```
```
/api/v1/post/11/react/
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "user_id": 1,
    "post_id": 11,
    "react_type": "haha",
    "reacting_date": "2023-08-03T13:20:38.000Z"
}
```

# Comment

## a. Get Single Comment by comment_id

Endpoint URL:    
```
GET
```
```
/api/v1/comment/3
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "comment_id": 3,
    "user_id": 2,
    "post_id": 2,
    "commenting_date": "2023-07-28T18:00:00.000Z",
    "text": "This is a great post!",
    "upvote_count": 10,
    "user": {
        "user_id": 2,
        "username": "jab3r",
        "email": "xyz@gmail.com",
        "role": "client",
        "name": "Jaber Ahmed Deeder",
        "bio": "Pro Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/xyz",
        "twitter_url": "twitter.com/xyz",
        "instagram_url": "instagram.com/xyz",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-03T07:32:21.000Z",
        "status": "active",
        "created_on": "2023-08-03T07:32:21.000Z",
        "last_updated_on": "2023-08-03T07:32:21.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```

## b. Get Comments by querying on attributes ( Paginated )  

#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/comment?user_id=1&post_id=1&page=1&per_page=2&orderby=commenting_date&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "comment_id": 4,
        "user_id": 1,
        "post_id": 1,
        "commenting_date": "2023-07-28T18:00:00.000Z",
        "text": "This is a great post!",
        "upvote_count": 10,
        "user": {
            "user_id": 1,
            "username": "aaniksahaa",
            "email": "abc@gmail.com",
            "role": "client",
            "name": "Anik Saha",
            "bio": "Little Coder",
            "city_id": 1,
            "facebook_url": "facebook.com/abc",
            "twitter_url": "twitter.com/abc",
            "instagram_url": "instagram.com/abc",
            "profile_picture": "dummy.jpg",
            "dob": "2002-09-16T18:00:00.000Z",
            "registration_date": "2023-08-03T07:32:21.000Z",
            "status": "active",
            "created_on": "2023-08-03T07:32:21.000Z",
            "last_updated_on": "2023-08-03T07:32:21.000Z",
            "city": {
                "city_id": 1,
                "name": "Dhaka",
                "country_name": "Bangladesh",
                "population": 168957745,
                "weather_type": "rainy"
            }
        }
    },
    {
        "comment_id": 5,
        "user_id": 1,
        "post_id": 1,
        "commenting_date": "2023-07-28T18:00:00.000Z",
        "text": "Another Comment done",
        "upvote_count": 10,
        "user": {
            "user_id": 1,
            "username": "aaniksahaa",
            "email": "abc@gmail.com",
            "role": "client",
            "name": "Anik Saha",
            "bio": "Little Coder",
            "city_id": 1,
            "facebook_url": "facebook.com/abc",
            "twitter_url": "twitter.com/abc",
            "instagram_url": "instagram.com/abc",
            "profile_picture": "dummy.jpg",
            "dob": "2002-09-16T18:00:00.000Z",
            "registration_date": "2023-08-03T07:32:21.000Z",
            "status": "active",
            "created_on": "2023-08-03T07:32:21.000Z",
            "last_updated_on": "2023-08-03T07:32:21.000Z",
            "city": {
                "city_id": 1,
                "name": "Dhaka",
                "country_name": "Bangladesh",
                "population": 168957745,
                "weather_type": "rainy"
            }
        }
    }
]
```

## c. Create New Comment

Endpoint URL: 
```
POST
```
```
/api/v1/comment/
```  
Request Body:    
```json
{
    "post_id": 1,
    "text": "cool post, man"
}
```
Example Response:  
```json
{
    "comment_id": 1,
    "user_id": 1,
    "post_id": 1,
    "commenting_date": "2023-08-03T15:57:21.000Z",
    "text": "cool post, man",
    "upvote_count": 0,
    "user": {
        "user_id": 1,
        "username": "aaniksahaa",
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-03T07:32:21.000Z",
        "status": "active",
        "created_on": "2023-08-03T07:32:21.000Z",
        "last_updated_on": "2023-08-03T07:32:21.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```
## d. Update a Comment
Endpoint URL: 
```
PUT
```
```
/api/v1/comment/
```  
Request Body:    
```json
{
    "comment_id": "1",
    "text": "very cool post, man"
}
```
Example Response:  
```json
{
    "comment_id": 1,
    "user_id": 1,
    "post_id": 1,
    "commenting_date": "2023-08-03T15:57:21.000Z",
    "text": "very cool post, man",
    "upvote_count": 0,
    "user": {
        "user_id": 1,
        "username": "aaniksahaa",
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-03T07:32:21.000Z",
        "status": "active",
        "created_on": "2023-08-03T07:32:21.000Z",
        "last_updated_on": "2023-08-03T07:32:21.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```

## e. Delete a Comment

Endpoint URL:  
```
DELETE
```
```
api/v1/comment/2
```  
Request Body: 
```
None
```
Example Response:    
```json
{
    "comment_id": 2,
    "user_id": 1,
    "post_id": 1,
    "commenting_date": "2023-08-03T16:00:23.000Z",
    "text": "very cool post, man",
    "upvote_count": 0,
    "user": {
        "user_id": 1,
        "username": "aaniksahaa",
        "email": "abc@gmail.com",
        "role": "client",
        "name": "Anik Saha",
        "bio": "Little Coder",
        "city_id": 1,
        "facebook_url": "facebook.com/abc",
        "twitter_url": "twitter.com/abc",
        "instagram_url": "instagram.com/abc",
        "profile_picture": "dummy.jpg",
        "dob": "2002-09-16T18:00:00.000Z",
        "registration_date": "2023-08-03T07:32:21.000Z",
        "status": "active",
        "created_on": "2023-08-03T07:32:21.000Z",
        "last_updated_on": "2023-08-03T07:32:21.000Z",
        "city": {
            "city_id": 1,
            "name": "Dhaka",
            "country_name": "Bangladesh",
            "population": 168957745,
            "weather_type": "rainy"
        }
    }
}
```

# Feed

## a. Get Feed of current user ( Paginated )  
### user_id auto grabbed from req.user
#### Note that, all attributes are optional, you can either mention, not mention or leave them blank    

Endpoint URL:  
```
GET
```
```
/api/v1/feed?page=1&per_page=8&orderby=posting_date&ordertype=desc
```
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "post_id": 13,
        "user_id": 2,
        "posting_date": "2023-07-28T18:00:00.000Z",
        "description": "Enjoying a beautiful sunset!",
        "image_url": "https://example.com/sunset.jpg",
        "comments": [],
        "reacts": []
    },
    {
        "post_id": 14,
        "user_id": 2,
        "posting_date": "2023-07-28T18:00:00.000Z",
        "description": "New Amazing Post",
        "image_url": "amazing.jpg",
        "comments": [],
        "reacts": []
    },
    {
        "post_id": 20,
        "user_id": 11,
        "posting_date": "2023-08-03T20:31:17.000Z",
        "description": "At Canada Guys!",
        "image_url": "https://example.com/sunset.jpg",
        "comments": [
            {
                "comment_id": 9,
                "user_id": 1,
                "post_id": 20,
                "commenting_date": "2023-08-03T20:33:06.000Z",
                "text": "wow, Canada is cool",
                "upvote_count": 0,
                "user": {
                    "user_id": 1,
                    "username": "aaniksahaa",
                    "email": "abc@gmail.com",
                    "role": "client",
                    "name": "Anik Saha",
                    "bio": "Little Coder",
                    "city_id": 1,
                    "facebook_url": "facebook.com/abc",
                    "twitter_url": "twitter.com/abc",
                    "instagram_url": "instagram.com/abc",
                    "profile_picture": "dummy.jpg",
                    "dob": "2002-09-16T18:00:00.000Z",
                    "registration_date": "2023-08-03T07:32:21.000Z",
                    "status": "active",
                    "created_on": "2023-08-03T07:32:21.000Z",
                    "last_updated_on": "2023-08-03T07:32:21.000Z",
                    "city": {
                        "city_id": 1,
                        "name": "Dhaka",
                        "country_name": "Bangladesh",
                        "population": 168957745,
                        "weather_type": "rainy"
                    }
                }
            }
        ],
        "reacts": [
            {
                "user_id": 1,
                "react_type": "care",
                "reacting_date": "2023-08-03T20:34:20.000Z"
            }
        ]
    },
    {
        "post_id": 19,
        "user_id": 11,
        "posting_date": "2023-08-03T20:31:08.000Z",
        "description": "At Bulgeria Guys!",
        "image_url": "https://example.com/sunset.jpg",
        "comments": [],
        "reacts": []
    },
    {
        "post_id": 11,
        "user_id": 1,
        "posting_date": "2023-08-03T12:43:56.000Z",
        "description": "Updated Amazing Post",
        "image_url": "amazing.jpg",
        "comments": [],
        "reacts": []
    },
    {
        "post_id": 9,
        "user_id": 1,
        "posting_date": "2023-08-03T09:38:39.000Z",
        "description": "Amazing Post",
        "image_url": "amazing.jpg",
        "comments": [],
        "reacts": [
            {
                "user_id": 1,
                "react_type": "haha",
                "reacting_date": "2023-08-03T12:56:51.000Z"
            }
        ]
    },
    {
        "post_id": 8,
        "user_id": 1,
        "posting_date": "2023-08-03T09:34:47.000Z",
        "description": "Amazing Post",
        "image_url": "dummy.jpg",
        "comments": [
            {
                "comment_id": 7,
                "user_id": 1,
                "post_id": 8,
                "commenting_date": "2023-08-03T16:39:19.000Z",
                "text": "cool post",
                "upvote_count": 0,
                "user": {
                    "user_id": 1,
                    "username": "aaniksahaa",
                    "email": "abc@gmail.com",
                    "role": "client",
                    "name": "Anik Saha",
                    "bio": "Little Coder",
                    "city_id": 1,
                    "facebook_url": "facebook.com/abc",
                    "twitter_url": "twitter.com/abc",
                    "instagram_url": "instagram.com/abc",
                    "profile_picture": "dummy.jpg",
                    "dob": "2002-09-16T18:00:00.000Z",
                    "registration_date": "2023-08-03T07:32:21.000Z",
                    "status": "active",
                    "created_on": "2023-08-03T07:32:21.000Z",
                    "last_updated_on": "2023-08-03T07:32:21.000Z",
                    "city": {
                        "city_id": 1,
                        "name": "Dhaka",
                        "country_name": "Bangladesh",
                        "population": 168957745,
                        "weather_type": "rainy"
                    }
                }
            }
        ],
        "reacts": [
            {
                "user_id": 1,
                "react_type": "like",
                "reacting_date": "2023-08-03T13:04:17.000Z"
            }
        ]
    },
    {
        "post_id": 7,
        "user_id": 1,
        "posting_date": "2023-08-03T09:34:42.000Z",
        "description": "Cool Post",
        "image_url": "dummy.jpg",
        "comments": [],
        "reacts": []
    }
]
```
# Stat

## a. Get Stat of Hotels

Endpoint URL:    
```
GET
```
```
/api/v1/stat/hotel
```  
Request Body: 
```
None
```
Example Response:    
```json
[
    {
        "hotel_id": 1,
        "total_revenue": 102207,
        "favorite_count": 1,
        "hotel": {
            "hotel_id": 1,
            "name": "Quaint Villa Hotel",
            "address": "48 Lakeview Drive Bhola , Bangladesh",
            "city_id": 25,
            "description": "A Exquisitely Rustic hotel in Bhola.",
            "image_url": "dummy.jpg",
            "price_per_day": 4867,
            "phone": "019157054121",
            "email": "quaintvillahotel@gmail.com",
            "has_wifi": 1,
            "has_parking": 1,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 25,
                "name": "Bhola",
                "country_name": "Bangladesh",
                "population": 183113,
                "weather_type": "sunny"
            }
        }
    },
    {
        "hotel_id": 5,
        "total_revenue": 74888,
        "favorite_count": 0,
        "hotel": {
            "hotel_id": 5,
            "name": "Glorious Hideaway Hotel",
            "address": "18 Beach Road Dinajpur , Bangladesh",
            "city_id": 17,
            "description": "A Extravagantly Glorious hotel in Dinajpur.",
            "image_url": "dummy.jpg",
            "price_per_day": 3256,
            "phone": "015238514617",
            "email": "glorioushideawayhotel@gmail.com",
            "has_wifi": 0,
            "has_parking": 0,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 17,
                "name": "Dinajpur",
                "country_name": "Bangladesh",
                "population": 204874,
                "weather_type": "cold"
            }
        }
    },
    {
        "hotel_id": 37,
        "total_revenue": 32104,
        "favorite_count": 1,
        "hotel": {
            "hotel_id": 37,
            "name": "Modern Palace Hotel",
            "address": "29 Ocean Drive Tangail , Bangladesh",
            "city_id": 29,
            "description": "A Uniquely Boutique hotel in Tangail.",
            "image_url": "dummy.jpg",
            "price_per_day": 4013,
            "phone": "011504484489",
            "email": "modernpalacehotel@outlook.com",
            "has_wifi": 1,
            "has_parking": 0,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 29,
                "name": "Tangail",
                "country_name": "Bangladesh",
                "population": 160937,
                "weather_type": "rainy"
            }
        }
    },
    {
        "hotel_id": 23,
        "total_revenue": 29625,
        "favorite_count": 0,
        "hotel": {
            "hotel_id": 23,
            "name": "Seaside Retreat Hotel",
            "address": "39 Lakeview Drive Pabna , Bangladesh",
            "city_id": 14,
            "description": "A Majestically Cozy hotel in Pabna.",
            "image_url": "dummy.jpg",
            "price_per_day": 1975,
            "phone": "019769742786",
            "email": "seasideretreathotel@gmail.com",
            "has_wifi": 1,
            "has_parking": 1,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 14,
                "name": "Pabna",
                "country_name": "Bangladesh",
                "population": 389918,
                "weather_type": "sunny"
            }
        }
    },
    {
        "hotel_id": 8,
        "total_revenue": 21450,
        "favorite_count": 0,
        "hotel": {
            "hotel_id": 8,
            "name": "Charming Resort Hotel",
            "address": "33 Sunset Boulevard Bandarban , Bangladesh",
            "city_id": 24,
            "description": "A Majestically Spectacular hotel in Bandarban.",
            "image_url": "dummy.jpg",
            "price_per_day": 4290,
            "phone": "018711754651",
            "email": "charmingresorthotel@yahoo.com",
            "has_wifi": 0,
            "has_parking": 0,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 24,
                "name": "Bandarban",
                "country_name": "Bangladesh",
                "population": 126379,
                "weather_type": "rainy"
            }
        }
    },
    {
        "hotel_id": 24,
        "total_revenue": 16640,
        "favorite_count": 2,
        "hotel": {
            "hotel_id": 24,
            "name": "Glorious Cottage Hotel",
            "address": "39 Park Avenue Manikganj , Bangladesh",
            "city_id": 26,
            "description": "A Uniquely Glorious hotel in Manikganj.",
            "image_url": "dummy.jpg",
            "price_per_day": 1040,
            "phone": "015053009336",
            "email": "gloriouscottagehotel@gmail.com",
            "has_wifi": 0,
            "has_parking": 0,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 26,
                "name": "Manikganj",
                "country_name": "Bangladesh",
                "population": 160093,
                "weather_type": "rainy"
            }
        }
    },
    {
        "hotel_id": 28,
        "total_revenue": 12696,
        "favorite_count": 0,
        "hotel": {
            "hotel_id": 28,
            "name": "Rustic Sanctuary Hotel",
            "address": "54 Riverfront Bhola , Bangladesh",
            "city_id": 25,
            "description": "A Exceptionally Spectacular hotel in Bhola.",
            "image_url": "dummy.jpg",
            "price_per_day": 3174,
            "phone": "017479789959",
            "email": "rusticsanctuaryhotel@gmail.com",
            "has_wifi": 0,
            "has_parking": 0,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 25,
                "name": "Bhola",
                "country_name": "Bangladesh",
                "population": 183113,
                "weather_type": "sunny"
            }
        }
    },
    {
        "hotel_id": 25,
        "total_revenue": 6965,
        "favorite_count": 0,
        "hotel": {
            "hotel_id": 25,
            "name": "Elegant Lodge Hotel",
            "address": "64 Beach Road Sylhet , Bangladesh",
            "city_id": 8,
            "description": "A Gracefully Elegant hotel in Sylhet.",
            "image_url": "dummy.jpg",
            "price_per_day": 1393,
            "phone": "015316556115",
            "email": "elegantlodgehotel@yahoo.com",
            "has_wifi": 0,
            "has_parking": 1,
            "has_gym": 0,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 8,
                "name": "Sylhet",
                "country_name": "Bangladesh",
                "population": 3482659,
                "weather_type": "rainy"
            }
        }
    },
    {
        "hotel_id": 2,
        "total_revenue": 6314,
        "favorite_count": 1,
        "hotel": {
            "hotel_id": 2,
            "name": "Elegant Cottage Hotel",
            "address": "40 Beach Road Narsingdi , Bangladesh",
            "city_id": 12,
            "description": "A Majestically Rustic hotel in Narsingdi.",
            "image_url": "dummy.jpg",
            "price_per_day": 902,
            "phone": "014489813442",
            "email": "elegantcottagehotel@gmail.com",
            "has_wifi": 1,
            "has_parking": 1,
            "has_gym": 1,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 12,
                "name": "Narsingdi",
                "country_name": "Bangladesh",
                "population": 705768,
                "weather_type": "rainy"
            }
        }
    },
    {
        "hotel_id": 30,
        "total_revenue": 4115,
        "favorite_count": 0,
        "hotel": {
            "hotel_id": 30,
            "name": "Charming Castle Hotel",
            "address": "67 Harbor View Narsingdi , Bangladesh",
            "city_id": 22,
            "description": "A Serenely Cozy hotel in Narsingdi.",
            "image_url": "dummy.jpg",
            "price_per_day": 823,
            "phone": "018449479335",
            "email": "charmingcastlehotel@gmail.com",
            "has_wifi": 0,
            "has_parking": 0,
            "has_gym": 1,
            "creator_user_id": 0,
            "created_on": "2023-08-03T07:32:22.000Z",
            "last_updated_on": "2023-08-03T07:32:22.000Z",
            "city": {
                "city_id": 22,
                "name": "Narsingdi",
                "country_name": "Bangladesh",
                "population": 705768,
                "weather_type": "cold"
            }
        }
    }
]
```
