export interface Rent_item {
  return_date: string;
  cost: number;
  expected_date: string;
  comment: string;
  person: string;
  obj: string;
  date: string;
  id: number;

}

const Rented_list: Rent_item[] = [
  {
    return_date: '',
    cost: 0,
    expected_date: '24.06.2022',
    comment: 'koos täkujuhtmetega',
    person: '"Ainar Lillemaa',
    obj: 'Auto akulaadija NOCCO',
    date: '05.04.2022',
    id: 0
  },
  {
    return_date: '',
    cost: 0,
    expected_date: '21.05.2022',
    comment: 'plus 2 akut ja laadija',
    person: 'Jaan Saviir',
    obj: 'Akudrell makita',
    date: '05.05.2022',
    id: 1
  },
  {
    return_date: '',
    cost: 0,
    expected_date: '24.06.2028',
    comment: '',
    person: 'Karu pepu',
    obj: 'Keevitusaparaat',
    date: '05.04.2022',
    id: 2
  },
  {
    return_date: '',
    cost: 0,
    expected_date: '15.05.2022',
    comment: '',
    person: 'naaber',
    obj: 'kruvikeerajate otsikute komplekt',
    date: '09.05.2022',
    id: 3
  }


];

export const getRented = () => Rented_list;

export const getRent = (id: number) => Rented_list.find(m => m.id === id);
