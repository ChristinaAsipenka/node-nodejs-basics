import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';
import { folderPath } from  './fsconst.js';
const fileToRemovePath = join(folderPath, 'fileToRemove.txt');

const remove = async () => {
    if (!existsSync(fileToRemovePath)) {
        throw new Error('FS operation failed: fileToRemove.txt does not exist');
    }

    unlinkSync(fileToRemovePath);
};

try {
    await remove();
    console.log('\'\x1b[32m%s\x1b[0m\'', 'File deleted successfully!')
} catch (err) {
    console.log('\'\x1b[31m%s\x1b[0m\'', err.message)
}