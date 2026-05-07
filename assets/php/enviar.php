<?php

$tipo = $_POST['tipo'];
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

// EMAIL
$para = "ccloservice@gmail.com";
$assunto = "NOVO ORCAMENTO - CLO SERVICE";

$corpo = "Tipo: $tipo\n".
         "Nome: $nome\n".
         "Telefone: $telefone\n".
         "Email: $email\n".
         "Mensagem: $mensagem";

$headers = "From: contato@seudominio.com";

mail($para, $assunto, $corpo, $headers);

// MENSAGEM WHATSAPP
$msg = "Olá, sou $nome ($tipo).%0AQuero um orçamento.";

// REDIRECIONA PARA WHATSAPP
echo "<script>
window.location.href='https://wa.me/+5531971807474?text=$msg';
</script>";

// REDIRECIONA PARA PÁGINA DE OBRIGADO (fallback)
header("Refresh: 3; url=obrigado.html");

exit;

?>