import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {

    parentPort.on('message', (n) => {
        try {
            console.log(`Received ${n} in worker thread`);
            const result = nthFibonacci(n);
            console.log(`Computed result: ${result}`);
            parentPort.postMessage(result);
        } catch (error) {
            console.error('Error in worker thread:', error);
            parentPort.postMessage({ error: error.message });
        }
    });
};

sendResult();