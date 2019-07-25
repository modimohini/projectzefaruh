module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('Event', {
        eventName: DataTypes.STRING,

        eventLocation: DataTypes.STRING,
        
        eventPriceRange: DataTypes.STRING,
    
        eventDate: DataTypes.DATE,
            
        eventTime: DataTypes.TIME,

        eventDescription: DataTypes.STRING,

        eventCategory: DataTypes.STRING,

        eventImage: DataTypes.BLOB,
    
       
    });

    return Event;
};