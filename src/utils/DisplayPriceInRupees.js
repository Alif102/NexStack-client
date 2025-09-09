export const DisplayPriceInRupees = (price)=>{
   return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    currencyDisplay: 'narrowSymbol', // forces ৳ instead of BDT
    minimumFractionDigits: 0,        // removes .00
  }).format(price);
};