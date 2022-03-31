const algarismoRomano = (numero : number) : string => {
    let digitos : number = numero.toString().length;
    let numeroRestante : number = numero;
    let algarismoResultante : string = "";

    while (numeroRestante > 0) {
        if (numeroRestante >= 1000) {
            numeroRestante -= 1000;
            algarismoResultante = algarismoResultante + "M";
        } else if (numeroRestante >= 900) {
            numeroRestante -= 900;
            algarismoResultante = algarismoResultante + "CM"; 
        } else if (numeroRestante >= 500) {
            numeroRestante -= 500;
            algarismoResultante = algarismoResultante + "D";
        } else if (numeroRestante >= 400) {
            numeroRestante -= 400;
            algarismoResultante = algarismoResultante + "CD";
        } else if (numeroRestante >= 100) {
            numeroRestante -= 100;
            algarismoResultante = algarismoResultante + "C";
        } else if (numeroRestante >= 90) {
            numeroRestante -= 90;
            algarismoResultante = algarismoResultante + "XC";
        } else if (numeroRestante >= 50) {
            numeroRestante -= 50;
            algarismoResultante = algarismoResultante + "L";
        } else if (numeroRestante >= 40) {
            numeroRestante -= 40;
            algarismoResultante = algarismoResultante + "XL";
        } else if (numeroRestante >= 10) {
            numeroRestante -= 10;
            algarismoResultante = algarismoResultante + "X";
        } else if (numeroRestante >= 9) {
            numeroRestante -= 9;
            algarismoResultante = algarismoResultante + "IX";
        } else if (numeroRestante >= 5) {
            numeroRestante -= 5;
            algarismoResultante = algarismoResultante + "V";
        } else if (numeroRestante >= 4) {
            numeroRestante -= 4;
            algarismoResultante = algarismoResultante + "IV";
        } else if (numeroRestante >= 1) {
            numeroRestante -= 1;
            algarismoResultante += "I";
        }
    }

    return algarismoResultante;
}

console.log(algarismoRomano(2054));