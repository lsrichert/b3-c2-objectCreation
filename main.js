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
        value: function (symbol, quantity, stockWorth) {

            // this is Jisie's code for this function and I'm confused about this.
    //         return this.poftfolio.reduce ( (accumulator, currentValue) => {
    //             console.log("accumulator", accumulator, "currentValue", currentValue);

    //             if(currentValue.purchase){
    //                 return accumulator += (currentValue.quantity * currentValue.price)
    //                 { else {
    //                     return accumulator _= (currentValue.quanitity * currentValue.price)
    //                 }
    //                 }, 0}

    //             }
    //         })
            

    //     }
    // },
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