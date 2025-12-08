function calculateElectricityBill(unit) {
    // Write your logic here
    if (unit<=100) return (unit*4.2).toFixed(1);
    else if (unit>=101 && unit<=200) return (((unit-100)*6) + (100*4.2)).toFixed(1);
    else if (unit>=201 && unit<=400) return (((unit-200)*8) + (100*4.2)
    + (100*6)).toFixed(1);
    else if (unit>401) return (((unit-400)*13) + (100*4.2)
    + (100*6) + (200*8)).toFixed(1);

}

module.exports = { calculateElectricityBill };