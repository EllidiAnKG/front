const teams = document.querySelector('.flexBlock')
const url = 'http://localhost:3000/profile/team';
const options ={
    method: 'GET'
}
const newTeam = (team) => {
    const teamsDiv = document.createElement('div')
    teamsDiv.classList.add('moreNewBlock')
    console.log(team.game)
    teamsDiv.innerHTML =
        `<p>Игра: ${team.game}</p>
        <p>Название команды: ${team.teamName}</p>
        <p>Капитан: ${team.captain }</p>
        <p>Возраст: <br>16+</br></p>
        <p>Кол-во:<br>1/18</br></p>
        <p><br>New!</br></p>
        `

    teams.append(teamsDiv)
}
const teamsPost = async () => {
    try {
        const teams = await fetch(url, options)
        const teamsJson = await teams.json()
        inPrint = teamsJson.map(teams => newTeam(teams))
    } catch (error) {
        console.error()
    }
}
teamsPost();