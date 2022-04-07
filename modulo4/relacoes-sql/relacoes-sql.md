# Aula de Relação SQL

### Exercício 1
###### a)
Chave estrangeira é um tipo de restrição/característica que podem ser atribuídos a colunas no MySQL para permitir o relacionamento entre tabelas diferentes. Para isso a chave estrangeira de uma tabela faz uma referência a uma chave primária de outra tabela.

###### b)
~~~SQL
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
	comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("a",
"Esse filme é a cópia daquele outro filme com Lindsay Lohan: Sexta Feira Muito Louca",
4.9,
"001"),
("b",
"Só assisti pq tem Fernanda Montenegro",
8.4,
"002"),
("c",
"Melhor filme que esse país já produziu",
10,
"004");
~~~

###### c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21712693-adria-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Ou seja, como movie_id possui a restrição de FOREIGN KEY, é necessário que o valor passado para essa coluna exista entre os id's na tabela de Movies. Caso contrário, não será possível inserir uma nova linha à tabela de Rating.

~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("d",
"Não gostei",
3,
"010");
~~~

###### d)
~~~SQL
SELECT * FROM Movies;
~~~

###### e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712693-adria-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Ou seja, como esse id da tabela Movies está relacionado com uma FOREIGN KEY da tabela Rating, a linha não pode ser deletada. Seria, primeiro, necessário deletar todas as linhas da tabela Rating onde movie_id fossem igual ao id do filme que deja deletar na tabela Movies.

~~~SQL
DELETE FROM Movies WHERE id = "002";
~~~


### Exercício 2
###### a)
Essa tabela é composta por duas FOREIGN KEYS que relacionam-se com as id's de filmes e de atores, podendo assim estruturar uma tabela que relaciona um ator ao elenco de um filme.

###### b)
~~~SQL
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES
("001", "001"),
("001", "002"),
("002", "007"),
("002", "001"),
("004", "002"),
("004", "007");
~~~

###### c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21712693-adria-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Ou seja, foi tentado inserir na tabela MovieCast um valor para movie_id que não está presente entre os id's na tabela Movies. E como movie_id é uma referencia dos id's em Movie, não foi possível inserir a nova linha na tabela MovieCast.

~~~SQL
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("003", "002");
~~~

###### d)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712693-adria-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Ou seja, como esse id da tabela Actor está relacionado com uma FOREIGN KEY da tabela MovieCast, a linha não pode ser deletada pois a informação está sendo usada em outra tabela.

~~~SQL
DELETE FROM Actor WHERE id = "007";
~~~


### Exercício 3
###### a)
ON é uma espécie de condicional para indicar quais itens devem ser apresentados. Nesse caso, são apresentados apenas os filmes que foram avaliados (Movie.id = Rating.movie_id). 

###### b)
~~~SQL
SELECT Movies.id, title, Rating.rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
~~~


### Exercício 4
###### a)
~~~SQL
~~~

###### b)
~~~SQL
~~~

###### c)
~~~SQL
~~~


### Exercício 5
###### a)
~~~SQL
~~~

###### b)
~~~SQL
~~~

###### c)
~~~SQL
~~~

###### d)
~~~SQL
~~~


### Exercício 6
###### a)
~~~SQL
~~~

###### b)
~~~SQL
~~~

###### c)
~~~SQL
~~~

###### d)
~~~SQL
~~~
