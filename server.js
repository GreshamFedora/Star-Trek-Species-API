const express = require('express')
const app = express()
const cors = require('cors')
const { platform } = require('os')
const PORT = 8000

app.use(cors())

const aliens = {
    'humans': {
        'speciesName': 'Humans',
        'homeworld': 'Earth',
        'features': 'Rounded ears, hair on head and face (sometimes)',
        'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans',
        'notableExamples': 'James T. Kirk, Zephram Cochran, Jean Luc Picard',
        'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg',
    },
    'vulcans': {
        'speciesName': 'Vulcans',
        'homeworld': 'Vulcan',
        'features': 'Pointed ears, upward -curving eyebrows',
        'interestingFact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak',
        'notableExamples': "Spock, T'pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg',
    },
    'klingons': {
        'speciesName': 'Klingons',
        'homeworld': "Qo'nos",
        'features': 'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269',
        'notableExamples': 'Worf, Kor, Kang',
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg',
    },
    'romulans': {
        'speciesName': 'Romulans',
        'homeworld': 'Romulus',
        'features': 'Pointed ears, upward-curving eyebrows, green tinge to the skin, diagonal smooth forehead ridges (sometimes)',
        'interestingFact': 'Share a common ancestory with Vulcans, though none of the emoitional discipline. ROmulus has a sister planet, Remus, on whcih the Remans are seen as lessed beings.',
        'notableExamples': "Pardek, Tal'aura, Narissa",
        'image': 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg',
    },
    'borg': {
        'speciesName': '(The) Borg',
        'homeworld': 'Unknown (delta Quadrant)',
        'features': 'Pale skin, numerous interior and exterior biological modifications',
        'interestingFact': 'No single genetic lineage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" indidivudal. DO  NOT APPROACH unless under specific diplomatic order from Starfleet Command.',
        'notableExamples': 'Borg Queen',
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg',
    },
    'gorn': {
        'speciesName': 'Gorn',
        'homeworld': 'Unknown (Alpha Quadran)',
        'features': 'Scaly green skin, large, iridescent eyes, powerful build, sharp teeth',
        'interestingFact': 'Extremely militaristic and driven to conquer, but also possess advanced scientific knowledge allowing for superior bio-weapons.',
        'notableExamples': 'Gorn Captain',
        'image': 'https://static.wikia.nocookie.net/aliens/images/',
    },
    'trill': {
        'speciesName': 'Trill',
        'homeworld': 'Trill',
        'features': 'Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body',
        'interestingFact': 'Some Trill are willing hosts to a long-lived invertebrate symbiote that merges with the host to create a distinct personality.',
        'notableExamples': 'Jadzia Dax, Ezri Dax, Curzon Dax',
        'image': 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg',
    },

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (req,res) => {
    const aliensName = req.params.alienName.toLowerCase()
    if (aliens[aliensName]) {
        res.json(aliens[aliensName])
    } else {
        res.json(aliens['humans'])
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is runnong on port ${PORT}.`)
})
