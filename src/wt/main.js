import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { resolve } from 'path';

const performCalculations = async () => {

    const numCores = cpus().length;
    const workers = [];
    const results = [];

    const handleWorkerCompletion = (index, status, data) => {
        results[index] = { status, data };

        if (results.length === numCores && results.every(r => r !== undefined)) {
            console.log(results);
        }
    };

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(resolve('src/wt/worker.js'));

        worker.postMessage(10 + i);

        worker.on('message', (result) => {
            handleWorkerCompletion(i, 'resolved', result);
        });

        worker.on('error', () => {
            handleWorkerCompletion(i, 'error', null);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
            }
        });

        workers.push(worker);
    }

};

await performCalculations();