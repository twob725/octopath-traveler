//檢查姓名是否為中文
// function checkName1() {
//     var userName1 = document.getElementById("username1").value;

//     var nameRegxp = /^[\u4e00-\u9fa5]+$/i;
//     if (nameRegxp.test(userName1) != true) {
//         document.getElementById("name_error_msg").innerHTML = "*請填寫中文姓名";
//         return true;
//     } else {
//         document.getElementById("name_error_msg").innerHTML = "";
//         return false;
//     }   
// };

// function checkName2(){
//     var userName2 = document.getElementById("username2").value;
//     var nameRegxp = /^[\u4e00-\u9fa5]+$/i;

//     if (nameRegxp.test(userName2) != true) {
//         document.getElementById("name_error_msg").innerHTML = "*請填寫中文姓名";
//         return true;
//     } else {
//         document.getElementById("name_error_msg").innerHTML = "";
//         return false;
//     }
// // }
// //檢查行動電話
// function mobilecheck() {
//     var mobilenum = document.getElementById("mobilenum").value;
//     var numberRegxp = /^09[0-9]{2}[0-9]{6}$/; //格式需為09XXXXXXXX
//     if (numberRegxp.test(mobilenum) != true) {
//         document.getElementById("number_error_msg").innerHTML = "*請填寫正確號碼格式";
//         return true;
//     }
//     else {
//         document.getElementById("number_error_msg").innerHTML = "";
//         return false;
//     }
// }
// //檢查email
// function checkMail() {
//     var email = document.getElementById("email").value;
//     var emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
//     if (emailRegxp.test(email) != true) {
//         document.getElementById("email_error_msg").innerHTML = "*請填寫正確email格式";
//         return true;
//     }
//     else {
//         document.getElementById("number_error_msg").innerHTML = "";
//         return false;
//     }
// }