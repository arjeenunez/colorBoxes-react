function Randomizer() {
    function Rand(val) { return Math.floor(Math.random() * val) + 1 };
    const red = Rand(255);
    const green = Rand(255);
    const blue = Rand(255);
    return `rgb(${red}, ${green}, ${blue})`
}

export default Randomizer;