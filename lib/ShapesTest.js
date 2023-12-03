
const { circle, square, triangle } = require("./lib/Shapes");

describe('shape functions', () => (
    test('circle function should generate correct svg string', () => {
        const data = {
            characters: 'SIR',
            textColor: 'purple',
            shapeColor: 'blue',
        };
    
        const results = circle(data);

        expect(result).toContain('<circle');
        expect(result).toContain('fill="purple"');
        expect(result).toContain('fill="blue"');
        expect(result).toContain('>SIR</text>');
    
    )};

test('square function should generate correct svg string', () => {
const data = {
    characters: 'LRD',
    textColor: 'orange',
    shapeColor: 'green',
};

const result = square(data);

expect(result).toContain('<rect');
expect(result).toContain("fill='orange'");
expect(result).toContain("fill='green'");
expect(result).toContain('>LRD<text>');
});

test('triangle function should generate correct svg string', () => {
    const data = {
        characters: 'JDR',
        textColor: 'brown',
        shapeColor: 'red',
    };
const result = square(data);

expect(result).toContain('polygon');
expect(result).toContain("fill='red'");
expect(result).toContain("fill=brown'");
expect(result).toContain('>JDR</text');
});
});

