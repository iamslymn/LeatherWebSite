export const translations = {
    az: {
        nav: {
            shop: "Mağaza",
            collections: "Kolleksiyalar",
            about: "Haqqımızda",
            contact: "Əlaqə",
        },
        hero: {
            title: "Həqiqi Dəri, Əsl Sənət",
            subtitle: "Azərbaycanda sevgi ilə hazırlanmış əl işləri",
            cta: "Kolleksiyaya Bax",
        },
        products: {
            featured: "Seçilmiş Məhsullar",
            trending: "Trenddə Olanlar",
            bundles: "Hədiyyə Dəstləri",
            orderWhatsApp: "Sifariş üçün WhatsApp",
        },
        currency: "AZN",
    },
    ru: {
        nav: {
            shop: "Магазин",
            collections: "Коллекции",
            about: "О нас",
            contact: "Контакты",
        },
        hero: {
            title: "Настоящая кожа, истинное искусство",
            subtitle: "Сделано вручную с любовью в Азербайджане",
            cta: "Смотреть Коллекцию",
        },
        products: {
            featured: "Избранные Товары",
            trending: "В Тренде",
            bundles: "Подарочные Наборы",
            orderWhatsApp: "Заказать через WhatsApp",
        },
        currency: "AZN",
    },
};

export type Locale = keyof typeof translations;
