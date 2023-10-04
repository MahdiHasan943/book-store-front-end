export const AuthToken = (user) => {


        
    const currentUser = {
        email: user?.email

    }
    console.log(currentUser);

    // get jwt

    fetch(' https://server-side-weld.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
            
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        // local storage is the easiest but not the best place to store jwt token
        localStorage.setItem('bookstore-token', data.token);
        console.log(data);

      
    });


    

}