function evaluatePassenger(penumpang) {
    const { id, name, temperature, travelHistory } = penumpang;
    const negaraBerbahaya = ['China', 'Japan', 'Korea', 'Singapore'];

    let status = '';

    if (temperature > 35) {
        // Jika suhu tubuh di atas 35 derajat
        if (travelHistory.some(negara => negaraBerbahaya.includes(negara))) {
            status = 'Suspect';
        } else {
            status = 'Sick';
        }
    } else {
        // Jika suhu tubuh 35 derajat atau kurang
        if (travelHistory.some(negara => negaraBerbahaya.includes(negara))) {
            status = 'Potential Carrier';
        } else {
            status = 'Healthy';
        }
    }

    return `Passenger ${id} ${name} ${status}`;
}

// Contoh kasus
console.log(evaluatePassenger({
    name: 'Budi',
    id: 50,
    temperature: 40,
    travelHistory: ['Rusia', 'Jepang']
}));
// Passenger 50 Budi Suspect

console.log(evaluatePassenger({
    name: 'Tono',
    id: 10,
    temperature: 25,
    travelHistory: ['Korea']
}));
// Passenger 10 Tono Potential Carrier

console.log(evaluatePassenger({
    name: 'Tsubasa',
    id: 15,
    temperature: 30,
    travelHistory: ['Brazil']
}));
// Passenger 15 Tsubasa Healthy

console.log(evaluatePassenger({
    name: 'Anang',
    id: 28,
    temperature: 40,
    travelHistory: ['Korea']
}));