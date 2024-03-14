import { createInvoice } from 'easyinvoice';

var data = {
    apiKey: "free",
    mode: "development",
    images: {
        logo: "https://public.budgetinvoice.com/img/logo_en_original.png",
        background: "https://public.budgetinvoice.com/img/watermark-draft.jpg"
    },
    sender: {
        company: "Sample Corp",
        address: "Sample Street 123",
        zip: "1234 AB",
        city: "Sampletown",
        country: "Samplecountry"
    },
    client: {
        company: "Client Corp",
        address: "Clientstreet 456",
        zip: "4567 CD",
        city: "Clientcity",
        country: "Clientcountry"
    },
    information: {
        number: "2021.0001",
        date: "12-12-2021",
        dueDate: "31-12-2021"
    },
    products: [{
            quantity: 2,
            description: "Product 1",
            taxRate: 6,
            price: 33.87
        },
        {
            quantity: 4.1,
            description: "Product 2",
            taxRate: 6,
            price: 12.34
        },
        {
            quantity: 4.5678,
            description: "Product 3",
            taxRate: 21,
            price: 6324.453456
        }
    ],
    bottomNotice: "Kindly pay your invoice within 15 days.",
    settings: {
        currency: "USD",
    },
    translate: {}
};

createInvoice(data, function(result) {
    console.log('PDF base64 string: ', result.pdf);
});