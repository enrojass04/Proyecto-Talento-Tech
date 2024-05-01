const API_URL = `${import.meta.env.VITE_API_URL}/user`;

export const signupUser = async (data) => {
    return await fetch(API_URL + "/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({  "firstname":data.firstname, "email":data.email, "mobile":data.mobile, "password":data.password }), 
    })
}
