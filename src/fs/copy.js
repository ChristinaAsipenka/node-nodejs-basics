import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync } from 'fs';
import { folderPath, homePath } from  './fsconst.js';
import { join } from 'path';

const copyFolderPath = join(homePath, 'files_copy');

const copy = async (source, destination) => {
    if (!existsSync(source)) {
        throw new Error('FS operation failed');
    }

    if (existsSync(destination)) {
        throw new Error('FS operation failed');
    }

    mkdirSync(destination);
    const items = readdirSync(source);
    items.forEach(item => {
        const sourceItemPath = join(source, item);
        const destinationItemPath = join(destination, item);

        const stats = statSync(sourceItemPath);

        if (stats.isFile()) {
            copyFileSync(sourceItemPath, destinationItemPath);
        } else if (stats.isDirectory()) {
            copy(sourceItemPath, destinationItemPath);
        }
    });
};

try {
    await copy(folderPath, copyFolderPath);
    console.log('\'\x1b[32m%s\x1b[0m\'', 'Done!')
} catch (err) {
    console.log('\'\x1b[31m%s\x1b[0m\'', err.message)
}

