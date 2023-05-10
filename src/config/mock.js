const car = {
    name:'car',
    range: ['1.000 - 20.000'],
    coverage: ["Accident", "Theft", "Natural Disaster", "Special Cover (roadside assistance, glass insurance...)"],
    priceLimit: {
        max: 20000,
        min: 1000
    }
};
const house = {
    name: 'house',
    range: ['40.000 - 250.000'],
    coverage: [
        "Fire",
        "Thunder",
        "Explosion",
        "Storm and hail",
        "Snow",
        "Flood",
        "Theft",
        "Earthquake",
        "Glass breakage and installation..."
    ],
    priceLimit: {
        max: 250000,
        min: 40000
    }
};
const health = {
    name: "health",
    range: ['1.000 - 200.000'],
    coverage: ["Outpatient treatment", "Hospital treatment", "Systematic revie", "Examinations in pregnancy.."],
    priceLimit: {
    max: 200000,
    min: 1000
}
};
const life = {
    name: "life",
    range: ['1.000 - 200.000'],
    coverage: ["Severe disease", "Death", "Permanent disability", "Surgical intervention"],
    priceLimit: {
      max: 200000,
      min: 1000
    }
};
const travel = {
    name: "travel",
    range: ['1.000 - 10.000'],
    coverage: ["Medical expenses", "Transport", "Other cover"],
    priceLimit: {
        max: 10000,
        min: 1000
    }
};
const jewelry = {
    name: "jewelry",
    range: ['1.000 - 20.000'],
    coverage: ["Shipping", "Theft", "Loss"],
    priceLimit: {
        max: 20000,
        min: 1000
    }
};
const business = {
    name: "business",
    range: ['100.000 - 1.000.000'],
    coverage: ["Shipping", "Theft", "Cyber", "Credit risk", "Business property"],
    priceLimit: {
        max: 1000000,
        min: 100000
    }
};
const insurance = [car, house, health, life, travel, jewelry, business]

const agentTitle = {
    name:'title',
    options: [
        "Insurance claims clerk",
        "Insurance field inspector",
        "Insurance investigator",
        "Claims examiner",
        "Claims adjuster",
        "Insurance sales agent",
        "Insurance appraiser",
        "Insurance broker",
        "Financial analyst",
        "Loss control consultant",
        "Actuary",
        "Risk manager",
        "Insurance underwriter"
      ]
}
const symbol = '€';

const item_price = {
    key: "item_price",
    type: "number",
    label: "Enter estimated price of the item:"
};
    
export {
    car,house,health,life,travel,jewelry,business,
    insurance,
    agentTitle,
    symbol,
}