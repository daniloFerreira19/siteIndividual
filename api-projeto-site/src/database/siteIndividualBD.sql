USE siteIndividual;
SELECT 
    *
FROM
    usuario;

CREATE TABLE personagens (
	id int primary key auto_increment, 
    nome varchar(50)
);

CREATE TABLE curtidas (
	fkUsuario int,
    foreign key(fkUsuario) references usuario(id),
    fkPersonagem int,
    foreign key(fkPersonagem) references personagens(id),
    curtidas int
);

truncate table curtidas;

INSERT INTO personagens (nome) VALUES 
	("Jon Snow"),
	("Daenerys Targaryen"),
	("Tyrion Lannister"),
	("Arya Stark"),
	("Sam Tarly"),
	("Cersei Lannister");

select * from personagens;
select * from curtidas;
SELECT
	nome,
	count(fkPersonagem) as Quantidade
from curtidas as curt
	join personagens as perso
	on curt.fkPersonagem = perso.id group by perso.id;	
    
    
    
    
    
    
    
    
    
    
    
    