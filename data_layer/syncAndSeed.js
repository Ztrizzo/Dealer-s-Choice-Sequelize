const db = require('./db.js');
const {sequelize} = db;
const {Players} = db;
const {Teams} = db;

async function syncAndSeed(){
    try{
        await sequelize.sync({force: true});
        const GB = await Teams.create({
            name: 'Packers',
            homeTown: 'Green Bay, WI',
            stadium: 'Lambeau Field'
        })
        const CHI = await Teams.create({
            name: 'Bears',
            homeTown: 'Chicago, IL',
            stadium: 'Soldier Field'
        })
        const DET = await Teams.create({
            name: 'Lions',
            homeTown: 'Detroit, MI',
            stadium: 'Ford Field'
        })
        const MIN = await Teams.create({
            name: 'Vikings',
            homeTown: 'Minneapolis, MN',
            stadium: 'US Bank Stadium'
        })

        await Players.create({
            name: 'Aaron Rodgers',
            position: 'QB',
            age: 38,
            TeamId: GB.dataValues.id
        })

        await Players.create({
            name: 'Kirk Cousins',
            position: 'QB',
            age: 33,
            TeamId: MIN.dataValues.id
        })
        
        await await Players.create({
            name: 'Jared Goff',
            position: 'QB',
            age: 27,
            TeamId: DET.dataValues.id
        })

        await await Players.create({
            name: 'Justin Fields',
            position: 'QB',
            age: 22,
            TeamId: CHI.dataValues.id
        })


    }
    catch(error){
        console.log(error);
    }

}

module.exports = syncAndSeed;