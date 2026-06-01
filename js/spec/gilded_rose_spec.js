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

});