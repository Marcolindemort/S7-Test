const params = new URLSearchParams(window.location.search);
const id = params.get("id");

window.onload = () => {
	fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDgwNzBkOGEyMDAwMThhNDhhNjIiLCJpYXQiOjE3MDE5NTk2ODcsImV4cCI6MTcwMzE2OTI4N30.YJ4PVUQxMyns2Gpy7B2WaWE0y5rqH040BgnrEUlJj0I",
		},
	})
		.then((response) => response.json())
		.then((product) => {
			const h2Title = document.querySelector("h2");
			h2Title.innerText = "DETTAGLI " + product.name;
			const row = document.querySelector(".row");
			const col4 = document.createElement("div");
			col4.className = "col-4";
			const imgDiv = document.createElement("div");
			imgDiv.style.objectFit = "cover";
			const img = document.createElement("img");
			img.src = product.imageUrl;
			img.className = "img-fluid rounded-start";
			const col8 = document.createElement("div");
			col8.className = "col-8 border border-2 border-ligth";
			const cardBody = document.createElement("div");
			cardBody.className = "card-body text-center align-content-center my-5";
			const title = document.createElement("h3");
			title.className = "card-title fw-bold mt-3";
			title.innerText = product.name;
			const brand = document.createElement("h5");
			brand.className = "card-text fst-italic";
			brand.innerText = product.brand;
			const description = document.createElement("p");
			description.className = "card-text px-5 mt-5";
			description.innerText = product.description;
			const price = document.createElement("span");
			price.className = "px-3 py-2";
			price.style.backgroundColor = "white";
			price.style.color = "black";
			price.style.borderRadius = "20px";
			price.innerText = product.price + "€";

			cardBody.appendChild(title);
			cardBody.appendChild(brand);
			cardBody.appendChild(description);
			cardBody.appendChild(price);
			imgDiv.appendChild(img);

			col8.appendChild(cardBody);
			col4.appendChild(imgDiv);
			row.appendChild(col4);
			row.appendChild(col8);
		})
		.catch((error) => {
			console.log("C'è stato un errore", error);
		});
};
