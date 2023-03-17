const sumHandshake = require('./task.js');

describe("Сумма всех рукопожатий:", () => {
    test("проверка на равенство (универсальная)", () => {
        expect(sumHandshake(10)).toBe(45);
    })

    test("проверка на равенство (для чисел)", () => {
        expect(sumHandshake(3)).toEqual(3);
    })

    test("проверка на число", () => {
        expect(sumHandshake(2)).not.toBeNaN();
    })

    test("проверка на величину (больше, чем)", () => {
        expect(sumHandshake(5)).toBeGreaterThan(8);
    })

    test("проверка на величину (меньше, чем)", () => {
        expect(sumHandshake(7)).toBeLessThan(28);
    })
})