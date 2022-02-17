


module.exports = (team, players, teams) => {
    return`
    <html>
        <head>
            <title>The ${team.dataValues.name}</title>
            <link rel='stylesheet' href='/styles.css'>
        </head>
        <body>
            <h1>The ${team.dataValues.name}</h1>
            <form method='POST' action='/team/${team.dataValues.id}'>
                <input name='playerName' placeholder='Player Name'/>
                <input name='position' placeholder='Position'/>
                <input name='age' placeholder='age'/>

                <button>Create</button>
            </form>
            
            <ul>
                ${players.map((player) => {
                    return `<li>${player.dataValues.name}
                        <form method='POST' action='/player/${player.dataValues.id}?_method=DELETE'>
                            <button>x</button>
                        </from>
                    
                    </li>`
                }).join('')}

            </ul>
            <a href='/'>Back</a>
        </body>

    </html>
    
    `
}