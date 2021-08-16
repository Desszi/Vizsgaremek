const jwt = require('jsonwebtoken');

const Users = [
    {
        email: '09dporkolabm@gmail.com',
        password: 'test1234',
        role: 'admin'
    },
    {
        email: '09dporkolabm@gmail.com',
        password: 'test1234',
        role: 'user'
    }
];

module.exports = (req, res) => {
    const { email, password } = req.body;

    const user = Users.find( 
        u => u.email === email && u.password === password 
    );

    if (user) {
        const accessToken = jwt.sign({
            email: user.email,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET);

        res.json({
            accessToken
        });
    } else {
        res.send('Email or password incorrect.');
    }

};
