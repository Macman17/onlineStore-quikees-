
let mockCatalog = [
    {
        _id: "65756",
        title: "Chocolate Chip",
        category: "1",
        unitPrice: 3.44,
        image: "img6.jpg"
    },
    {
        _id: "65464",
        title: "Cookies Sanwich",
        category: "1",
        unitPrice: 5.32,
        image: "pic2.jpg"
    },
    {
        _id: "54343",
        title: "Macroons                      ",
        category: "1",
        unitPrice: 7.00,
        image: "pic3.jpg"
    },
    {
        _id: "35435",
        title: "Fruit Cookies                 ",
        category: "1",
        unitPrice: 5.01,
        image: "pic4.jpg"
    },
];

class DataService {

    getCatalog() {


        return mockCatalog;

    }
};

export default DataService;