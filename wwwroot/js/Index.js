$(function () {
    $("#helloButton").on("click", onButtonClick);
    
});

const onButtonClick = () => {
    $('.toast').toast('show');
};

