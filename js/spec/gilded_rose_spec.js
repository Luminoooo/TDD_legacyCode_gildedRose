describe("Gilded Rose", function() {

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    items = [ new Item("testItem", 1, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(19);
    update_quality();
    expect(items[0].quality).toEqual(17);
  });

  it("The Quality of an item is never negative", function() {
    items = [ new Item("testItem", 1, 5) ];
    for(var i = 0; i < 4; i++){
      update_quality();
    }
    expect(items[0].quality).toEqual(0);
  });

  it("'Aged Brie' actually increases in Quality the older it gets", function() {
    items = [ new Item("Aged Brie", 10, 5) ];
    update_quality();
    expect(items[0].quality).toEqual(6);
  });

  it("The Quality of an item is never more than 50", function() {
    items = [ new Item("Aged Brie", 10, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("'Sulfuras', being a legendary item, never has to be sold or decreases in Quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(0);
  });

  it("'Backstage passes' increases in Quality as it's SellIn value approaches", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    for(var i = 0; i < 5; i++){
      update_quality();
    }
    expect(items[0].quality).toEqual(25);
    for(var i = 0; i < 5; i++){
      update_quality();
    }
    expect(items[0].quality).toEqual(35);
    for(var i = 0; i < 5; i++){
      update_quality();
    }
    expect(items[0].quality).toEqual(50);
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("'Conjured' items degrade in Quality twice as fast as normal items", function() {
    items = [ new Item("Conjured Mana Cake", 3, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(18);
    for(var i = 0; i < 3; i++){
      update_quality();
    }
    expect(items[0].quality).toEqual(10);
  });

});