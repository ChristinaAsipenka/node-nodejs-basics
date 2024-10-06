import {existsSync, readFileSync} from 'fs';
import {join} from 'path';
import {folderPath} from './fsconst.js';

const filePath = join(folderPath, 'fileToRead.txt');

const read = async () => {
    if (!existsSync(filePath)) {
        throw new Error('FS operation failed: fileToRead.txt does not exist');
    }

    const content = readFileSync(filePath, 'utf-8');
    console.log(content);
};

try {
    await read();
} catch (err) {
    console.log('\'\x1b[31m%s\x1b[0m\'', err.message)
}