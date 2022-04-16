function gameObject(){
    return gameObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['black', 'white'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounce: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slumDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounce: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slumDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounce: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slumDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounce: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slumDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounce: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slumDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: [ "turquoise", "purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounce: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slumDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounce: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slumDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounce: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slumDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounce: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slumDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounce: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slumDunks: 12
                }
            }
        }
    
    }
}


function numPointsScored(name){
    let game = gameObject()
    for(let mainKeys in game){
        if(typeof game[mainKeys] == 'object'){
            for(let keys in game[mainKeys]){
                if(keys == 'players'){
                    for(let user in game[mainKeys][keys]){
                        if(user == name){
                            let res = game[mainKeys][keys][user].points
                            console.log(res);
                        }
                    }
                }
            }
        }
    }
}
numPointsScored('Brendan Haywood');


function shoeSize(name){
    let size = gameObject
    for(let mainKeys in size){
        if(typeof size[mainKeys] == 'object'){
            for(let keys in size[mainKeys]){
                if(keys == 'players'){
                    for(let user in size[mainKeys][keys]){
                        if(user == name){
                            let res = size[mainKeys][keys][user].shoe
                            console.log(res);
                        }
                    }
                }
            }
        }
    }
}
shoeSize("Jason Terry")

function teamColors(team){
    let colors = gameObject
    for(let mainKeys in colors){
        for(let keys in colors[mainKeys]){
            if(keys ==  'teamName'){
                if(colors[mainKeys][keys] ==  team){
                    let res = colors[mainKeys].colors
                    console.log(res);
                }
            }
        }
    }
}
teamColors("Brooklyn Nets")

function teamNames(){
    let newTeams = []
    let teamNames = gameObject
    for(let mainKeys in teamNames){
        for(let keys in teamNames[mainKeys]){
            if(keys ==  'teamName'){
                let res = teamNames[mainKeys][keys]
                newTeams.push(res)
                console.log(newTeams);
            }
        }
    }
}
teamNames()

function playerNumbers(team){
    let newNumArr = []
    let numbers = gameObject
    for(let mainKeys in numbers){
        for(let keys in numbers[mainKeys]){
            if(keys ==  'teamName'){
                if(numbers[mainKeys][keys] ==  team){
                    let res = numbers[mainKeys].players
                    for(let num in res){
                        let allNums = res[num].number
                        newNumArr.push(allNums)
                    }
                    console.log(newNumArr);
                }
            }
        }
    }
}

playerNumbers("Brooklyn Nets")

function playerStats(name){
    let player = gameObject
    for(let mainKeys in player){
        if(typeof player[mainKeys] == 'object'){
            for(let keys in player[mainKeys]){
                if(keys == 'players'){
                    for(let user in player[mainKeys][keys]){
                        if(user == name){
                            let res = player[mainKeys][keys][user]
                            console.log(res);
                        }
                    }
                }
            }
        }
    }
}
playerStats("Ben Gordon")






