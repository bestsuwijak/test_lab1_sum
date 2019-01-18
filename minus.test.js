const minus = require('./minus');

test('50 - 50 เท่ากับ 0', ()=> {
    expect(minus(50,50)).toBe(0)
  })

  test('90 - 6 เท่ากับ 84', ()=>{
      expect(minus(90,6)).toBe(84)
  })

  test('8 - 10 เท่ากับ -2', ()=> {
      expect(minus(8,10)).toBe(-2)
  })

  test('44 - 10 เท่ากับ 34', ()=> {
      expect(minus(44,10)).toBe(34)
  })

  test('1000 - 5 เท่ากับ 995', ()=> {
      expect(minus(1000,5)).toBe(995)
  })