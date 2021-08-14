const transportService = jest.mock('./transport.service');

let mockData;

transportService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

transportService.__setMockData = data => mockData = data;

module.exports = transportService;
