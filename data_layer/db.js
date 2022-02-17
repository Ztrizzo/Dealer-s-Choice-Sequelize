const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost/nfl_players');
const { STRING } = Sequelize;
const { INTEGER } = Sequelize;
const Players = sequelize.define('Player', {
    name: {
        type: STRING
    },
    position: {
        type: STRING
    },
    age:{
        type: INTEGER
    }

})


const Teams = sequelize.define('Team', {
    name:{
        type: STRING
    },
    homeTown:{
        type: STRING
    },
    stadium: {
        type: STRING
    }
})

Players.belongsTo(Teams);
Teams.hasMany(Players);


module.exports = {
    sequelize,
    Teams,
    Players
}