import { createHash } from 'crypto'; // Import the createHash function from the crypto module
import { createReadStream } from 'fs'; // Import createReadStream from the fs module
import { pipeline } from 'stream'; // Import the pipeline function from the stream module
const filePath = 'src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const readStream = createReadStream(filePath);
    const hash = createHash('sha256');
    pipeline(
        readStream,
        hash.setEncoding('hex'),
        (err) => {
            if (err) {
                console.error('Error:', err.message);
                return;
            }
            console.log('SHA256 Hash:', hash.read());
        }
    );
};

await calculateHash();