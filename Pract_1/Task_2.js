const users=[
    {id:1,name:"Alex",age:30},
    {id:2,name:"Artyr",age:65},
    {id:3,name:"Ivan",age:61},
    {id:4,name:"Vika",age:21},
    {id:5,name:"Any",age:18}
];

//Функция эмуляции задержки
//seconds=10;
console.log('sending')
function sleep(seconds){
    return new Promise(resolve=>setTimeout(resolve,seconds*10000));
}

//Функция получения пользователя по id


