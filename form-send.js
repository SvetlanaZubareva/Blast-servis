"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form);
        // formData.append();

        
        let error = formValidate(form);

        if (error === 0) {
            let respons = await fetch("sendmail.php", {
                method: "POST",
                body: formData,
            });
            if (respons.ok) {
                let result = await respons.json();
                alert(result.message);
                formPreview.innerHTML = "";
                form.reset();
            } else {
                alert("ERROR")
            }
        }

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelector("._req");
    }
});
