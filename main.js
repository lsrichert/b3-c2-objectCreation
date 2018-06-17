const finAdvisorCo = Object.create(null, {
    company: {
        enumerable: true,
        writable: false,
        property: "company A"
    }, 
    specialty: {
        enumerable: true,
        writable: false,
        property: "stocks"
    },
    name: {
        enumerable: true,
        writable: false,
        property: "Henry"
    },
    portfolio: {
        enumerable: false,
        value: [{ticker: "target",
                share: 10,
                price: 20,
                transType: "start"}]

    },

            worth: {
                enumerable: false,
                value: function () {

        // I was confused by Jisie's code for this so Adelaide shared the three ways to code this that she learned.
        //____________________USING A FOR LOOP_________________________
        //             let grandTotal = 0;
        //             // When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.
        //             for(let i = 0; i < financialAdvisor.portfolio.length; i++){
        //                 let total = financialAdvisor.portfolio[i].share * financialAdvisor.portfolio[i].price
        //                 console.log("total", total)
        //                 if (financialAdvisor.portfolio[i].purchase === true){
        //                    grandTotal = grandTotal + total 
        //                 } else {
        //                     grandTotal = grandTotal - total
        //                 }
        //             }
        //             console.log("grand total", grandTotal)
        // //__________________________________USING THE 'FOR EACH' LOOP WITH FUNCTION INSIDE___________________
        //             let grandTotal = 0;
        //             financialAdvisor.portfolio.forEach(function(key){
        //                 console.log("key", key)
        //                 let total = key.share * key.price
        //                 if (key.purchase === true){
        //                    grandTotal = grandTotal + total 
        //                 } else {
        //                     grandTotal = grandTotal - total
        //                 }
        //             })
        //             console.log("grand total", grandTotal)
        //__________________________________USING THE 'FOR EACH' LOOP WITH FUNCTION OUTSIDE___________________
                    let grandTotal = 0;
                    let getNetWorth = function (key){
                        let total = key.share * key.price
                        if (key.purchase === true){
                            grandTotal = grandTotal + total 
                        } else {
                            grandTotal = grandTotal - total
                        }
                    }
                    financialAdvisor.portfolio.forEach(getNetWorth)
                    console.log("grand total", grandTotal)   
                }
    },

    purchase: {
        enumerable: false,
        value: function (symbol, quantity, purchasePrice) {
            // this.portfolio.push ... if you do it this way, you don't have to do the other push at bottom

            const newPurchase = {    
                ticker: symbol,
                share: quantity,
                price: purchasePrice,
                transType: "buy",
                purchase: true       
                // this extra key value above is there because of the task for 'worth'
            }
            finAdvisorCo.portfolio.push(newPurchase)
           console.log("new purchase inside purch function", newPurchase);

        }
    },
    sell: {
        enumerable: false,
        value: function (symbol, quantity, sellPrice) {
            const sellStock = {
                ticker: symbol,
                share: quantity,
                price: sellPrice,
                transType: "sell",
                purchase: false
            }
            finAdvisorCo.portfolio.push(sellStock)
          console.log("sell stock inside sell function", sellStock);  
           

        }
    }
})

console.log("wholepiece", finAdvisorCo.portfolio);

finAdvisorCo.purchase("facebook", 30, 50)

finAdvisorCo.sell("walmart", 10, 20)