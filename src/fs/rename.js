import { existsSync, renameSync } from 'fs';
import { join } from 'path';
import { folderPath } from  './fsconst.js';
const wrongFilePath = join(folderPath, 'wrongFilename.txt');
const properFilePath = join(folderPath, 'properFilename.md');

const rename = async () => {
    if (!existsSync(wrongFilePath)) {
        throw new Error('FS operation failed: wrongFilename.txt does not exist');
    }

    if (existsSync(properFilePath)) {
        throw new Error('FS operation failed: properFilename.md already exists');
    }

    renameSync(wrongFilePath, properFilePath);
};

try {
    await rename();
    console.log('\'\x1b[32m%s\x1b[0m\'', 'File renamed successfully!')
} catch (err) {
    console.log('\'\x1b[31m%s\x1b[0m\'', err.message)
}