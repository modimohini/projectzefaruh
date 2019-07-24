DROP DATABASE IF EXISTS zefaruhevents;
CREATE database zefaruhevents;

USE zefaruhevents;


USE zefaruhevents;

CREATE TABLE user (
user_id INT NOT NULL AUTO_INCREMENT,
userName VARCHAR(100) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
userImage  LONGBLOB NOT NULL, 
Favorite VARCHAR(255) NOT NULL,
PRIMARY KEY (user_id)
);

USE zefaruhevents;
CREATE TABLE Event (
    EventID INT NOT NULL AUTO_INCREMENT, 
    EventName VARCHAR(100) NOT NULL,
    EventLocation VARCHAR(100) NOT NULL,
    EventPriceRange VARCHAR(100) NOT NULL,
    EventDate Date (100) NOT NULL,
    EventTime Time (100) NOT NULL,
    EventDescription VARCHAR(255) NOT NULL,
    EventCategory VARCHAR(255) NOT NULL,
    EventImage  LONGBLOB NOT NULL, 
    PRIMARY KEY (EventID)
    
);