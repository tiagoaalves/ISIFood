var returnedContacts = [];

function adicionarContacto(contacts){
    console.log(returnedContacts);
    for(var i = 0; i < contacts.length; i++){
        if(!returnedContacts.includes(contacts[i].properties)){
            returnedContacts.push(contacts[i].properties);
            document.getElementById('listaClientes').innerHTML += `<tr class="text-center">
									<td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>

									<td class="image-prod">
										<p>${contacts[i].fnome}</p>
									</td>

									<td class="product-name">
										<p>${contacts[i].lnome}</p>
									</td>

									<td class="price">${contacts[i].morada}</td>

									<td class="quantity">
										<div class="input-group mb-3">
											<input type="text" name="quantity" class="quantity form-control input-number" value="1" min="1" max="100">
										</div>
									</td>

									<td class="total">${contacts[i].cpostal}</td>
									
									<td class="total">${contacts[i].telemovel}</td>
									
									<td class="total">${contacts[i].email}</td>
									
									<td class="total">${contacts[i].mensagem}</td>
								</tr>`;
        }
                }
            }
        
    function getContacts() {
    const url = '/hubspot/getContacts';
    fetch(url, {
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
        adicionarContacto (result.response);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
        
    });
}

setInterval(function() {
   getContacts();
 }, 2000);


