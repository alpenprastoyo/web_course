const jwt = require('jsonwebtoken');

const JWT_SECRET = 'nwamicro!123';

// create basic token dengan proses syncronous
const token = jwt.sign({ 
    data: { kelas: 'bwamicro'}}, 
    JWT_SECRET,
    { expiresIn: '5m'}
    );
console.log(token)

// asyncronous create token 
jwt.sign({ data: {kelas: 'bwamicro'}}, JWT_SECRET,
{ expiresIn: '5m'}, (err, token ) =>{
    console.log(token);
});

const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjA5MzQ1NTIyLCJleHAiOjE2MDkzNDU4MjJ9.st5EjUHjnmYjD-xCglrzzU66elaIEOwkGGlP1PjimBg"

//verifikasi cara pertama
// jwt.verify(token1, 'asd', (err,decoded)=>{
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log(decoded);
// });

//verifikasi cara kedua
try{
    const decoded = jwt.verify(token1, JWT_SECRET);
    console.log(decoded);
} catch(error){
    console.log(error.message)
}

// console.log('aaaaaaaa');