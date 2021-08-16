
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

module.exports = {genUser}
