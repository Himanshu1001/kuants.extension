

    
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick(){
        chrome.tabs.query({currentWindow:true, active:true},
            function (tabs){
                chrome.tabs.create({"url": "https://www.kuants.in"});
            })
    }
    


    // document.querySelector('button').addEventListener('click', getPageData, false);

    (function getPageData() {
        chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, 'hellloooo', (data) => {


                document.querySelector('span#stock-name').textContent = data;

                // let result = document.createElement('div');
                // result.textContent = data;

                // document.body.appendChild(result)

                // alert('aaaa::::', JSON.stringify(data))
                // console.log('data::::', data);
                
            });
        });
    })();

    function getResult(data) {
        alert('aaaa::::', JSON.stringify(data))
        console.log('data::::', data);
        
    }




// chrome.runtime.onMessage.addListener((req) => {
//     alert(req);
// });



}, false);
