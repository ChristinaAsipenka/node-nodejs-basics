import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
    const outputFile = 'src/zip/files/fileToCompress.txt';
    const inputFile = 'src/zip/files/archive.gz';

    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gunzip = createGunzip();

    pipeline(
        readStream,
        gunzip,
        writeStream,
        (err) => {
            if (err) {
                throw new Error(err.message)
            }
        }
    );

};

try {
    await decompress();
    console.log('\'\x1b[32m%s\x1b[0m\'', `File successfully decompressed`);
} catch (err) {
    console.error('\'\x1b[31m%s\x1b[0m\'', 'Decompression failed:');
}