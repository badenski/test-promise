function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = {};
        script.src = src;
        setTimeout(() => resolve(script), 1000);

        //reject(new Error(`Script load error for ${src}`));
        console.log('hé %O', script);
    });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => console.log(`${script.src} is loaded!`),
  error => console.log(`Error: ${error.message}`)
);

promise.then(script => console.log('Another handler...'));