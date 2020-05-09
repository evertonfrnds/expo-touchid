interface Response{
    token: string;
    user: {
        firstName: string;
        lastName: string;
        email: string;
    }
}

export function signIn(): Promise<Response>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({
                token: 'evertqweqe12nueuvinurfufqef',
                user:{
                    firstName: 'Everton',
                    lastName: 'Bezerra',
                    email: 'evertonfrnds@gmail.com'
                }
            })
        },200)
    })

}