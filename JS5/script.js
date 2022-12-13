(function(){

    
    var form = document.createElement("form");
    
    var raio = document.createElement("div");
    raio.innerHTML = "Informe o raio ";
 
    var raio_i = document.createElement("input");
    raio_i.setAttribute("id","raio");
    raio_i.type = "text";
    raio_i.style.marginLeft = "15px";
    raio_i.style.marginBottom = "5px";
    raio.appendChild(raio_i);
 
    var butao = document.createElement("input");
    butao.type = "button";
    butao.onclick = clicou;
    butao.style.marginLeft = "10px"
    butao.value = "OK";
    raio.appendChild(butao);
 
    var area = document.createElement("div");
    area.innerHTML = "Área do círculo ";
 
    var area_i = document.createElement("input");
    area_i.setAttribute("id", "area");
    area_i.type = "text";
    area_i.style.marginLeft = "7px";
    area_i.style.marginBottom = "5px";
    area.appendChild(area_i);
 
    var circu = document.createElement("div");
    circu.innerHTML = "Circunferência ";
 
    var circu_i = document.createElement("input");
    circu_i.setAttribute("id", "circu");
    circu_i.type = "text";
    circu_i.style.marginLeft = "10px"
    circu_i.style.marginBottom = "5px"
    circu.appendChild(circu_i);
 
 
 
 
    form.appendChild(raio);
    form.appendChild(area);
    form.appendChild(circu);
 
    document.body.appendChild(form);
 
    function clicou(){
     var raio = document.getElementById("raio");
     var area = document.getElementById("area");
     var circu = document.getElementById("circu");
 
     area.value = `${(Math.PI*Math.pow(parseFloat(raio.value),2)).toFixed(2)}`
     circu.value = `${(Math.PI*2*parseFloat(raio.value)).toFixed(2)}`
 }
 
 
 })();