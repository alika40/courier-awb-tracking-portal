const STATUS = {
    DELIVERED: "Delivered",
    PENDING: "In Transit",
    DOCUMENTED: "Docmented"
}

const ACCOUNT_TYPE = {
    CORPORATE: "Corporate Account",
    INDIVIDUAL: "Individual Account",
}

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    first_name: 'Anthony',
    last_name: 'Alika',
    email: 'anthony2024@rocketmail.com',
    password: 'SuperUser2024#',
    created_at: '2024-06-15',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6443b',
    first_name: 'John',
    last_name: 'Doe',
    email: 'alikaanthony2024@gmail.com',
    password: 'SuperUser2024#',
    created_at: '2024-06-25',
  },
];


const customers = [
   {
    customer_id: 'd6e15728-9fe1-4966-8c5b-ea44a9bd81aa',
    name: 'Others',
    email: 'others@plc.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-15",
    image_url: '/customers/others.png',
  },
    {
    customer_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Glo Plc',
    email: 'glo@plc.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-16",
    image_url: '/customers/glo-plc.png',
  },
  {
    customer_id: '3958dc9e-712f-4377-85e9-fec4b6a644ba',
    name: 'Fidelity Bank Plc',
    email: 'fidelity@bank.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-17",
    image_url: '/customers/fidelity-bank.png',
  },
  {
    customer_id: '3958dc9e-742f-4377-85e9-fec4b6a644ca',
    name: 'Ikeja Electricity',
    email: 'ikeja@electricity.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-18",
    image_url: '/customers/ikeja-electricity.png',
  },
  {
    customer_id: '3958dc9e-737f-4377-85e9-fec4b6a644da',
    name: 'UBA Plc',
    email: 'uba@bank.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-19",
    image_url: '/customers/uba.png',
  },
  {
    customer_id: '50ca3e18-62cd-11ee-8c99-0242ac1200e2',
    name: 'Wema Bank Plc',
    email: 'wema@bank.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-20",
    image_url: '/customers/wema-bank.png',
  },
  {
    customer_id: '3958dc9e-787f-4377-85e9-fec4b6a644fa',
    name: 'Google Inc',
    email: 'google@inc.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-21",
    image_url: '/customers/google-inc.png',
  },
  {
    customer_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'MTN Nig Plc',
    email: 'mtn@nig.com',
    phone: "0806 000 6000",
    reg_date: "2024-04-22",
    image_url: '/customers/mtn-nig.png',
  },
];


