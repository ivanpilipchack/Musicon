$(document).ready(() => {
    $('.instrument').on('mouseenter', () => {
        $(event.currentTarget).find('del').addClass('addDel');
    });
    $('.instrument').on('mouseenter', () => {
        $(event.currentTarget).find('.sale').show();
    });
    $('.contact img').on('mouseenter', () => {
        $(event.currentTarget).addClass('addcontact');
        $(event.currentTarget).siblings('#icon_show').show();
    }).on('mouseleave', () => {
        $(event.currentTarget).removeClass('addcontact');
        $(event.currentTarget).siblings('#icon_show').hide();
    })

})