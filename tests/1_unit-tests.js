const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

  suite('Translate to British English', () => {
    test("Translate: Mangoes are my favorite fruit. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("Mangoes are my favorite fruit.")[0],
      "Mangoes are my favourite fruit.");
      done();
    });
    test("Translate: I ate yogurt for breakfast. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("I ate yogurt for breakfast.")[0], 
      "I ate yoghurt for breakfast.");
      done();
    });
    test("Translate: We had a party at my friend's condo. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("We had a party at my friend's condo.")[0],
      "We had a party at my friend's flat.");
      done();
    });
    test("Translate: Can you toss this in the trashcan for me? to British English", (done) => {
      assert.equal(translator.toBritishEnglish("Can you toss this in the trashcan for me?")[0], 
      "Can you toss this in the bin for me?");
      done();
    });
    test("Translate: The parking lot was full. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("The parking lot was full.")[0], 
      "The car park was full.");
      done();
    });
    test("Translate: Like a high tech Rube Goldberg machine. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("Like a high tech Rube Goldberg machine.")[0], 
      "Like a high tech Heath Robinson device.");
      done();
    });
    test("Translate: To play hooky means to skip class or work. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("To play hooky means to skip class or work.")[0], 
      "To bunk off means to skip class or work.");
      done();
    });
    test("Translate: No Mr. Bond, I expect you to die. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("No Mr. Bond, I expect you to die.")[0], 
      "No Mr Bond, I expect you to die.");
      done();
    });
    test("Translate: Dr. Grosh will see you now. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("Dr. Grosh will see you now.")[0], 
      "Dr Grosh will see you now.");
      done();
    });
    test("Translate: Lunch is at 12:15 today. to British English", (done) => {
      assert.equal(translator.toBritishEnglish("Lunch is at 12:15 today.")[0], 
      "Lunch is at 12.15 today.");
      done();
    });
  });

  suite('Translate to American English', () => {
    test("Translate: We watched the footie match for a while. to American English", (done) => {});
    test("Translate: Paracetamol takes up to an hour to work. to American English", (done) => {});
    test("Translate: First, caramelise the onions. to American English", (done) => {});
    test("Translate: I spent the bank holiday at the funfair. to American English", (done) => {});
    test("Translate: I had a bicky then went to the chippy. to American English", (done) => {});
    test("Translate: I've just got bits and bobs in my bum bag. to American English", (done) => {});
    test("Translate: The car boot sale at Boxted Airfield was called off. to American English", (done) => {});
    test("Translate: Have you met Mrs Kalyani? to American English", (done) => {});
    test("Translate: Prof Joyner of King's College, London. to American English", (done) => {});
    test("Translate: Tea time is usually around 4 or 4.30. to American English", (done) => {});
  });

  suite('Highlight translation', () => {
    test('Highlight: Mangoes are my favorite fruit.', (done) => {});
    test('Highlight: I ate yogurt for breakfast.', (done) => {});
    test('Highlight: We watched the footie match for a while.', (done) => {});
    test('Highlight: Paracetamol takes up to an hour to work.', (done) => {});
  });

});
