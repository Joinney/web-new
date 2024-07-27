/*--trai tim nhap red-*/

$(document).ready(function() {
    $('.heart-icon').click(function() {
      $(this).toggleClass('red');
    });
  });

/*chuyen trang san pham 12 3*/
$(document).ready(function() {
    var currentPage = 1;

    function loadPage(pageNumber) {
        // Cập nhật giao diện phân trang
        $('.pagination li').removeClass('active');
        $(`.pagination li a[data-page="${pageNumber}"]`).parent().addClass('active');
        currentPage = pageNumber;
        // Cập nhật nội dung hoặc chuyển hướng nếu cần
        console.log('Chuyển đến trang số:', pageNumber);
    }

    $('.pagination').on('click', 'a.page-number', function(e) {
        e.preventDefault();
        var pageNumber = $(this).data('page');
        loadPage(pageNumber);
    });

    $('#prev').click(function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            loadPage(currentPage - 1);
        }
    });

    $('#next').click(function(e) {
        e.preventDefault();
        loadPage(currentPage + 1);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort-select');
    const productContainer = document.querySelector('.row'); // Đảm bảo chọn đúng container chứa sản phẩm
  
    sortSelect.addEventListener('change', function() {
      const sortValue = sortSelect.value;
      const products = Array.from(productContainer.querySelectorAll('.col-sm-4'));
      
      products.sort(function(a, b) {
        const priceA = parseFloat(a.querySelector('.caption .pull-right').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.caption .pull-right').textContent.replace('$', ''));
  
        if (sortValue === 'price-asc') {
          return priceA - priceB;
        } else if (sortValue === 'price-desc') {
          return priceB - priceA;
        }
      });
  
      // Xóa các sản phẩm hiện tại
      products.forEach(product => productContainer.appendChild(product));
    });
  });
  