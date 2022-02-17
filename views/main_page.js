module.exports = (teams) => {
    return `
    <html>
        <head>
            <title>NFL Teams</title>
            <link rel='stylesheet' href='/styles.css'>
        </head>
        <body>
            <h1>NFL Teams</h1>
            <form method='POST' action='/team'>
                <input name='teamName' placeholder='New Team Name'/>
                <input name='homeTown' placeholder='Home Town'/>
                <input name='stadiumName' placeholder='Stadium Name'/>
                <button>Create</button>
            </form>
            <ul>
                ${teams.map((team) => {
                    return `
                        <li>
                            <a href='/team/${team.dataValues.id}'>${team.dataValues.name}</a>
                        </li>
                    `
                }).join('')}
            </ul>
        </body>
    
    
    
    </html>
    
    `

}