export interface BirthData { date: Date; lat: number; lng: number; }

const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const nakshatras = ['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'];
const planets = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'];

export function calculateChart(birth: BirthData) {
  const seed = birth.date.getTime() + Math.floor(birth.lat * 100) + Math.floor(birth.lng * 100);
  const seededRandom = (n: number) => { let x = Math.sin(seed + n) * 10000; return x - Math.floor(x); };
  const ascendantIndex = Math.floor(seededRandom(1) * 12);
  const moonIndex = (Math.floor(birth.date.getTime() / (2.5 * 24 * 60 * 60 * 1000)) + ascendantIndex) % 12;
  const sunIndex = birth.date.getMonth();
  const nakshatraIndex = Math.floor(seededRandom(2) * 27);
  const planetPositions = planets.map((name, i) => {
    const house = 1 + Math.floor(seededRandom(10 + i) * 12);
    const signIndex = (ascendantIndex + house - 1 + Math.floor(seededRandom(20 + i) * 2)) % 12;
    return { name, sign: signs[signIndex], degree: Math.floor(seededRandom(30 + i) * 30 * 10) / 10, house, retrograde: seededRandom(40 + i) > 0.8 };
  });
  const houses = Array.from({ length: 12 }, (_, i) => ({ number: i + 1, sign: signs[(ascendantIndex + i) % 12], degree: (ascendantIndex * 30 + i * 2) % 30 }));
  return { ascendant: signs[ascendantIndex], moonSign: signs[moonIndex], sunSign: signs[sunIndex], nakshatra: nakshatras[nakshatraIndex], planets: planetPositions, houses };
}
