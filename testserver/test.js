const bcrypt=require('bcrypt')


function dd(data)
{
    return bcrypt.hashSync(data,10)
}


console.log(dd('123456'))