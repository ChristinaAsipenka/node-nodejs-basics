import { createReadStream } from 'fs';
const filePath = "src/streams/files/fileToRead.txt";

const read = async () => {
    const readStream = createReadStream(filePath);
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        console.log('\nFinished reading file.');
    });

    readStream.on('error', (err) => {
        console.error('Error reading file:', err.message);
    });
};

await read();