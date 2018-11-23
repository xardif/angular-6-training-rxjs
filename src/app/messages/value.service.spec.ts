import { ValueService } from "./value.service";

// straight jasmine test
describe('ValueService', () => {
    let service :ValueService;

    beforeEach(() => {
        service = new ValueService();
    });

    it('#getValue should return real value', () => {
        expect(service.getValue()).toBe("real value");
    });

} );