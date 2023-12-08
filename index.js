const fetchData = () => {
	fetch("https://striveschool-api.herokuapp.com/api/product/", {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDgwNzBkOGEyMDAwMThhNDhhNjIiLCJpYXQiOjE3MDE5NTk2ODcsImV4cCI6MTcwMzE2OTI4N30.YJ4PVUQxMyns2Gpy7B2WaWE0y5rqH040BgnrEUlJj0I",
		},
	})
		.then((response) => {
			if (response.status === 404) throw new Error("Errore, risorsa non trovata");
			if (response.status >= 400 && response.status < 500) throw new Error("Errore lato Client");
			if (response.status >= 500 && response.status < 600) throw new Error("Errore lato Server");
			if (!response.ok) throw new Error("Errore nel reperimento dei dati");
			return response.json();
		})
		.then((products) => {
			const row = document.querySelector(".row");
			products.forEach((product) => {
				const div = document.createElement("div");
				div.className = "col-12 col-md-6 col-lg-3 mb-3";
				const card = document.createElement("div");
				card.className = "card";
				const img = document.createElement("img");
				img.style.height = "300px";
				img.style.objectFit = "cover";
				img.src = product.imageUrl;
				const cardBody = document.createElement("div");
				cardBody.className = "card-body";
				const cardTitle = document.createElement("div");
				cardTitle.className = "d-flex justify-content-between";
				const title = document.createElement("h5");
				title.className = "d-inline";
				title.innerText = product.name;
				const price = document.createElement("span");
				price.innerText = product.price + "€";
				const btnDiv = document.createElement("div");
				btnDiv.className = "d-grid gap-2 d-flex justify-content-between mt-3";
				const buttonDetails = document.createElement("a");
				buttonDetails.className = "btn";
				buttonDetails.innerText = "Scopri di più";
				buttonDetails.href = "./details.html?id=" + product._id;
				const buttonMod = document.createElement("a");
				buttonMod.className = "btn";
				buttonMod.innerText = "Modifica";
				buttonMod.href = "./backoffice.html?id=" + product._id;

				cardTitle.appendChild(title);
				cardTitle.appendChild(price);
				btnDiv.appendChild(buttonDetails);
				btnDiv.appendChild(buttonMod);
				cardBody.appendChild(cardTitle);
				cardBody.appendChild(btnDiv);
				card.appendChild(img);
				card.appendChild(cardBody);
				div.appendChild(card);
				row.appendChild(div);
			});
		})
		.catch((error) => {
			console.log("C'è stato un errore", error);
		});
};

window.addEventListener("DOMContentLoaded", () => {
	fetchData();
});
