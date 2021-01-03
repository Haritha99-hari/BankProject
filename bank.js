class Bank {
    static getData = () => {
        var accountDetails = {
            userone: { acno: 1000, name: "ajay", balance: 1000, username: "userone", password: "testuser" },
            usertwo: { acno: 1001, name: "sanjay", balance: 12000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, name: "vijay", balance: 13000, username: "userthree", password: "testuser2" }
        }
        return accountDetails

    }
    static authenticateUser = (uname, pwd) => {
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                return 1; // valid user password   
            }
            else {
                return 0; //invalid password
            }
        }
        else {
            return -1; // no user exist
        }

    }


    static login = () => {   //made static to call method in class
        let uname = document.querySelector("#username").value //userone
        let pwd = document.querySelector("#password").value //test
        let us = Bank.authenticateUser(uname,pwd)
        if(us == 1){
             alert("login sucessful")
                window.location.href ="userHome.html"
        }
        else if(us==0){
            alert("incorrect password")
        }
        else if(us==-1){
            alert("no user exist with provided username")
        }
        // let dataset = Bank.getData()  //used dataset to get informtn in getData() method


        // /*
        // {
        //       userone: { acno: 1000, name: "ajay", bal: 10000, username: "userone", password: "testuser" },
        //       usertwo: { acno: 1001, name: "sanjay", bal: 12000, username: "usertwo", password: "testuser1" },
        //       userthree: { acno: 1002, name: "vijay", bal: 13000, username: "userthree", password: "testuser2" }
        // }*/
        // //   check uname present inside dataset
        // // if (uname in dataset) {
        // //     alert("user exist")
        // // }
        // // else {
        // //     alert("no user exist with provided username")
        // // }


        // if (uname in dataset) {
        //     if (dataset[uname].password == pwd) {
        //         alert("login sucessful")
        //         window.location.href = "userHome.html"       //for going to the new page after login  (used only in javascript)
        //     }
        //     else {
        //         alert("incorrect password")
        //     }
        // }
        // else {
        //     alert("no user exist with provided username")
        // }

    }
    static deposit = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value) // to get as integer value
        let us = Bank.authenticateUser(uname,pwd)
        let dataset = Bank.getData()
        if(us == 1){
            dataset[uname].balance += amt
             alert("your account credited with amount" + amt + "aval bal=" + dataset[uname].balance)
        }
        else if(us==0){
            alert("incorrect password")
        }
        else if(us==-1){
            alert("no user exist with provided username")
        }

        // let dataset = Bank.getData()
        // if (uname in dataset) {
        //     if (dataset[uname].password == pwd) {
        //         dataset[uname].balance += amt
        //         alert("your account credited with amount" + amt + "aval bal=" + dataset[uname].balance)
        //     }
        //     else {
        //         alert("incorrect password")
        //     }
        // }
        // else {
        //     alert("no user exist with provided username")
        // }
    }
    static withdraw = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let us = Bank.authenticateUser(uname,pwd)
        let dataset = Bank.getData()
        if (us == 1) {
            if (dataset[uname].balance >= amt) {
                dataset[uname].balance -= amt
                alert("your account debited with amount " + amt + " aval bal= " + dataset[uname].balance)
            }
            else {
                alert("insufficient balance")
            }
        }
        else if (us == 0) {
            alert("incorrect password")

        }
        else if (us == -1) {
            alert("no user exist with provided username")
        }
    }
}

     // let dataset = Bank.getData()
        // if (uname in dataset) {
        //     if (dataset[uname].password == pwd) {
        //         if (dataset[uname].balance >= amt) {
        //             dataset[uname].balance -= amt
        //             alert("your account debited with amount" + amt + "aval bal=" + dataset[uname].balance)
        //         }
        //         else {
        //             alert("insufficient balance")
        //         }
        //     }
        //     else {
        //         alert("incorrect password")
        //     }
        // }
        // else {
        //     alert("no user exist with provided username")
        // }

