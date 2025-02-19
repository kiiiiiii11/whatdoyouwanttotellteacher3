// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyByZHRGZ9D19oICXDGqVrcEQvNAZNkjppQ",
    authDomain: "whatdoyouwanttotellteacher3.firebaseapp.com",
    databaseURL: "https://whatdoyouwanttotellteacher3-default-rtdb.firebaseio.com",
    projectId: "whatdoyouwanttotellteacher3",
    storageBucket: "whatdoyouwanttotellteacher3.firebasestorage.app",
    messagingSenderId: "285919090323",
    appId: "1:285919090323:web:ee96b96de8e9d4dd0c9f66",
    measurementId: "G-XE0MVZ5Y1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ฟังก์ชันส่งข้อความ
function sendMessage() {
    let nickname = document.getElementById("nickname").value;
    let studentClass = document.getElementById("class").value;
    let teaching = document.getElementById("teaching").value;
    let personality = document.getElementById("personality").value;

    if (nickname && studentClass && teaching && personality) {
        const messageRef = ref(db, 'messages/' + new Date().getTime());
        set(messageRef, { nickname, studentClass, teaching, personality });

        alert("ครูรับเรื่องแล้วจ้า!! 💖");

        document.getElementById("nickname").value = "";
        document.getElementById("class").value = "";
        document.getElementById("teaching").value = "";
        document.getElementById("personality").value = "";
    }
}

// แสดงข้อความทั้งหมด
function showMessages() {
    document.getElementById("messagesContainer").style.display = "block";
}

// ปิดกล่องข้อความ
function closeMessages() {
    document.getElementById("messagesContainer").style.display = "none";
}

window.sendMessage = sendMessage;
window.showMessages = showMessages;
window.closeMessages = closeMessages;
