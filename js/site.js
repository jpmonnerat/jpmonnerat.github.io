//Funções da página principal
$("#btn").css('display', 'none');

$("#show").click(function(){
    $("#btn").show();
});

$("#hide").click(function(){
    $("#btn").hide(10);
});

$(".carousel").slick({
    infinite: true,
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 701,
            setings: {
                infinite: true,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
            }
        },
        {
            breakpoint: 699,
            setings: {
                infinite: true,
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
});


//funções da pág. de bandeiras

$("#flags").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 701,
            setings: {
                infinite: true,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
            }
        },
        {
            breakpoint: 699,
            setings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
});

//Funções da pág. sobre índices de homicídios

$(".carousel-inf").slick({
    infinite: true,
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 701,
            setings: {
                infinite: true,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
            }
        },
        {
            breakpoint: 699,
            setings: {
                infinite: true,
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
});
