chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    // alert(req)
    let result = window.location.pathname.split('/')[4];
    // document.getElementById("log").innerHTML = result;
    console.log(result);


    sendResponse(result);

});





// let result = window.location.pathname.split('/')[4];
// // document.getElementById("log").innerHTML = result;
// console.log(result,"mauka mauka")




// // // Listen for messages
// // chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
// //     // If the received message has the expected format...
// //     if (msg.text === 'report_back') {
// //         // Call the specified callback, passing
// //         // the web-page's DOM content as argument
// //         sendResponse(document.all[0].outerHTML);
// //     }
// // });

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     console.log('content.js', {msg, sender, sendResponse}); 
// });



