import { expect } from 'chai';
import Pipe from '../lib/Pipe.js';

describe('Pipe', () => {
  const pipe = new Pipe({width: 900}, 300, 100);

  it('should be an instance of Pipe', () => {
    expect(pipe).to.be.an.instanceof(Pipe)
  })

  it('should have a width of 90', () => {
    expect(pipe.width).to.equal(90)
  })

  it('should have a x value of 900', () => {
    expect(pipe.x).to.equal(900)
  })

  it('should have a point value of true', () => {
    expect(pipe.point).to.equal(true)
  })

  it('should have a gapSize value of 300', () => {
    expect(pipe.gapSize).to.equal(300)
  })

  it('should have a padding value of 100', () => {
    expect(pipe.padding).to.equal(100)
  })
})