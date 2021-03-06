type Users = {
    name: string,
    email: string,
    role: "user" | "admin"
};

const emailsAdmin = (listaUsers : Users[]) : string[] => {
    const emails : string[] = listaUsers
    .filter((user) => {
        return user.role === "admin";
    })
    .map((user) => {
        return user.email;
    });

    return emails;
};

console.log(emailsAdmin(
    [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    ] 
));