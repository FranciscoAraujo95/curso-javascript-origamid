<!DOCTYPE html>
<html lang="pt-br">
<html>
<title>IMC</title>
	<style>
		body {background: #cccccc;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
					margin: 0;
					font-family:arial;}
		
		t {color: orange; font-size: 20px; font-weight: bold;}
	</style>
		<body>
			<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
			<t>CALCULAR ÍNDICE DE MASSA CORPORAL (IMC)</t><br><br>
				Nome: <input type="text" name="nome"><br><br>
				Data de Nascimento: <input type="date" name="nascimento"><br><br>
				Sexo: <select name="sexo">
						<option value="Masculino">Masculino</option>
						<option value="Feminino">Feminino</option>
						</select><br><br>
				Peso (kg): <input type="number" name="peso"><br><br>
				Altura (cm): <input type="number" name="altura"><br><br>
						<input type="submit" value="Calcular"><br><br>
   
						<?php
							if ($_SERVER["REQUEST_METHOD"] == "POST") {
							$nome= $_POST['nome'];
							$dt= $_POST['nascimento'];
							$sexo= $_POST['sexo'];
							$peso = $_POST['peso'];
							$altura = $_POST['altura'];
							$resultado=$peso/($altura/100*$altura/100);
								echo $nome. "<div></div>";
								echo $dt. "<div></div>";
								echo $sexo. "<div></div>";
								echo $peso. "<div></div>";
								echo $altura. "<div></div>";
								echo "<div>IMC:</div>". $resultado;
								echo "<div>Situação:</div>";
							if ($resultado < 16) {
								echo "Magreza grave";
									} elseif ($resultado>16 && $resultado<16.9) {
								echo "Magreza moderada";
									} elseif ($resultado>17 && $resultado<8.5) {
								echo "Magreza leve";
									} elseif ($resultado>18.6 && $resultado<24.9) {
								echo "Peso ideal";
									} elseif ($resultado>25 && $resultado<29.9) {
								echo "Sobrepeso";
									} elseif ($resultado>30 && $resultado<34.9) {
								echo "Obesidade grau I";
									} elseif ($resultado>35 && $resultado<39.9) {
								echo "Obesidade grau II";
									} else {
								echo "Obesidade grau III";
									}
								}
						?>
		</form>
	</body>
</html>



