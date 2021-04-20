//bcrypt
//Tuto => https://www.youtube.com/watch?v=_XxrfGrdrB8

(async() => {
    const bcrypt = require('bcryptjs');
    try {
        let password = "crevette";
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);

        console.log(hash);
    }
    catch(error) {
        console.log(error.message);
    }
})()