var encomendasLocais = [];

setInterval(function() {
   getEncomendas()
 }, 2000);

function getEncomendas() {
    const url = '/moloni/getEncomendas';
    fetch(url, {
        //headers: {"Content-Type": "application/x-www-form-urlencoded"},
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            console.log(response.status);
        }
        else {
            return response.json();
        }
    }).then(function(result) {
        console.log(result);
        addEncomenda(result.response);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

function addEncomenda(encomendas){
    console.log(encomendasLocais);
    for(var i = 0; i < encomendas.length; i++){
        if(!encomendasLocais.includes(encomendas[i].product_id)){
            encomendasLocais.push(encomendas[i].product_id);
            document.getElementById('idtabela').innerHTML += `<tr class="text-center">
									<td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>

									<td class="image-prod">
										<p>${encomendas[i].name}</p>
									</td>

									<td class="product-name">
										<p>${encomendas[i].summary}</p>
									</td>

									<td class="price">${encomendas[i].price}</td>

									<td class="quantity">
										<div class="input-group mb-3">
											<input type="text" name="quantity" class="quantity form-control input-number" value="1" min="1" max="100">
										</div>
									</td>

									<td class="total">${encomendas[i].price}</td>
								</tr>`
        }
    }
}
