const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req,res) => {
    const schema ={
        name: 'string|empty:false',
        email: 'string|empty:false',
        password: 'string|min6',
        profession: 'string|optional',
        avatar: 'string|optional'
    };

    const validate = v.validate(req.body, schema);
    if (validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    

   

    const id = req.params.id;
    const user = await User.findByPk(id);
    if(!user){
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }

    const email = await req.body.email;
    if(email){
        const checkEmail = await User.findOne({
            where: {email}
        });

        if(checkEmail && email !== user.email) {
            return res.json(409).json({
                status: 'error',
                message: "email already exist"
            })
        }
    }
}