const user = {
    username : "Subodh",
    price : 1000,

    weclomeMessage : function(){
        console.log(`${this.username}, Welcome to our website!`)
        console.log(this)
    }
}

// user.weclomeMessage()
// user.username = "Sam"
// user.weclomeMessage()

console.log(this)