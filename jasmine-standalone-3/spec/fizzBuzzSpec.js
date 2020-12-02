describe('fizzBuzz', function() {
  it('returns fizzbuzz if divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  });

  it('returns Fizz if divible by 3', function() {
    expect(fizzBuzz(3)).toEqual('Fizz')
  });

  it('returns Buzz if divisible by 5', function(){
    expect(fizzBuzz(5)).toEqual('Buzz')
  });

  it('returns the number if not divisible by 3 or 5', function() {
    expect(fizzBuzz(1)).toEqual(1)
  });
});
