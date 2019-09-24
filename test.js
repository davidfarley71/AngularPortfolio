function Banana = (length, diameter) => {
    this.color = 'yellow';
    this.length = length;
    this.diameter = diameter;
    this.isYummy = true;
    let rot = function () {
        this.isYummy = false;
    };
}

const b = new Banana(1, 2);