
const faker = require('faker')
const bcrypt = require('bcryptjs');

 const genUser = (genNum) => {
    faker.seed(200)
    let usersArr = []
    for(let i = 0; i < genNum; i++ ){
        let username = i%4 !== 0 ? faker.name.findName(): faker.internet.userName()
        let email = faker.internet.email(username)

        let hashedPassword = bcrypt.hashSync('password')

        let private = `${Math.round(Math.random())}`

        usersArr.push({
            username,
            email,
            hashedPassword,
            private,
        })
    }
    return usersArr
}

let potionnames = `Vial of Escapes
Elixir of Nimble Feet
Elixir of Mageblood
Vial of Potency
Flask of Clean Deaths
Elixir of Conflicts
Flask of Impotence
Elixir of Justice
Phial of the Sun
Elixir of Godly Powers
Draught of Balance
Draught of Blood
Tonic of Sunlight
Flask of the Beginning
Potion of the Sloth
Elixir of Reflexes
Potion of the Moon
Flask of Dreamless Sleeps
Philter of Nimble Feet
Potion of Anger`.split('\n')

const genPotions = () =>{
    let potionArr = []

    potionnames.forEach(potion => {
        let categoryId = Math.floor(Math.random() * (7 - 1 + 1)) + 1
        let creatorId = Math.floor(Math.random() * (26 - 1 + 1)) + 1
        let name = potion
        let description = faker.lorem.paragraph()
        potionArr.push({categoryId,creatorId,name,description})
    })
    return potionArr
}
module.exports = {genUser,genPotions}
