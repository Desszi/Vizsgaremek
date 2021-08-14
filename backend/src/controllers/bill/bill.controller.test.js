const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const billController = require('./bill.controller');
const billService = require('./bill.service');

jest.mock('./bill.service');

describe("bill controler", () => {
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
        billService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const bill_ID = 1;

        const request = mockRequest({
            params: {
                id: bill_ID
            }
        });

        return billController.findOne(request, response, nextFunction)
            .then( () => {
                expect(billService.findOne).toBeCalledWith(bill_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === bill_ID)
                );                
            })
    });
});