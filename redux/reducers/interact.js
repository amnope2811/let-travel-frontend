const initialState = {
  placeList:[
    {
      id:'01',
      title:'Grand Palace',
      description:`If you only visit one major historical tourist attraction in Bangkok, this should be the one. The royal compound lives up to its name, with spectacular structures that would put the most decadent modern monarchs to shame. It's also the home of Wat Phra Kaeo, which houses the Jade (or Emerald) Buddha.`,
      tag:"Remain 2 Seats",
      img:"https://www.planetware.com/photos-large/THA/grand-palace.jpg",
      location:"Na Phra Lan Road, Phra Borom Maha Ratchawang, Phra Nakhon",
      rating:"5",
      fullprice:500,
      currentprice:300
    },
    {
      id:'02',
      title:'Wat Pho',
      description:`The temple was built by King Rama I and is the oldest in Bangkok. It has long been considered a place of healing, and was famous centuries ago for its pharmacy and as Thailand's first "university"—both established by King Rama III. You can get a Thai or foot massage at the traditional medical school on the premises, but the prices are significantly higher than what you will find at massage parlors elsewhere in the city.`,
      tag:"Full",
      img:'https://www.planetware.com/photos-large/THA/thailand-bangkok-wat-pho.jpg',
      location:"2 Sanamchai Road, Grand Palace Subdistrict, Pranakorn District",
      rating:"5",
      fullprice:400,
      currentprice:300
    },
    {
      id:'03',
      title:'Wat Arun',
      description:`Wat Arun is something of a triumphant complex, dating back to the time of ancient battles between the former Siam and Burma. Having fallen to the Burmese, Ayutthaya was reduced to rubble and ashes, but General Taksin and the remaining survivors vowed to march "until the sun rose again" and to build a temple here. Wat Arun, the Temple of the Dawn, was that temple. It is where the new king later built his royal palace and a private chapel.`,
      tag:"Full",
      img:'https://www.planetware.com/photos-large/THA/wat-arun.jpg',
      location:"Arun Amarin Road, Bangkok",
      rating:"3.5",
      fullprice:400,
      currentprice:400
    }
  ]
};
import useNReduxReducer from "./super";
export default function interact(state = initialState, action) {
  const reducer = new useNReduxReducer({ state, action });
  
  console.log(action,reducer);
  switch (action.type) {
    default:
      return reducer.observe("interact");
  }
}