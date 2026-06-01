describe("Gilded Rose", function() {

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    items = [ new Item("testItem", 1, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(19);
    update_quality();
    expect(items[0].quality).toEqual(17);
  });
});
