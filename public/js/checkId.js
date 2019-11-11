// function checkID() {
//     var id = document.getElementById("psnid").value;
//     tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
//     A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
//     A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
//     Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

//     if (id.length != 10) {
//         return document.getElementById("psnid_error_msg").innerHTML = "*請填寫正確格式!";
//     }
//     else {
//         i = tab.indexOf(id.charAt(0));
//         if (i == -1) {
//             return document.getElementById("psnid_error_msg").innerHTML = "*身分證字號開頭應為大寫英文!";
//         }
//     };

//     sum = A1[i] + A2[i] * 9;
//     for (i = 1; i < 10; i++) {
//         v = parseInt(id.charAt(i));
//         if (isNaN(v)) {
//             return document.getElementById("psnid_error_msg").innerHTML = "*身份證字號格式錯誤：後九碼應為數字";
//         }
//         sum = sum + v * Mx[i];
//     }
//     if (sum % 10 != 0) {
//         return document.getElementById("psnid_error_msg").innerHTML = "*身份證字號驗證錯誤";
//     }
//     return true;

// };





















// // function checkID() {
// //     var id = document.getElementById("psnid").value;
// //     tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
// //     A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
// //     A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
// //     Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

// //     if (id.length != 10) { return alert("身分證字號應為10碼!"); }
// // //check id字串長度不等於10，跳出警告視窗
// //     else {
// //         i = tab.indexOf(id.charAt(0));
// // //確定tab字串內是否有id傳回的字元(傳回id裡，第0位的字元)，如果是，回傳1，反之回傳-1
// //         if (i == -1) return alert("身分證字號開頭應為大寫英文!");
// //         //如果回傳的數值等於-1，回傳false
// //     }

// //     sum = A1[i] + A2[i] * 9;
// //     for (i = 1; i < 10; i++) {
// //         v = parseInt(id.charAt(i));
// //         if (isNaN(v)) return alert("身份證字號格式錯誤：後九碼應為數字");
// //         sum = sum + v * Mx[i];                
// //     }
// //     if (sum % 10 != 0) return alert("身份證字號驗證錯誤");
// //     return alert("格式正確!謝謝");
// // };