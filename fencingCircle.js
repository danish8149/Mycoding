const fencingCircle = (r, numberOfLayers, rateOfWire) => {
    const pi = 22/7;
    const ParameteOfShape= 2*pi*r;
    const fencingWireLength = ParameteOfShape * numberOfLayers;
    const costOfWire= fencingWireLength * rateOfWire;
    return costOfWire;
}
console.log(fencingCircle(3,4,12));
