const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
const jsonSchema = require('chai-json-schema');
const { itemSchema } = require('./schema/PraxisItemSchema.schema');

const { expect } = chai;
chai.use(jsonSchema);

const PraxisURL = 'http://54.162.70.124:8081/api';

describe('Test Create Item Endpoint', () => {

  before(async () => {
    const items = await agent.get(`${PraxisURL}/items`);
    if (items.body.length > 0) {
      items.body.forEach(async (item) => { await agent.delete(`${PraxisURL}/items/${item.id}`); });
    }
  });

  it('Successful Creation', async () => {
    const item = {
      name: 'Sugar',
      sellIn: 20,
      quality: 35,
      type: 'NORMAL'
    };

    const response = await agent.post(`${PraxisURL}/items`).send(item);

    expect(response.status).to.equal(statusCode.CREATED);
    expect(response.body.name).to.be.equal(item.name);
    expect(response.body.sellIn).to.be.equal(2);
    expect(response.body.quality).to.be.equal(item.quality);
    expect(response.body.type).to.be.equal(item.type);
    expect(response.body).to.be.jsonSchema(itemSchema);
  });

  it('Unsuccessful Creation for negative quality', async () => {
    const wrongItem = {
      name: 'Rice',
      sellIn: 36,
      quality: -15,
      type: 'NORMAL'
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for quality over 80', async () => {
    const wrongItem = {
      name: 'Rice',
      sellIn: 36,
      quality: 100,
      type: 'NORMAL'
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for only giving name value', async () => {
    const wrongItem = {
      name: 'Rice',
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for only giving sellIn value', async () => {
    const wrongItem = {
      sellIn: 36,
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for only giving quality value', async () => {
    const wrongItem = {
      quality: 36,
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for only giving type value', async () => {
    const wrongItem = {
      type: 'NORMAL',
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for only giving name and sellIn value', async () => {
    const wrongItem = {
      name: 'Rice',
      sellIn: 36,
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for only giving name and quality value', async () => {
    const wrongItem = {
      name: 'Rice',
      quality: 36,
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Unsuccessful Creation for only giving name and type value', async () => {
    const wrongItem = {
      name: 'Rice',
      type: 'NORMAL',
    };

    const response = await agent.post(`${PraxisURL}/items`).send(wrongItem).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Successful Creation for giving a string number by sellIn value', async () => {
    const item = {
      name: 'Sugar',
      sellIn: '20',
      quality: 35,
      type: 'NORMAL'
    };

    const sellInNumber = parseInt(item.sellIn, 10);
    const response = await agent.post(`${PraxisURL}/items`).send(item);

    expect(response.status).to.equal(statusCode.CREATED);
    expect(response.body.name).to.be.equal(item.name);
    expect(response.body.sellIn).to.be.equal(sellInNumber);
    expect(response.body.quality).to.be.equal(item.quality);
    expect(response.body.type).to.be.equal(item.type);
    expect(response.body).to.be.jsonSchema(itemSchema);
  });

  it('Unsuccessful Creation for giving a string TEXT by sellIn value', async () => {
    const item = {
      name: 'Sugar',
      sellIn: 'text',
      quality: 35,
      type: 'NORMAL'
    };
    
    const response = await agent.post(`${PraxisURL}/items`).send(item).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Successful Creation for giving a string number by quality value', async () => {
    const item = {
      name: 'Sugar',
      sellIn: 20,
      quality: '20',
      type: 'NORMAL'
    };

    const qualityNumber = parseInt(item.quality, 10);
    const response = await agent.post(`${PraxisURL}/items`).send(item);

    expect(response.status).to.equal(statusCode.CREATED);
    expect(response.body.name).to.be.equal(item.name);
    expect(response.body.sellIn).to.be.equal(item.sellIn);
    expect(response.body.quality).to.be.equal(qualityNumber);
    expect(response.body.type).to.be.equal(item.type);
    expect(response.body).to.be.jsonSchema(itemSchema);
  });

  it('Unsuccessful Creation for giving a string TEXT by quality value', async () => {
    const item = {
      name: 'Sugar',
      sellIn: 20,
      quality: 'text',
      type: 'NORMAL'
    };

    const response = await agent.post(`${PraxisURL}/items`).send(item).ok(() => true);

    expect(response.status).to.equal(statusCode.BAD_REQUEST);
  });

  it('Successful Creation for negative sellIn value', async () => {
    const item = {
      name: 'Sugar',
      sellIn: -20,
      quality: 35,
      type: 'NORMAL'
    };

    const response = await agent.post(`${PraxisURL}/items`).send(item);

    expect(response.status).to.equal(statusCode.CREATED);
    expect(response.body.name).to.be.equal(item.name);
    expect(response.body.sellIn).to.be.equal(item.sellIn);
    expect(response.body.quality).to.be.equal(item.quality);
    expect(response.body.type).to.be.equal(item.type);
    expect(response.body).to.be.jsonSchema(itemSchema);
  });

});
