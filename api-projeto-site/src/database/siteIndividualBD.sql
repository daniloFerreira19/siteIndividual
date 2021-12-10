USE siteIndividual;
SELECT 
    *
FROM
    usuario;

CREATE TABLE personagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

CREATE TABLE curtidas (
    fkUsuario INT,
    FOREIGN KEY (fkUsuario)
        REFERENCES usuario (id),
    fkPersonagem INT,
    FOREIGN KEY (fkPersonagem)
        REFERENCES personagens (id),
    curtidas INT
);

truncate table curtidas;

INSERT INTO personagens (nome) VALUES 
	("Jon Snow"),
	("Daenerys Targaryen"),
	("Tyrion Lannister"),
	("Arya Stark"),
	("Sam Tarly"),
	("Cersei Lannister");

SELECT 
    *
FROM
    personagens;
SELECT 
    *
FROM
    curtidas;
SELECT 
    nome, COUNT(fkPersonagem) AS Quantidade
FROM
    curtidas AS curt
        JOIN
    personagens AS perso ON curt.fkPersonagem = perso.id
GROUP BY perso.id;	
    
CREATE TABLE pontuacoes (
	fkUsuario INT,
    FOREIGN KEY (fkUsuario) 
		REFERENCES usuario (id),
	pontuacao INT 
);

SELECT 
	*
FROM
	pontuacoes;
    
insert into pontuacoes values 
	(2, 10),
    (3, 50);
    
SELECT
            nome,
            pontuacao 
        FROM pontuacoes 
            JOIN usuario 
            ON pontuacoes.fkUsuario = usuario.id
            ORDER BY pontuacao DESC;
    
    
    
    
    
    
    
    
    
    
    