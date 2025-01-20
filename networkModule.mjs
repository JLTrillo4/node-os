import os from "node:os";

const getInterfaceData = () => {
    const interfaceData = os.networkInterfaces();
    console. log(interfaceData);


for (const interfaceName in interfaceData){
    console. log (`Interface ${interfaceName}: `);

    interfaceData[interfaceName].forEach(data => {
        console.log(`Familia: ${data.family}`);
        console.log(`Direccion: ${data.address} `);
        console.log(`Interno: ${data.internal} `);
        console.log(`------------`);
    })
    }
}

getInterfaceData()
export {getInterfaceData};