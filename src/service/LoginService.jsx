const API_URL = `${import.meta.env.VITE_API_URL}/user`;



export const loginUser = async (data) => {
    try {
        const response = await fetch(API_URL + "/login", { 
            method: "POST", 
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ "email":data.email, "password":data.password }), 
        });
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        return response.json();
        
    } catch (error) {
        throw new Error('Failed to login');        
    }

}