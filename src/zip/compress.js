import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
    const inputFile = 'src/zip/files/fileToCompress.txt';
    const outputFile = 'src/zip/files/archive.gz';

    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gzip = createGzip();

    pipeline(
        readStream,
        gzip,
        writeStream,
        (err) => {
            if (err) {
                throw new Error(err.message)
            }
        }
    );
};

try {
    await compress();
    console.log(`File successfully compressed`);
} catch (err) {
    console.log(err.message)
}