const awbs = [
  {
    id: "1001dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[0].customer_id,
    awb_num: '0001234',
    sender: 'Michael',
    receiver: 'Anthony',
    receiver_address: "2, kofo Abayomi street",
    destination: 'Aba',
    item_description: 'Document',
    weight: 20,
    created_at: '2024-09-03',
    due_date: '2024-06-23',
    status: STATUS.DOCUMENTED,
    remark: null,
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: null,
    delivery_date: null,
    delivery_time: null
  },
  {
    id: "1002dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[1].customer_id,
    awb_num: '0001235',
    sender: "Alika",
    receiver: 'Benjamin',
    receiver_address: "12, Oba Abayomi street",
    destination: 'Benin City',
    item_description: 'Document',
    weight: 8,
    created_at: '2024-10-24',
    due_date: '2024-03-24',
    status: STATUS.DOCUMENTED,
    remark: null,
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: null,
    delivery_date: null,
    delivery_time: null
  },
  {
    id: "1003dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[0].customer_id,
    awb_num: '0001236',
    sender: "Joseph",
    receiver: 'Celin',
    receiver_address: "20, Michael Abayomi street",
    destination: 'Calabar',
    item_description: 'Document',
    weight: 20.5,
    created_at: '2024-11-24',
    due_date: '2024-08-20',
    status: STATUS.DELIVERED,
    remark: null,
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: 'cythia',
    delivery_date: '2024-07-03',
    delivery_time: '02:10'
  },
  {
    id: "1004dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[6].customer_id,
    awb_num: '0001237',
    sender: "Anthony",
    receiver: 'Daniel',
    receiver_address: "121, Kane Abayomi street",
    destination: 'Asaba',
    item_description: 'Document',
    weight: 1,
    created_at: '2024-02-24',
    due_date: '2024-03-20',
    status: STATUS.PENDING,
    remark: "There will be a sligth delay in delivery due some unforseen circumstances. we're sorry for the delay.",
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: null,
    delivery_date: null,
    delivery_time: null
  },
  {
    id: "1005dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[5].customer_id,
    awb_num: '0001238',
    sender: "John",
    receiver: 'Ifeoluwa',
    receiver_address: "222, James Abayomi street",
    destination: 'Lagos',
    item_description: 'Document',
    weight: 1.0,
    created_at: '2024-03-24',
    due_date: '2024-03-20',
    status: STATUS.DELIVERED,
    remark: null,
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: 'Ifeanyi',
    delivery_date: '2024-05-03',
    delivery_time: '04:10'
  },
  {
    id: "1006dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[0].customer_id,
    awb_num: '0001239',
    sender: "Mike",
    receiver: 'Gani',
    receiver_address: "211, Ganiyu Abayomi street",
    destination: 'Ibadan',
    item_description: 'Document',
    weight: 8.80,
    created_at: '2024-03-20',
    due_date: '2024-02-03',
    status: STATUS.PENDING,
    remark: "There will be a sligth delay in delivery due some unforseen circumstances. we're sorry for the delay.",
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: null,
    delivery_date: null,
    delivery_time: null
  },
  {
    id: "1007dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[6].customer_id,
    awb_num: '0001240',
    sender: "James",
    receiver: 'Henry',
    receiver_address: "2, Chike Abayomi street",
    destination: 'Enugu',
    item_description: 'Document',
    weight: 50.50,
    created_at: '2024-06-24',
    due_date: '2024-03-24',
    status: STATUS.DELIVERED,
    remark: null,
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: 'Hanna',
    delivery_date: '2024-05-24',
    delivery_time: '03:10:25'
  },
  {
    id: "1008dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[6].customer_id,
    awb_num: '0001241',
    sender: "Ann",
    receiver: 'Irene',
    receiver_address: "2, Irene Abayomi street",
    destination: 'Onitsha',
    item_description: 'Document',
    weight: 8.0,
    created_at: '2024-03-20',
    due_date: '2024-07-23',
    status: STATUS.DELIVERED,
    remark: null,
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: 'Irene',
    delivery_date: '2024-09-27',
    delivery_time: '04:10'
  },
  {
    id: "1009dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[4].customer_id,
    awb_num: '0001242',
    sender: "Tracey",
    receiver: 'James',
    receiver_address: "21, John Abayomi street",
    destination: 'PHC',
    item_description: 'Document',
    weight: 21,
    created_at: '2024-09-23',
    due_date: '2024-06-11',
    status: STATUS.PENDING,
    remark: "There will be a sligth delay in delivery due some unforseen circumstances. we're sorry for the delay.",
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: null,
    delivery_date: null,
    delivery_time: null
  },
  {
    id: "1010dc9e-787f-4377-85e9-fec4b6a644fa",
    customer_id: customers[6].customer_id,
    awb_num: '0001243',
    sender: "Heaven",
    receiver: 'Kan',
    receiver_address: "112, Moloney Abayomi street",
    destination: 'Warri',
    item_description: 'Document',
    weight: 12,
    created_at: '2024-02-23',
    due_date: '2024-03-19',
    status: STATUS.PENDING,
    remark: "There will be a sligth delay in delivery due some unforseen circumstances. we're sorry for the delay.",
    // Show the fields below only when the delivery is made or status is marked delivered
    delivered_to: null,
    delivery_date: null,
    delivery_time: null
  },

];

module.exports = {
  users,
  customers,
  awbs,
  STATUS,
  ACCOUNT_TYPE
};