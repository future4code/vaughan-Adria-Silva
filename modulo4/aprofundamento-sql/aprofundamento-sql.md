# Exercício da Aula de Aprofundamento em SQL

### Exercício 1
##### a)
Deleta a coluna salary da tabela Actor.
##### b)
Modifica o nome da coluna gender para sex.
##### c)
Modifica o tipo dos valores recebidos na coluna gender varchar(255), mantendo o nome da coluna.
##### d)
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

### Exercício 2
##### a)
~~~SQL
UPDATE Actor
SET birth_date = "1930-10-19"
WHERE id = "003";
~~~

##### b)
~~~SQL
UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = LOWER(name)
WHERE name = UPPER("Juliana Paes");
~~~
##### c)
~~~SQL
UPDATE Actor
SET name = UPPER(name), salary = 1500000, birth_date = "1978-03-26", gender = "male"
WHERE id = "005";
~~~
##### d)
Resultado: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
A ação não configura como erro pois o ato de atualizar o item é realizado, porém, como nenhum item corresponde ao id informado, nenhum item é afetado. 
~~~SQL
UPDATE Actor
SET name = UPPER(name), salary = 1500000, birth_date = "1978-03-26", gender = "male"
WHERE id = 100;
~~~

### Exercício 3
##### a)
~~~SQL
DELETE FROM Actor WHERE name = 'Fernanda Montenegro';
~~~

##### b)
~~~SQL
DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;
~~~

### Exercício 4
##### a)
~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

##### b)
~~~SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female";
~~~

##### c)
~~~SQL
SELECT COUNT(*) FROM Actor WHERE gender = "female";
~~~
##### d)
~~~SQL
SELECT SUM(salary) FROM Actor;
~~~

### Exercício 5
##### a)
A query apresentada faz a contagem de quantos atores existem ao considerar o gênero, montando uma tabela com a contagem de atores para o gênero male e para o female.

##### b)
~~~SQL
SELECT id
FROM Actor
ORDER BY name DESC;
~~~

##### c)
~~~SQL
SELECT *
FROM Actor
ORDER BY salary DESC;
~~~
##### d)
~~~SQL
SELECT *
FROM Actor
ORDER BY salary DESC LIMIT 3;
~~~
##### e)
~~~SQL
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
~~~

### Exercício 6
##### a)
~~~SQL
ALTER TABLE Movies ADD playing_limit_date DATE;
~~~

##### b)
~~~SQL
ALTER TABLE Movies CHANGE score rating FLOAT;
~~~

##### c)
~~~SQL
UPDATE Movies
SET playing_limit_date = '2001-02-15'
WHERE id = "004";

UPDATE Movies
SET playing_limit_date = '2023-02-15'
WHERE id = "003";
~~~

##### d)
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Como o item de id 003 havia sido deletado, a atualização da sinopse desse item resultou em 0 linhas afetadas pois não há a correspodência com nenhum id.
~~~SQL
DELETE FROM Movies WHERE id = "003";

UPDATE Movies
SET blurb = 'Nunca assisti esse filme'
WHERE id = "003";
~~~


### Exercício 7
##### a)
~~~SQL
SELECT COUNT(*)
FROM Movies
WHERE rating > 7.5;
~~~

##### b)
~~~SQL
SELECT AVG(rating)
FROM Movies;
~~~

##### c)
~~~SQL
SELECT COUNT(*)
FROM Movies
WHERE playing_limit_date > CURRENT_DATE();
~~~

##### d)
~~~SQL
SELECT COUNT(*)
FROM Movies
WHERE premiere > CURRENT_DATE();
~~~

##### e)
~~~SQL
SELECT MAX(rating) FROM Movies;
~~~

##### f)
~~~SQL
SELECT MIN(rating) FROM Movies;
~~~

### Exercício 8
##### a)
~~~SQL
SELECT * FROM Movies ORDER BY title ASC;
~~~

##### b)
~~~SQL
SELECT * FROM Movies ORDER BY title DESC LIMIT 5;
~~~

##### c)
~~~SQL
SELECT * FROM Movies
WHERE playing_limit_date > CURRENT_DATE()
ORDER BY premiere ASC LIMIT 3;
~~~

##### d)
~~~SQL
SELECT * FROM Movies
ORDER BY rating DESC LIMIT 3;
~~~
