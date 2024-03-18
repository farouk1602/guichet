let counters = {
    medecin1: 1,
    medecin2: 1,
    medecin3: 1
};

function next(medecin) {
    let ticketSequence = '';
    let imageSource = '';

    if (medecin === 'medecin1') {
        ticketSequence = 'A';
        imageSource = 'img/Pediatrician-bro.svg';
    } else if (medecin === 'medecin2') {
        ticketSequence = 'B';
        imageSource = 'img/CT scan-rafiki.svg';
    } else if (medecin === 'medecin3') {
        ticketSequence = 'C';
        imageSource = 'img/Ophthalmologist-rafiki.svg';
    }

    let ticket = ticketSequence + counters[medecin];

    document.getElementById('medecinTitle').innerText = `Médecin ${medecin.charAt(medecin.length-1)}`;
    
    document.getElementById('ticketTitle').innerText = `Numéro de ticket : ${ticket}`;

    document.getElementById('medecinImage').src = imageSource;

    document.querySelector('.output').style.display = 'block';
    
    counters[medecin]++;

    setTimeout(() => {
        document.querySelector('.output').style.display = 'none';
        document.getElementById('hello').style.display = 'block';

    setTimeout(() => {
        document.getElementById('hello').style.display = 'none';
        document.getElementById('done').style.display = 'block';

        setTimeout(() => {
            document.getElementById('done').style.display = 'none';
        }, 1000);
    }, 5000);
}, 3000);
}