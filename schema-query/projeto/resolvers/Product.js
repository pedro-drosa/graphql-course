export default {
  discountPrice: (obj) => {
    if (obj.percentageDiscount) {
      return obj.price - (obj.price * obj.percentageDiscount);
    }
    return obj.price;
  },
};
