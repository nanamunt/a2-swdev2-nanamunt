document.getElementById("booking-form").addEventListener("submit", function(event) {
    // ดึงค่าจากฟอร์ม
    let contactName = document.getElementById("contact-name").value.trim();
    let contactNumber = document.getElementById("contact-number").value.trim();
    let travelerCount = document.getElementById("traveler-count").value;
    let buyFlightTicket = document.getElementById("buy-flight-ticket").checked;

    if (contactName === "" || contactNumber === "") {
        alert("กรุณากรอกชื่อผู้ติดต่อและเบอร์ติดต่อ");
        event.preventDefault();
        return;
    }
    travelerCount = parseInt(travelerCount);
    if (isNaN(travelerCount) || travelerCount < 1 || travelerCount > 15) {
        alert("กรุณากรอกจำนวนผู้ร่วมเดินทางระหว่าง 1 ถึง 15");
        event.preventDefault();
        return;
    }

    // ถ้าเลือกซื้อตั๋วเครื่องบินเอง ให้แสดง Confirmation Box
    if (buyFlightTicket) {
        let confirmBuy = confirm("ต้องการซื้อตั๋วเครื่องบินเองใช่หรือไม่?");
        if (!confirmBuy) {
            event.preventDefault();
            return;
        } else {
            alert("คุณเลือกซื้อตั๋วเครื่องบินเอง");
        }
    }
});
