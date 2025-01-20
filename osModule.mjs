import os from 'node:os'

const convMb = 1024 ** 2;

const getOsData = () => {
    const osData = {
        Name : os.platform(),
        Type : os.type(),
        Version : os.version(),
        Architecture : os.arch(),
        CPUs : os.cpus().length,
        TotalMemory : (os.totalmem() / convMb),
        FreeMemory : [os. freemem() / convMb]
    }

    console. log(osData);
}

getOsData()