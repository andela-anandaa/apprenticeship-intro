const should = require('chai').should(),
      expect = require('chai').expect,
      supertest = require('supertest'),
      api = supertest('http://localhost:8000');

describe('User', () => {
    it('should get all users with a 200 response', (done) => {
        api.get('/api/users')
           .set('Accept', 'application/json')
           .expect(200)
           .end((err, res) => {
                expect(err).to.equal(null);
                expect(res.body.length).to.be.above(0);
                done();
           });
    });
    it('should create a new user', (done) => {
        api.post('/api/users')
            .set('Accept', 'application/json')
            .send({
                username: 'Ash',
                fname: 'Ashley',
                lname:'Wanjiru',
                email: 'ash.wanjiru@gmail.com'
            })
            .expect(201)
            .end((err, res) => {
                expect(res.body.username).to.equal('Ash');
                expect(res.body.fname).to.equal('Ashley');
                expect(res.body.lname).to.equal('Wanjiru');
                done();
            });
    });
    it('should retrieve a single user', (done) => {
        api.get('/api/users/1')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.body.username).to.equal('ashley');
                done();
            });
    });
    it("should update a specified user's details", (done) => {
        api.put('/api/users/1')
            .set('Accept', 'application/json')
            .send({
                username: 'Joan',
            })
            .expect(200)
            .end((err, res) => {
                expect(res.body.fname).to.equal('joan');
                expect(res.body.username).to.equal('Joan');
                done();
            });
    });
    it('Should delete a specified user', (done) => {
        api.delete('/api/users/1')
            .set('Accept', 'application/json')
            .expect(204)
            .end((err, res) => {
                expect(typeof res.body).to.equal('object');
                done();
            });
    });
});
