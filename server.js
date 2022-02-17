const syncAndSeed = require('./data_layer/syncAndSeed');
const main_page = require('./views/main_page');
const team_page = require('./views/team_page');
const {Teams, Players}  = require('./data_layer/db');
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 3000;
syncAndSeed();
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

app.get('/', (req, res) => res.redirect('/teams'));

app.get('/teams', async(req, res, next) => {
    try{
        const teams = await Teams.findAll();
        res.send(main_page(teams));
    }
    catch(error){
        next(error);
    }
})

app.get('/team/:id', async (req, res, next) => {
    try{
        const players = await Players.findAll({
            where: {
                TeamId: req.params.id
            }
        })
        const team = await Teams.findByPk(req.params.id);
        res.send(team_page(team, players, await Teams.findAll()));
    }
    catch(error){
        next(error);
    }

})

app.post('/team', async (req, res, next) => {
    try{
        await Teams.create({
            name: req.body.teamName,
            homeTown: req.body.homeTown,
            stadium: req.body.stadiumName
        })

        res.redirect('/');
    }
    catch(error){
        next(error);
    }
})

app.post('/team/:id', async(req, res, next) => {

    try{
        await Players.create({
            name: req.body.playerName,
            position: req.body.postion,
            age: req.body.age,
            TeamId: req.params.id
        })
        res.redirect(`/team/${req.params.id}`);

    }
    catch(error){
        next(error);
    }
})

app.delete('/player/:id', async (req, res, next) => {
    try{
        const player = await Players.findByPk(req.params.id);
        player.destroy();
        res.redirect(`/team/${player.TeamId}`);
        
    }
    catch(error){
        next(error);
    }
})


