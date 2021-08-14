const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const storageController = require('./storage.controller');
const storageService = require('./storage.service');

jest.mock('./storage.service');

describe("storage controler", () => {
    const mockData = [{
        "id": 1,
        "first_name": "Fiorenze",
        "last_name": "Dyneley",
        "email": "fdyneley0@narod.ru"
    }, {
        "id": 2,
        "first_name": "Owen",
        "last_name": "Jirka",
        "email": "ojirka1@squidoo.com"
    }, {
        "id": 3,
        "first_name": "Terra",
        "last_name": "Hurdman",
        "email": "thurdman2@reverbnation.com"
    }, {
        "id": 4,
        "first_name": "Thomasin",
        "last_name": "de Keep",
        "email": "tdekeep3@fc2.com"
    }, {
        "id": 5,
        "first_name": "Lawrence",
        "last_name": "Tearle",
        "email": "ltearle4@infoseek.co.jp"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        storageService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const storage_ID = 1;

        const request = mockRequest({
            params: {
                id: storage_ID
            }
        });

        return storageController.findOne(request, response, nextFunction)
            .then( () => {
                expect(storageService.findOne).toBeCalledWith(storage_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === storage_ID)
                );                
            })
    });
});