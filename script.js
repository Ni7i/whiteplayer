// API für Gebetszeiten (Salah)
function loadPrayerTimes() {
  const apiKey = 'your_api_key_here'; // API-Schlüssel von Aladhan
  const latitude = 52.5200; // Beispiel: Berlin, Latitude
  const longitude = 13.4050; // Beispiel: Berlin, Longitude

  // URL für Gebetszeiten-API
  const url = `http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const times = data.data.timings;
          const prayerTimesList = document.getElementById('prayerTimes');

          // Lösche bestehende Gebetszeiten
          prayerTimesList.innerHTML = '';

          // Füge Gebetszeiten zur Liste hinzu
          for (let prayer in times) {
              let li = document.createElement('li');
              li.textContent = `${prayer}: ${times[prayer]}`;
              prayerTimesList.appendChild(li);
          }
      })
      .catch(error => {
          console.error("Fehler beim Abrufen der Gebetszeiten:", error);
      });
}

// Gebetszeiten beim Laden der Seite anzeigen
window.onload = loadPrayerTimes;

// Berechnung der Nachtzeit
function berechneNacht() {
  const maghrib = document.getElementById('maghrib').value;
  const fajr = document.getElementById('fajr').value;

  if (!maghrib || !fajr) {
    alert("Bitte Zeiten für Maghrib und Fajr eingeben!");
    return;
  }

  // Easter Egg: Wenn sowohl Fajr als auch Maghrib 3:00 sind
  if (fajr === '03:00' && maghrib === '03:00') {
      alert('Fatlum te duuuuuuu!');
      return;
  }

  // Zeit in Minuten umrechnen
  let [mH, mM] = maghrib.split(':').map(Number);
  let [fH, fM] = fajr.split(':').map(Number);

  let maghribTotal = mH * 60 + mM;
  let fajrTotal = fH * 60 + fM;

  // Toleranz von 2-3 Minuten zufällig hinzufügen
  const tolerance = Math.floor(Math.random() * 2) + 2;  // Zufällige Toleranz zwischen 2 und 3 Minuten
  maghribTotal += tolerance; // Toleranz zu Maghrib hinzufügen
  fajrTotal += tolerance; // Toleranz zu Fajr hinzufügen

  // Falls Fajr <= Maghrib, ist es am nächsten Tag
  if (fajrTotal <= maghribTotal) {
    fajrTotal += 24 * 60;
  }

  let diff = fajrTotal - maghribTotal; // Nachtlänge in Minuten

  // Erstes Drittel, Mitternacht, Letztes Drittel
  let firstThird = maghribTotal + Math.floor(diff / 3);
  let midnight = maghribTotal + Math.floor(diff / 2);
  let lastThird = maghribTotal + Math.floor((2 * diff) / 3);

  // Funktion zum Formatieren
  function formatTime(totalMinutes) {
    totalMinutes = totalMinutes % (24 * 60);
    let hh = Math.floor(totalMinutes / 60);
    let mm = totalMinutes % 60;
    return hh.toString().padStart(2, '0') + ":" + mm.toString().padStart(2, '0');
  }

  // Events erstellen
  let events = [
    { time: formatTime(maghribTotal), description: "Maghrib-Gebetszeit beginnt" },
    { time: formatTime(firstThird), description: "Erstes Drittel" },
    { time: formatTime(midnight), description: "Islamische Mitternacht" },
    { time: formatTime(lastThird), description: "Letztes Drittel" },
    { time: formatTime(fajrTotal), description: "Fajr-Gebetszeit beginnt" }
  ];

  // Timeline befüllen
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = ""; // leeren

  events.forEach(e => {
    let li = document.createElement('li');

    let timeEl = document.createElement('div');
    timeEl.className = 'time';
    timeEl.textContent = e.time;

    let descEl = document.createElement('div');
    descEl.className = 'description';
    descEl.textContent = e.description;

    li.appendChild(timeEl);
    li.appendChild(descEl);
    timeline.appendChild(li);
  });
}
