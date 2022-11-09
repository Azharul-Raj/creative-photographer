const getToken = (profile) => {
    const user = {
        email: profile.email
    }
    fetch('https://assignment-11-server-ten.vercel.app/jwt', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(user)        
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token',data.token)
            console.log(data)
        })
}
export default getToken;