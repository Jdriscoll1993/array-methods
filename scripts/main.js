
// // ////BUSINESSES Exercie

// //filter array method
// const businessOutput = document.querySelector("#output");
// console.log("businessOutput", businessOutput);


// // let newYorkBusiness = businesses.filter(business => {
// //     console.log("what is Byran's business?", business);
// //     let inNewYork = false;

// //     if (business.addressStateCode === "NY"){
// //         inNewYork = true;
// //     }

// //     return inNewYork;
// // });

// // function showBusiness(business) {
// //     return `<div>${business.companyName}</div><hr>`
// // }
// // //map array method
// // let newStuff = businesses.map(showBusiness);
// // businessOutput.innerHTML += newStuff.join("");

// // let newYorkBusiness = businesses.filter(business => {
// //     console.log("what is Byran's business?", business);
// //     let inNewYork = false;

// //     if (business.addressStateCode === "NY"){
// //         inNewYork = true;
// //     }

// //     return inNewYork;
// // });

// businesses.filter(business => {
//     let orders = business.orders.find(order => order > 9000);

//     if (orders === undefined) {
//         return false;
//     }
//     return true;
// })
// .forEach(business => {
//     console.log("big spenders", business);
//     businessOutput.innerHTML += `
//     <h2>Im a big spender: ${business.companyName}</h2>
//     <hr>`;
    
// });