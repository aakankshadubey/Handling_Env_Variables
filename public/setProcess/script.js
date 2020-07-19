$(() => {

    $("#getProcess").click(() =>  {

        $.post("/setEnvironment/getDetails", {process_name : $("#process_name_details").val()} , (obj) => {

           if(obj.success)  {
                $("#text").html(`
                <h2> Process Details </h2>
                <br>
                <h3> Process Name :${obj.process_name} </h3>
                <br>
                <h3> Key Value :${obj.key_val} </h3>
                <br>
            `)
        }

        else {
            $("#text").html(`
                <h2> No Such Process Found </h2>
            `)
        }

        })

    })

    // $("$editProcess").click(() => {


    // })

})