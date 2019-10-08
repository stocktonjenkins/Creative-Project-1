/*global Vue*/
/*global gp_currencySymbols*/
/*global conversionOptions*/
let app = new Vue({
    el: "#root",
    data: {
        country: '',
        conversionOptions: [
        { currency: "United States Dollars $", code:"USD" }, 
        { currency: "Algeria Dinars DA", code:"DZD" },
        { currency: "Argentina Pesos $", code:"ARS" },
        { currency: "Australia Dollars $", code:"AUD" },
        { currency: "Canada Dollars $", code:"CAD" },
        { currency: "Chile Pesos $", code:"CLP" },
        { currency: "China Yuan Renminbi 元", code:"CNY" },
        { currency: "Costa Rica Colones ₡", code:"CRC" },
        { currency: "Euro €", code:"EUR" },
        { currency: "Hong Kong Dollars 元", code:"HKD" },
        { currency: "India Rupees ₹", code:"INR" },
        { currency: "Japan Yen ¥", code:"JPY" },
        { currency: "North Korean Won ₩<", code:"KPW" },
        { currency: "Russia Rubles руб<", code:"RUB" },
        { currency: "United Kingdom Pounds £", code:"EUR" },
        
    ]

    }
});
