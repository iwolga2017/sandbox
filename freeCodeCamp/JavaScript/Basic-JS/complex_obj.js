// Add a new album to the myMusic array. Add artist and title strings, release_year number, 
// and a formats array of strings.


const myMusic = [
    {
        "artist": "Biily Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

myMusic.push({
    "artist": "Bon Jovy",
    "title": "Forgive Me",
    "release_year": 2002,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": false
});

console.log(myMusic);