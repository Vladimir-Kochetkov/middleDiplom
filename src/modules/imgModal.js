const imgModal = () => {
    const modal = document.getElementById('myModal');
    const textCenter = document.querySelector('.text-center');
    const imgs = textCenter.querySelectorAll('.img-responsive'); //само изображение
    let modalImg = document.getElementById("img01");
    const img1 = textCenter.querySelectorAll('.sertificate-document');

    img1.forEach(imgW => {
        imgs.forEach(img => {
            imgW.addEventListener('click', (event) => {
                event.preventDefault();
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = "none";
    });
};

export default imgModal;