const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const transportController = require('./transport.controller');
const transportService = require('./transport.service');

jest.mock('./transport.service');

describe("transport controler", () => {
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
        transportService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const transport_ID = 1;

        const request = mockRequest({
            params: {
                id: transport_ID
            }
        });

        return transportController.findOne(request, response, nextFunction)
            .then( () => {
                expect(transportService.findOne).toBeCalledWith(transport_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === transport_ID)
                );                
            })
    });
});