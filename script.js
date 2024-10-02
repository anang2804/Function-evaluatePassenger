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
    temperature: 40,
    travelHistory: ['Maroko', 'Perancis', 'Burma']
}));
// Passenger 10 Tono Sick

console.log(evaluatePassenger({
    name: 'Tsubasa',
    id: 15,
    temperature: 30,
    travelHistory: ['China', 'Japan', 'Korea', 'Singapore']
}));
// Passenger 15 Tsubasa Potentional carrier

console.log(evaluatePassenger({
    name: 'Anang',
    id: 28,
    temperature: 30,
    travelHistory: ['Indonesia']
}));

