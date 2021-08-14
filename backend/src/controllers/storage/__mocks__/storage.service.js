const storageService = jest.mock('./storage.service');

let mockData;

storageService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

storageService.__setMockData = data => mockData = data;

module.exports = storageService;
