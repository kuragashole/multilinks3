const links = document.querySelectorAll('#linkList li a');

links.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0056b3';
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#007bff';
    });
});

