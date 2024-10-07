import { Transform } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        this.push(reversedChunk);
        callback();
    }
});

const transform = async () => {
    console.log('Type text to reverse (Press Ctrl+C to exit):');
    process.stdin
        .pipe(reverseTransform)
        .pipe(process.stdout);

    process.stdin.on('error', (err) => {
        console.error('Error reading from stdin:', err.message);
    });

    reverseTransform.on('error', (err) => {
        console.error('Error in transform stream:', err.message);
    });

    process.stdout.on('error', (err) => {
        console.error('Error writing to stdout:', err.message);
    });

};

await transform();