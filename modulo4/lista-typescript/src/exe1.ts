const birthInfo  = (name : string, bday: string) : string => {
    const arrBday : string[] = bday.split("/");
    return `Olá me chamo ${name}, nasci no dia ${arrBday[0]} do mês de ${arrBday[1]} do ano de ${arrBday[2]}`;
}

console.log(birthInfo("Ádria", "28/12/1995"));