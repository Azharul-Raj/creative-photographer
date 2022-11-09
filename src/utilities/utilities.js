const getToken = (profile) => {
    const user = {
        email: profile.email
    }
    fetch('http://localhost:3001/jwt', {
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