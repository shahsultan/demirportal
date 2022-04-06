/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    //  $('.btn-sidebar-toggle') 
    // init on mobile
    $(function () {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $('body , #navigation-sidebar').addClass('sidebar-collapsed');
        } else {
            $('body').removeClass('sidebar-collapsed');
        }

        $(window).resize(function () {
            if (window.matchMedia('(max-width: 991px)').matches) {
                $('body , #navigation-sidebar').addClass('sidebar-collapsed');
            } else {
                $('body , #navigation-sidebar').removeClass('sidebar-collapsed');
            }
        })
    })

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    //  $('.btn-sidebar-toggle') 
    // init
    $(function () {
        $('.btn-sidebar-toggle').on('click', function (e) {
            e.preventDefault();
            $('body , #navigation-sidebar').toggleClass('sidebar-collapsed');
        })
        $('.navbar-logo').on('click', function (e) {
            if ($('body , #navigation-sidebar').hasClass('sidebar-collapsed')) {
                e.preventDefault();
                $('body , #navigation-sidebar').toggleClass('sidebar-collapsed');
            }
        })
    })




    // btnFormGroupCollapsedToggle
    // FormGroupCollapsed-item
    $(function () {
        if ($('.btnCollapsedToggle').length && $('.collapsed-item').length) {
            $('.btnCollapsedToggle').on('click', function (e) {
                e.preventDefault();
                if ($(this).closest('.collapsed-group').find('.collapsed-item').slideToggle()) {
                    $(this).find('.bi').toggleClass('bi-chevron-down bi-chevron-up');
                }
            });
        }
    });



    // Select2
    // for select item change
    $(function () {
        if ($(".select-2-init").length) {
            $(".select-2-init").select2({
                width: 'resolve' // need to override the changed default
            });
        }
    });

    // datepicker init
    $(function () {
        if ($('.datepicker').length) {
            $('.datepicker').datepicker({
                dateFormat: 'mm yy',
                changeMonth: true,
                changeYear: true,
            });
        }
    });



    // nested-preview-table show/hide
    $(function () {
        if ($('#nested-preview-table').length) {
            $('#nested-preview-table').on('click', '.btn-tr-dropdown', function () {
                if ($(this).closest('.table-nested').find('.dropdown-tr').toggle()) {
                    $(this).find('.ni').toggleClass('ni-plus-sm ni-minus-sm');
                }
            });
        }
    });



    // user roles dropdown
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }



    //close model item
    $(function () {
        if ($('.selectt').length) {
            $('.selectt').on('click', '.forClose', function () {
                $(this).closest('.selectt').remove();
            });
        }
    });

    $('input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();

    });



    //table popup
    var $checkboxes = $('.devel-generate-content-form  input[type="checkbox"]');

    $checkboxes.change(function () {
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        $('#count-checked-checkboxes').text(countCheckedCheckboxes);
        $('#count-checked-checkboxes2').text(countCheckedCheckboxes);

        if ($checkboxes.not(':checked').length) {
            $(".checkPopUp").hide();
        }
        if (countCheckedCheckboxes < 2) {
            // alert("i am gater then 1")
            $(".checkPopUp").show();
            $(".checkPopUp2").hide();
        } else {
            $(".checkPopUp2").show();
            $(".checkPopUp").hide();
        }

    });


    // table popup close
    $(function () {
        if ($('.tableAction').length) {
            $('.tableAction').on('click', '.closeWrapper', function () {
                $(this).closest('.tableAction').remove();
            });
        }
    });



    // //for menu active class
    // $('.dropdown-menu li').on('click', function (event) {
    //     $(this).siblings('.sub-active').removeClass('sub-active');
    //     $(this).addClass('sub-active');
    //     event.preventDefault();
    // });




});
