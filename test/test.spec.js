const expect = require('expect');

describe ('infos', () => {
    it('should have a manager object', () =>{
        let manObj = {
            name: "Tom Holland",
            id: "800815",
            email: "tom@holland.com",
            phone: "913-888-8888",
            gihub: "TomHolland"
        }

        let manArr = []

        expect(manObj.name).toBe('Tom Holland');
        expect(manObj.id).toBe('800815');
        expect(manObj.phone).toBe('913-888-8888');
        expect(manObj.email).toBe('tom@holland.com');
        expect(manObj.github).toBe('TomHolland');

        manArr.push(man.manObj);
    });

    it('should have an array of manager info', () => {
        expect(manArr.length).toBe(1);
    });

    it('should have an engineer object', () =>{
        let engObj = {
            name: "Tom Holland",
            id: "800815",
            email: "tom@holland.com",
            phone: "913-888-8888",
            gihub: "TomHolland"
        }

        let engArr = []

        expect(engObj.name).toBe('Tom Holland');
        expect(engObj.id).toBe('800815');
        expect(engObj.phone).toBe('913-888-8888');
        expect(engObj.email).toBe('tom@holland.com');
        expect(engObj.github).toBe('TomHolland');

        engArr.push(engObj);
    });

    it('should have an array of engineer info', () => {
        expect(engArr.length).toBe(1);
    });

    it('should have an intern object', () =>{
        let intObj = {
            name: "Tom Holland",
            id: "800815",
            email: "tom@holland.com",
            phone: "913-888-8888",
            gihub: "TomHolland"
        }

        let intArr = []

        expect(intObj.name).toBe('Tom Holland');
        expect(intObj.id).toBe('800815');
        expect(intObj.phone).toBe('913-888-8888');
        expect(intObj.email).toBe('tom@holland.com');
        expect(intObj.github).toBe('TomHolland');

        intArr.push(intObj);
    });

    it('should have an array of engineer info', () => {
        expect(intArr.length).toBe(1);
    });
})
