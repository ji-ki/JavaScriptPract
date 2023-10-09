const users=[
    {name:"Alex",age:30,address:{city:"Moscow",street:"Vernadscogo",house:24}},
    {name:"Artyr",age:65,address:{city:"St.Peterburg",street:"Lenina",house:14}},
    {name:"Ivan",age:61,address:{city:"Saratov",street:"Zelonaya",house:43}},
    {name:"Vika",age:21,address:{city:"Boston",street:"Jecksona",house:2}},
    {name:"Any",age:18,address:{city:"Osaka",street:"Sashimi",house:65}}
];//Создаем статичный массив пользователей

//Функция выводящая общий возраст пользователей
function getTotalAge(users){//Объявляем функцию и указываем что передаем в нее значения из массива
    let totalAge = 0;
    for(let i = 0; i < users.length; i++){//Создаем счетчик с первого по последний элемент массива
        totalAge += users[i].age;//На каждой итерации добавляем к общему возрасту возраст следующего пользователя
    }
    return totalAge;//Возвращаем полученное значение 
}
console.log("Общий возраст = " + getTotalAge(users));

//Функция выводящая общий список улиц
function getUsersStreets(users){
    let streets = [];//Создаем неопределенный массив для записи значений
    for(let i = 0; i < users.length; i++){
        streets.push(users[i].address.street);//командой .push добавляем в конец массива новое значение
    }
    return streets;
}
console.log("Список улиц = " + getUsersStreets(users));

//Функция выводящая список пользователей которым больше 60 лет
function getOldPeople(users){
    let oldPeople = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].age>60){//Делаем проверку условия
            oldPeople.push(users[i].name);//Если значение прозодит проверку в конец массива добавляется проверенное значение
        }
    }
    return oldPeople;
}
console.log("Пользователи старше 60 = " + getOldPeople(users));