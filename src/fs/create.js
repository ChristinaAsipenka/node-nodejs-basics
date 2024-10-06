import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

import { join } from 'path';
const folderPath = join(process.cwd(), 'src/fs/files');
const filePath = join(folderPath, 'fresh.txt');

const create = async () => {

    if (existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    try {
        const content = 'I am fresh and young!';
        await writeFileSync(filePath, content);
    } catch (err) {
        throw new Error(err);
    }
};

try {
    await create();
} catch (err) {
    console.log(err.message);
}