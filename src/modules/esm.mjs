import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

import './files/c.js';

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let unknownObject;
const loadJsonFile = async (filePath) => {
    try {
        const data = await readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
};

if (random > 0.5) {
    unknownObject = await loadJsonFile('./files/a.json');
} else {
    unknownObject = await loadJsonFile('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

// Create an HTTP server
const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
