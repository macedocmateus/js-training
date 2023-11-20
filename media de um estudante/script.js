let nomeAluno = prompt ("Qual é seu nome");
let nota1 = Number (prompt("digite a primeira nota do aluno"));
let nota2 = Number (prompt("digite a segunda nota do aluno"));
let nota3 = Number (prompt("digite a terceira nota do aluno"));
let notaFinal = (nota1 + nota2 + nota3) /3;

notaFinal = notaFinal.toFixed(1);

if (notaFinal >= 6) {
alert(`Parabéns! ${nomeAluno} você ficou com ${notaFinal} de media, foi aprovado no bimestre`);
} else {
alert(`Você ficou de recuperação ${nomeAluno} ficou com ${notaFinal} de media, mas não desista na proxima você será aprovado `);
}