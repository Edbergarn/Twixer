/* element för manipulation */
		var button = document.getElementById("clickerbutton");
		var lejonKnapp = document.getElementById("lejon");
		var zebraKnapp = document.getElementById("zebra");
		var krokodilKnapp = document.getElementById("krokodil");
		var bonus1Knapp = document.getElementById("bonus1");
		var scoreDiv = document.getElementById("score");
		var powerText = document.getElementById("powerText");
		var lejonBuy = document.getElementById("lejonBuy");

		/*Skapa nytt element för poängen*/
		var scoreText = document.createElement("p");


		/*Spelvariabler*/
		var clickValue = 1;
		var allValue = 0;
		var bank = 0;
		var lejonCost = 15;
		var lejonClick = 0;
		var lejonBought = 0;
		var zebraCost = 30;
		var zebraClick = 0;
		var zebra = null;
		var zebraTimer = 0;
		var zebraGains = 5;
		var krokodilCost = 40;
		var krokodilClick = 1;
		var krokodil = null;
		var krokodilTimer = 0;
		var bonus1Cost = 2000;
		var bonus1Bought = 0;

		var superLejon = 0;


		/*start*/
		scoreText.textContent = "Score: 0";
		lejonKnapp.textContent = "Penna: " + Math.floor(lejonCost);
		zebraKnapp.textContent = "Knogjärn: " + Math.floor(zebraCost);
		krokodilKnapp.textContent = "Slav: " + Math.floor(krokodilCost);
		/* click event + logic*/
		button.addEventListener("click", function(){
			if (bonus1Bought == 1) {
				clickValue *= 2;
			} else {
				bonus1Bought == 0;
			}


			if (lejonClick > 0) {
				console.log("Jag har " + lejonClick + " lejon kvar!");
				lejonClick--;
			}else if (lejonClick == 0) {
				console.log("slut på lejon");
				clickValue = 1;
			}
			Math.floor(bank += clickValue);//lägg till värdet vid click
			scoreText.textContent = "Score: " + Math.floor(bank);// sätt textvärdet i p elementet till bank
		}, true);

		scoreDiv.appendChild(scoreText);// fäst p elementet i score diven


		lejonKnapp.addEventListener("click", function(){
			if(bank >= lejonCost){

				if (lejonBought >= 10) {

						lejonBuy.style.display = "inline";
				}
				console.log("köpte Penna");
				if (lejonClick>0) {
					lejonClick += 10;
					bank -= lejonCost;
					lejonCost *= 1.5;
					lejonBought++;
				}else{
				bank -= lejonCost;
				clickValue *= 2;
				lejonCost *= 1.5;
				lejonClick +=10;}
				lejonBought++;
				lejonKnapp.textContent = "Penna: " + Math.floor(lejonCost);
				scoreText.textContent = "Score: " + Math.floor(bank);
			} else{
				console.log("Du har inte råd!");
			}

		}, true);
		scoreDiv.appendChild(scoreText);

		zebraKnapp.addEventListener("click", function(){
			if(bank >= zebraCost && zebraTimer <= 0){
				console.log("köpte Knogjärn");
				bank -= zebraCost;
				zebraCost *= 1.4;
				zebraTimer += 10;
				zebraGains += 5;


				zebra = setInterval(function(){
					bank += zebraGains;
					scoreText.textContent = "Score: " + Math.floor(bank);	
					zebraTimer--;
					if (zebraTimer == 0) {
						clearInterval(zebra);
					}
				}, 1000)
				zebraKnapp.textContent="Knogjärn: " + Math.floor(zebraCost);
				scoreText.textContent = "Score: " + Math.floor(bank);
			} else if (bank < zebraCost) {
				console.log("Du har inte råd!");
			}else {
				console.log("Du kan max ha 1 Knogjärn åt gången :(");
			}
		})
		scoreDiv.appendChild(scoreText);

		krokodilKnapp.addEventListener("click", function(){
			if (bank >= krokodilCost) {
				console.log("Köpte SLAV!!!");
				bank -= krokodilCost;
				allValue++;
				krokodilCost *= 1.2;
				krokodilTimer += 1;
				clearInterval(krokodil)

			krokodil = setInterval(function(){
			bank += allValue;
			scoreText.textContent = "Score: " + Math.floor(bank);	
		if (krokodilTimer == 0) {
			clearInterval(krokodil);
					}
			}, 1000)
		
		krokodilKnapp.textContent = "Slav: " + Math.floor(krokodilCost);
		scoreText.textContent = "Score: " + Math.floor(bank);
			} else{
				console.log("Du har inte råd!:(")
			}

		})
		lejonBuy.addEventListener("click", function(){
			if (bank >= 200) {
				clickValue * 2;
				superLejon++;
				lejonBuy.style.display = "none";
			}
		})
	/*	bonus1Knapp.addEventListener("click", function(){
			 if(bonus1Bought == 1){
			 	bonus1Bought == 0;
			 }esle if(bank >= bonus1Cost){
				bonus1Bought == 1;
				scoreText.textContent = "Score: " + Math.floor(bank);
				bonus1Knapp.textContent = "Slav: " + Math.floor(bonus1Cost);
			 }else{
				console.log("Du har inte råd!");
			}
		
	})*/