let teams = [
    {name: 'Milan',             country: 'Italy',       nationalLeague: 18, championsLeague: 7, nationalCup: 5, worldCup: 4 },
    {name: 'Juventus',          country: 'Italy',       nationalLeague: 34, championsLeague: 2, nationalCup: 13, worldCup: 2 },
    {name: 'Inter Milan',       country: 'Italy',       nationalLeague: 18, championsLeague: 3, nationalCup: 7, worldCup: 3 },
    {name: 'Real Madrid',       country: 'Spain',       nationalLeague: 33, championsLeague: 13, nationalCup: 19, worldCup: 6 },
    {name: 'Barcelona',         country: 'Spain',       nationalLeague: 25, championsLeague: 5, nationalCup: 30, worldCup: 3 },
    {name: 'Manchester United', country: 'England',     nationalLeague: 20, championsLeague: 3, nationalCup: 12, worldCup: 2 },
    {name: 'Liverpool',         country: 'England',     nationalLeague: 18, championsLeague: 5, nationalCup: 7, worldCup: 0 },
    {name: 'Bayern Munchen',    country: 'Germany',     nationalLeague: 29, championsLeague: 5, nationalCup: 18, worldCup: 3 },
    {name: 'Ajax',              country: 'Netherlands', nationalLeague: 33, championsLeague: 4, nationalCup: 18, worldCup: 2 }
]

function compareTeam(key) {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0
        }

        const propA = a[key]
        const propB = b[key]

        return propA > propB ? -1 : 1 //desc
    }
}

function findByCriteria(criteria) {
    const result = teams.filter((team) => {
        const matchName = criteria.name ? team.name.includes(criteria.name) : true
        const matchCountry = criteria.country ? team.country === criteria.country : true
        return matchName && matchCountry
    })

    if( !criteria.order ) {
        return result;
    }
    
    return result.sort(compareTeam(criteria.order));
}

export default  {
    findAll: () => teams,
    findBy: findByCriteria
}