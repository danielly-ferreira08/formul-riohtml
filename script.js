function pegarDados(){


	document.querySelector(".esconder").style.display = "block";

	let camText = document.getElementById("texto").value;
    document.getElementById("campotexto").innerHTML = camText;
    let camTel = document.getElementById("fone").value;
    document.getElementById("campotelefone").innerHTML = camTel;
    let camEmail = document.getElementById("e-mail").value;
    document.getElementById("campoemail").innerHTML = camEmail;
    let camPassword = document.getElementById("senha").value;
    document.getElementById("camposenha").innerHTML = camPassword;

            
    if(document.getElementById("info2").checked){
		alert("Você é informatico");
	}else if(document.getElementById("adm2").checked){
	 	alert("Você é adm");
	}else if(document.getElementById("enf2").checked){
	 	alert("você é de enfermagem");
	}




let ocult = document.getElementById("oculto").value;
document.getElementById("campooculto").innerHTML = ocult;

let number = document.getElementById("num").value;
document.getElementById("camponum").innerHTML = ("valor numero:" + number);
 
 let date = document.getElementById("data").value;
 document.getElementById("campodata").innerHTML =  ("data:" + date);

 let time = document.getElementById("hora").value;
 document.getElementById("campohora").innerHTML = ("hora:" + time);

 let range = document.getElementById("range").value;
 document.getElementById("camporange").innerHTML = ("range:" + range);

 let faixa = document.getElementById("prifaixa").value;
 document.getElementById("campofaixa").innerHTML = ("cor favorita:" +faixa);
}


