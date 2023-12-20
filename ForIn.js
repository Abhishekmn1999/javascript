let align = {
    name: "Abhi",
    tech: "Web",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "Apple",
    },
};

for (let key in align) {
    //outer object
    console.log(key, align[key]);
}

console.log();

for (let key in align.laptop) {
    //inner object
    console.log(key, align.laptop[key]);
}
