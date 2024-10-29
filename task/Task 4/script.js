const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data 1'), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Data 2'), 2000));

async function fetchData() {
    const box = document.getElementById('centered-box');
    box.textContent = "Fetching data...";

    const data1 = fetchData1();
    const data2 = await fetchData2();

    console.log('Fetched Data:', [data1, data2]);

    box.textContent = `Fetched Data: ${JSON.stringify([data1, data2])}`;
}
