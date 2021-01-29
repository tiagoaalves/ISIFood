$(document).ready(function(){
  setProdutos();
});

function postEncomenda() {
  const url = '/moloni/postEncomendas';
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
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

// function getJasminToken(callback) {
//   const url = '/jasmin/getToken';
//   fetch(url, {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'POST',
//   }).then(function(response) {
//     if (!response.ok) {
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.url);
//       console.log(response.status);
//     }
//     else {
//       console.log('fez');
//     }
//   }).then(function(result) {
//     console.log(result);
//   }).catch(function(err) {
//     alert("Submission error");
//     console.error(err);
//   });
//   callback();
// }

function getJasminProducts() {
  const url = '/jasmin/getProducts';
  fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      mode: 'cors'
    }).then(response => response.json())
    .then(function(data) {
      var element = document.getElementById('produtos');
      var string;
      for(let i = 0; i < data.response.length; i++){
        console.log(data.response);
    //     string += `
				// 	<div class="col-md-6 col-lg-3 ftco-animate">
				// 	<div class="product">
				// 		<a href="#" class="img-prod"><img class="img-fluid img" src="../images/produtos/${data.response[i].nome}.jpg" alt="Colorlib Template">
    // 					</a>
				// 		<div class="text py-3 pb-4 px-3 text-center">
				// 			<h3><a href="#">'${data.response[i].nome}'</a></h3>
				// 			<div class="d-flex">
				// 				<div class="pricing">
				// 					<p class="price"><span class="price-sale">${data.response[i].preco}€</span></p>
				// 				</div>
				// 			</div>
				// 			<div class="bottom-area d-flex px-3">
				// 				<div class="m-auto d-flex">
				// 					<button class="btn" onclick="addArtigo('${data.response[i].id}')">
	   // 								<span><i class="ion-ios-cart"></i></span>
	   // 							</button>
				// 				</div>
				// 			</div>
				// 		</div>
				// 	</div>
				// </div>
				// `;
				
				string += `	<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="product">
						<a href="#" class="img-prod"><img class="img-fluid" src="images/francesinha.jpg" alt="Colorlib Template">
    						
    						<div class="overlay"></div>
    					</a>
						<div class="text py-3 pb-4 px-3 text-center">
							<h3><a href="#">Francesinha Especial</a></h3>
							<div class="d-flex">
								<div class="pricing">
									<p class="price"><span class="price-sale">9.00€</span></p>
								</div>
							</div>
							<div class="bottom-area d-flex px-3">
								<div class="m-auto d-flex">
									<a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center" onclick="addArtigo(5)">
	    								<span><i class="ion-ios-menu"></i></span>
	    							</a>
									<a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
	    								<span><i class="ion-ios-cart"></i></span>
	    							</a>
									<a href="#" class="heart d-flex justify-content-center align-items-center ">
	    								<span><i class="ion-ios-heart"></i></span>
	    							</a>
								</div>
							</div>
						</div>
					</div>
				</div>`;
      }
     element.innerHTML = string;
      
    }).catch(function(err) {
      console.error(err);
    });
}

function setProdutos(){
  var string = "";
  const url = '/jasmin/getProducts';
  fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      mode: 'cors'
    }).then(response => response.json())
    .then(function(data) {
      console.log(data.response);
      for(var i = 0; i< data.response.length; i++){
        const div = document.createElement('div');
        string += `	<div class="col-md-6 col-lg-3 ftco-animate">
        <div class="product">
          <a href="#" class="img-prod"><img class="img-fluid" src="images/francesinha.jpg" alt="Colorlib Template">
              
              <div class="overlay"></div>
            </a>
          <div class="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">Francesinha Especial</a></h3>
            <div class="d-flex">
              <div class="pricing">
                <p class="price"><span class="price-sale">9.00€</span></p>
              </div>
            </div>
            <div class="bottom-area d-flex px-3">
              <div class="m-auto d-flex">
                <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center" onclick="addArtigo(5)">
                    <span><i class="ion-ios-menu"></i></span>
                  </a>
                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i class="ion-ios-cart"></i></span>
                  </a>
                <a href="#" class="heart d-flex justify-content-center align-items-center ">
                    <span><i class="ion-ios-heart"></i></span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    			//document.getElementById('produtosDiv').append(div);
    			
    			//string += "<h1>erjferjf</h1>";
      }
      //document.getElementById('produtosDiv').innerHTML = html;
      document.getElementById('produtosDiv').innerHTML = string;
    });
}


function stockDelete(id, qt) {
  console.log('stockchange');
  var id = id;
  var qt = qt;
  const url = `/jasmin/stockChange/${id}/${qt}`;
  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.url);
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function addArtigo(id) {
  console.log(id);
}
