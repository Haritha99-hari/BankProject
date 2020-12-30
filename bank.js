class Bank {
    static getData = () => {
        var accountDetails = {
            userone: { acno: 1000, name: "ajay", balance: 1000, username: "userone", password: "testuser" },
            usertwo: { acno: 1001, name: "sanjay", balance: 12000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, name: "vijay", balance: 13000, username: "userthree", password: "testuser2" }
        }
        return accountDetails

    }
    static login = () => {
        let uname = document.querySelector("#username").value //userone
        let pwd = document.querySelector("#password").value //test
        let dataset = Bank.getData()
        /*
        {
              userone: { acno: 1000, name: "ajay", bal: 10000, username: "userone", password: "testuser" },
              usertwo: { acno: 1001, name: "sanjay", bal: 12000, username: "usertwo", password: "testuser1" },
              userthree: { acno: 1002, name: "vijay", bal: 13000, username: "userthree", password: "testuser2" }
        }*/
        //   check uname present inside dataset
        // if (uname in dataset) {
        //     alert("user exist")
        // }
        // else {
        //     alert("no user exist with provided username")
        // }
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                alert("login sucessful")
                window.location.href = "userHome.html"       //for going to the new page after login  (used only in javascript)
            }
            else {
                alert("incorrect password")
            }
        }
        else {
            alert("no user exist with provided username")
        }

    }
    static deposit = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                dataset[uname].balance += amt
                alert("your account credited with amount" + amt + "aval bal=" + dataset[uname].balance)
            }
            else {
                alert("incorrect password")
            }
        }
        else {
            alert("no user exist with provided username")
        }
    }
    static withdraw = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                if (dataset[uname].balance >= amt) {
                    dataset[uname].balance -= amt
                    alert("your account debited with amount" + amt + "aval bal=" + dataset[uname].balance)
                }
                else{
                    alert("insufficient balance")
                }
            }
            else {
                alert("incorrect password")
            }
        }
        else {
            alert("no user exist with provided username")
        }
    }
}