function toggleDark(){
    document.body.classList.toggle("dark");
}

/* LANGUAGE */
let lang="en";

function toggleLang(){
    if(lang==="en"){
        document.getElementById("title").innerText="সবার জন্য স্বাধীনতা";
        document.getElementById("subtitle").innerText="দারিদ্র্য ও ক্ষুধামুক্ত সমাজ গড়ি";
        document.getElementById("impactTitle").innerText="আমাদের প্রভাব";
        document.getElementById("p1").innerText="মানুষকে সহায়তা";
        document.getElementById("p2").innerText="স্বেচ্ছাসেবক";
        document.getElementById("p3").innerText="প্রকল্প";
        lang="bn";
    } else {
        location.reload();
    }
}

/* COPY NUMBER */
function copyNumber(number){
    navigator.clipboard.writeText(number);
    alert("Number copied: " + number);
}

/* NAV */
function scrollTop(){
    window.scrollTo({top:0, behavior:'smooth'});
}

function goHome(){
    window.location.href="index.html";
}
