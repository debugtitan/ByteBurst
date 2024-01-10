$(document).ready(()=>{
    //NAVBAR
    
    $('#explore').click(() => {
        $(".navbar").css('width', '100%')
        $("#toggle").hide()
        $(".logo").hide()
    })

    $("#toggle-close").click(() => {
        $(".navbar").css('width', '0')
    })
})