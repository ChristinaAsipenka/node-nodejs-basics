import { createWriteStream } from 'fs';
const filePath = "src/streams/files/fileToWrite.txt";

const write = async () => {
    const writeStream = createWriteStream(filePath);
    console.log(`Writing to ${filePath}. Type your input and press Enter. Press Ctrl+C to exit.`);

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    process.stdin.on('end', () => {
        writeStream.end();
        console.log('Finished writing to file.');
    });

    writeStream.on('error', (err) => {
        console.error('Error writing to file:', err.message);
    });
};

await write();