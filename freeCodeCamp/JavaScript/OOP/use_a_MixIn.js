// Create a mixin named glideMixin that defines a method named glide. 
// Then use the glideMixin to give both bird and boat the ability to glide.

let bird = {
    name: "Donald",
    numLegs: 2

};

let boat = {
    name: "Warior",
    type: "race-boat"
};

let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("I'm gliding!");
    }
}

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide());
console.log(boat.glide());

