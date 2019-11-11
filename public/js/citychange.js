function copyAddr() {
    var addr_copy = document.getElementById("detaladdr").value;
    document.getElementById("detaladdr1").value = addr_copy;

    var city_copy = document.getElementById("city").value;
    document.getElementById("city1").value = city_copy;

    var country_copy = document.getElementById("country").value;
    document.getElementById("country1").value = country_copy;
}


// function chgSel(nowIndex) {
    

//     var city_copy = document.getElementById("city").value;
//     document.getElementById("city1").value = city_copy;

//     var addr_copy = document.getElementById("detaladdr").value;
//     document.getElementById("detaladdr1").value = addr_copy;

//     var a1 = document.getElementsByName("country");
//     for (var i = 0; i < a1.length; i++)
//         a1[i].selectedIndex = nowIndex;
// }


// function chgSel2(nowIndex) {
//     var a2 = document.getElementsByName("a2");
//     for (var i = 0; i < a2.length; i++)
//         a2[i].selectedIndex = nowIndex;

// }

function citychange() {

    var cityName = document.getElementById("city").value;
    //只要程式有變動，地區就先歸預設不選
    $("#country").empty();
    document.getElementById("country").options[0] = new Option("---請選擇---", "");
    // document.getElementById("postcode").value = "";

    //資料為2維，第一個資料是city，用來比對選入的city
    var address = [
        ["基隆市", "仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"],
        ["臺北市", "中正區100", "大同區103", "中山區104", "松山區105", "大安區106", "萬華區108", "信義區110", "士林區111", "北投區112", "內湖區114", "南港區115", "文山區116"],
        ["新北市", "萬里區207", "金山區208", "板橋區220", "汐止區221", "深坑區222", "石碇區223", "瑞芳區224", "平溪區226", "雙溪區227", "貢寮區228", "新店區231", "坪林區232", "烏來區233", "永和區234", "中和區235", "土城區236", "三峽區237", "樹林區238", "鶯歌區239", "三重區241", "新莊區242", "泰山區243", "林口區244", "蘆洲區247", "五股區248", "八里區249", "淡水區251", "三芝區252", "石門區253"]
    ];

    //導入資料，j起始為1，目的是要跳過城市名稱，只導入地區名稱
    for (var i = 0; i < address.length; i++) {
        if (address[i][0] == cityName) {
            for (var j = 1; j < address[i].length; j++) {
                document.getElementById("country").options[j] = new Option(address[i][j].slice(0, -3), address[i][j]);
            }
        }
    }
}


function citychange1() {

    var cityName1 = document.getElementById("city1").value;
    //只要程式有變動，地區就先歸預設不選
    $("#country1").empty();
    document.getElementById("country1").options[0] = new Option("---請選擇---", "");
    // document.getElementById("postcode").value = "";

    //資料為2維，第一個資料是city，用來比對選入的city
    var address = [
        ["基隆市", "仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204", "暖暖區205", "七堵區206"],
        ["臺北市", "中正區100", "大同區103", "中山區104", "松山區105", "大安區106", "萬華區108", "信義區110", "士林區111", "北投區112", "內湖區114", "南港區115", "文山區116"],
        ["新北市", "萬里區207", "金山區208", "板橋區220", "汐止區221", "深坑區222", "石碇區223", "瑞芳區224", "平溪區226", "雙溪區227", "貢寮區228", "新店區231", "坪林區232", "烏來區233", "永和區234", "中和區235", "土城區236", "三峽區237", "樹林區238", "鶯歌區239", "三重區241", "新莊區242", "泰山區243", "林口區244", "蘆洲區247", "五股區248", "八里區249", "淡水區251", "三芝區252", "石門區253"]
    ];

    //導入資料，j起始為1，目的是要跳過城市名稱，只導入地區名稱
    for (var i = 0; i < address.length; i++) {
        if (address[i][0] == cityName1) {
            for (var j = 1; j < address[i].length; j++) {
                document.getElementById("country1").options[j] = new Option(address[i][j].slice(0, -3), address[i][j]);
            }
        }
    }
}
// function countrychange() {
//     var countryCode = document.getElementById("country").value.slice(-3);
//     var city = document.getElementById("city").value;
//     var country = document.getElementById("country").value.slice(0, -3);
//     document.getElementById("postcode").value = countryCode;
//     document.getElementById("fortest").value = city + country ;
// }


