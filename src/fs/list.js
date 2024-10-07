import { existsSync, readdirSync } from 'fs';
import { folderPath } from  './fsconst.js';

const list = async () => {
    if (!existsSync(folderPath)) {
        throw new Error('FS operation failed: files folder does not exist');
    }

    const filenames = readdirSync(folderPath);
    console.log(filenames);
};

try {
    await list();
} catch (err) {
    console.error('\'\x1b[31m%s\x1b[0m\'', err.message);
}