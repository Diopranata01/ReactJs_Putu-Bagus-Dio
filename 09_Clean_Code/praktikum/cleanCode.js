// Soal 1
/* class user{
    var id
    var username
    var password
}

class userservice{
    user[] user = [];

    user[] getallusers(){
        return users;
    }

    user getuserbyid(userid){
        return users.filter(userid)
    }
} */

// Jawaban 1

class user{
    constructor (id, name, password){
        this.id = id
        this.name = name
        this.password = password
    }
}

class userservice extends user{
    constructor (id , name, password, branchId){
        super (id, name, password)
        this.branchId = branchId
    }
    introduction(){
        return `My id is ${this.id}, ${this.name}, and my Branch Id is ${this.branchId}`
    }

}

let newUser = new user(01,"newAdmin", 1234)
const newUser_Service = new userservice (02,'newAdmin1', 1234, 33)

console.log(newUser.id + " " + newUser.name)
console.log(newUser_Service.id + " " + newUser_Service.name + " " + newUser_Service.branchId)
console.log(newUser_Service.introduction())


//Soal 2

/* class kendaraan {
    constructor(totalroda, kecepatanperjam){
        this.totalroda = 0
        this.kecepatanperjam = 0
    }
}

class mobil extends kendaraan{

    berjalan(){
        this.tambahKecepatan = 1
    }

    tambahkecepatan(berjalan)

    berjalan(){
        return tambahkecepatan(10)
    }

    tambahkecepatan(kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru
    }*/
/* 
console.log(berjalan) */

   /*  mobilcepat = new mobil()
    mobilcepat.berjalan()
    mobilcepat.berjalan()
    mobilcepat.berjalan()

    mobillamban = new mobil()
    mobillamban.berjalan() */
