const customers = [
  { id: 1, name: 'ram' },
  { id: 2, name: 'hari' },
  { id: 3, name: 'krish' }
]

const uc = {
  id: 2,
  name: 'amar'
};

const updatedCustomers = customers.map(
  c => {
    return c.id === uc.id ? { ...uc } : { ...c }
  }
);

console.log(customers);
console.log(updatedCustomers)
