// function loadDate1() {
//     var now = new Date();
//     var year = now.getYear();//获得年份，不过是1900年到现在的数值  
//     year = year + 1900 - 18;//因为要4位数字年份又要求使用者大于18岁  
//     var yearList = document.getElementById("yearlist1");
//     for (var i = 0; i < (year - (year - 80)); i++) {//为年份下拉菜单倒序输出年份  
//         var addYear = year - i;
//         yearList.options[i] = new Option(addYear, addYear);
//     }
//     yearChange1();

// }

$(document).ready(function loadDate1() {
    var now = new Date();
    var year = now.getYear();//获得年份，不过是1900年到现在的数值  
    year = year + 1900 - 18;//因为要4位数字年份又要求使用者大于18岁  
    var yearList = document.getElementById("yearlist1");
    for (var i = 0; i < (year - (year - 80)); i++) {//为年份下拉菜单倒序输出年份  
        var addYear = year - i;
        yearList.options[i] = new Option(addYear, addYear);
    }
    yearChange1();

});


/** 
 *  年份改变，没啥好说的，月日下拉菜单清空重排就行了 
 */
function yearChange1() {
    var monthList = document.getElementById("monthlist1");
    monthList.innerHTML = "";
    for (var i = 0; i < 12; i++) {
        monthList.options[i] = new Option(i + 1, i + 1);
    }
    var dayList = document.getElementById("daylist1");
    dayList.innerHTML = "";
    for (var i = 0; i < 31; i++) {
        dayList.options[i] = new Option(i + 1, i + 1);
    }
}

/** 
 *  月份改变 
 */
function monthChange1(m) {//m为改变的月份值  
    var year = parseInt(document.getElementById("yearlist1").value);//转为整形  
    var day = 31;
    switch (parseInt(m))//做一下月份的判断，为日期复制  
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: day = 31; break;
        case 2: day = 28; break;
        case 4:
        case 6:
        case 9:
        case 11: day = 30; break;
    }
    if (day == 28)//二月份的情况下  
    {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))//闰年公式，判断是否为闰年  
        {
            day = 29;
        }
    }
    var dayList = document.getElementById("daylist1");
    dayList.innerHTML = "";
    for (var i = 0; i < day; i++) {
        dayList.options[i] = new Option(i + 1, i + 1);
    }
}








