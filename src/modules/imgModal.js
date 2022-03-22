const imgModal = () => {
    const modal = document.getElementById('myModal');
    const textCenter = document.querySelector('.text-center');
    let modalImg = document.getElementById("img01");
    const imgs = textCenter.querySelectorAll('.sertificate-document');

    imgs.forEach(img => {
        textCenter.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = "block";
            modalImg.src = img.href;
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = "none";
    });
};

export default imgModal;