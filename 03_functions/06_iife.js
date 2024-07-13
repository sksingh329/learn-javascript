// Immedaitely Invoked Function Expressions 

// Named IIFE
(
    function chai(){
        console.log(`DB CONNECTED!`);
    }
)();

(
    (username) => {
        console.log(`DB CONNECTED AGAIN BY ${username}!`);
    }
)("Subodh")