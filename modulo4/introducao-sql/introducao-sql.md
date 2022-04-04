# Exercícios da Aula de Introdução ao SQL

### Exercício 1
###### a)
Tipos na tabela Actor:
FLOAT - declara que a coluna salário é de números com ponto flutuante;
VARCHAR(255) - declara que as colunas de id e name são de strings com no máximo 255 caractéres;
VARCHAR(6) - declara que a coluna de gender é de strings com no máximo 6 caracteres;
DATE - sinônimo de DATETIME, declara que a coluna de birth_date é de datas;

Restrições das colunas:
PRIMARY KEY - indica que cada item da coluna id é um indentificador único;
NOT NULL - indica que as colunas name, salary, birth_date e gender não poderão receber valores nulos, ou seja, ficar sem algum valor preenchido;

###### b)
SHOW TABLES mostra as tabelas presentes em um database e SHOW DATABASES mostra as bases de dados presentes no banco de dados

###### c)
DESCRIBE Actor mostra as colunas presentes na tabela Actor e seus respectivos tipos de dados aceitos e restrições, esquematizados em uma tabela.

### Exercício 2
###### a)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");
~~~

###### b)
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' / Entrada duplicada da chave primária "002"

Como id é uma primary key, não é permitido mais de um item com o mesmo id.

###### c)
Error Code: 1136. Column count doesn't match value count at row 1 / Número de colunas não corresponde ao número de valores

É necessário que seja especificado valores para um item de acordo com as colunas especificadas. 

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
~~~

###### d)
Error Code: 1364. Field 'name' doesn't have a default value / Campo name não possui valor de default.

Como name, é um campo not null, não é pos´´ivel criar um novo item sem essa informação preenchida.

~~~SQL
INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES ("004", 400000, "1949-04-18", "male", "Flávio");
~~~

###### e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 /Valor de data incorreto na coluna birth_date

Campos do tipo DATE tem que ser repassados como uma string no formato "aaaa-mm-dd"

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("005", "Juliana Paes", 719333.33, "1979-03-26", "female");
~~~

###### f)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("006", "Will Smith", 5000000, "1968-09-25", "male"),
       ("007", "Daniel Craig", 100000, "1968-03-02", "male");
~~~

### Exercício 3
###### a)
~~~SQL
SELECT * from Actor WHERE gender = "female";
~~~

###### b)
~~~SQL
SELECT salary from Actor WHERE name = "Tony Ramos";
~~~

###### c)
~~~SQL
SELECT * from Actor WHERE gender = "invalid";
~~~
É apresentado uma planilha com todas as colunas da tabela Actor, mas com campos vazios porquê não há item que possua gender como "invalid".

###### d)
~~~SQL
SELECT id, name, salary from Actor WHERE salary <= 500000;
~~~

###### e)
Error Code: 1054. Unknown column 'nome' in 'field list' / É desconhecido uma coluna nome na lista dos campos.

Foi pedido para apresentar id e nome da tabela Actor, porém nome não é coluna que pertença à essa tabela, mas sim name.

~~~SQL
SELECT id, name from Actor WHERE id = "002";
~~~

### Exercício 4
###### a)
Selecione e mostre todos os campos e os itens da tablea Actor onde o campo name começa com o carácter A ou J e o salário seja maior que 3000000. 

###### b)
~~~SQL
SELECT * FROM Actor
WHERE name LIKE "A%" AND salary > 300000;
~~~

###### c)
~~~SQL
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%" AND salary > 300000;
~~~
###### d)
~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%" ) AND (salary >= 350000 AND salary <= 900000);
~~~

### Exercício 5
###### a)
~~~SQL
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    blurb VARCHAR (255) NOT NULL,
    premiere DATE NOT NULL,
    score FLOAT NOT NULL
);
~~~
###### b), c), d), e)
~~~SQL
INSERT INTO Movies (id, title, blurb, premiere, score)
VALUES
INSERT INTO Movies (id, title, blurb, premiere, score)
VALUES
("001", 
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7),
("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10),
("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8),
("004",
"O Auto da Compadecida",
"Melhor filme que esse país já fez",
"2000-09-15",
10);
~~~

### Exercício 6
###### a)
~~~SQL
SELECT id, title, blurb FROM Movies WHERE id = "001";
~~~

###### b)
~~~SQL
SELECT * FROM Movies WHERE title = "Se Eu Fosse Você";
~~~

###### c)
~~~SQL
SELECT id, title, blurb FROM Movies WHERE score >= 7;
~~~

### Exercício 7
###### a)
~~~SQL
SELECT * FROM Movies WHERE title LIKE "% vida %";
~~~

###### b)
~~~SQL
SELECT * FROM Movies WHERE title LIKE "%ano%" OR blurb LIKE "%ano%";
~~~

###### c)
~~~SQL
SELECT * FROM Movies WHERE premiere < current_date();
~~~

###### d)
~~~SQL
SELECT * FROM Movies WHERE premiere < current_date() AND (title LIKE "%ida%" OR blurb LIKE "%ida%") AND score > 7;
~~~