// worker.js
const workercode = () => {

    onmessage = function(e) {
        console.log('Message received from main script');
        var workerResult = 'Received from main: ' + (e.data);
        console.log('Posting message back to main script');
        postMessage(workerResult);
    }
};

let code = workercode.toString();
console.log(code);
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

export default worker_script;