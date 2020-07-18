$(() => {

    $("#addProcess").click(() => {

        const process_name = $("#process_name").val()
        const key_val = $("#key_val").val()

        $.post("/addProcess/add", {
            process_name : process_name,
            key_val : key_val
        }, (obj) => {
            if(obj.success) {
                alert("Process Added")
                document.location.reload()
            } 
        })

    })

})