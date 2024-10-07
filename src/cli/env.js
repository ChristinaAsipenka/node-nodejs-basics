const parseEnv = () => {

    const rssEnvVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`);

    const formattedOutput = rssEnvVariables.join('; ');

    if (formattedOutput) {
        console.log(formattedOutput);
    } else {
        console.log('No RSS environment variables found.');
    }

};

parseEnv();