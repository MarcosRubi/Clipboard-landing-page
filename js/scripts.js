window.onload = () => {
    // SECCION BANNER
    const bannerImg = document.querySelector(".banner img");
    const bannerTitle = document.querySelector(".banner h1");
    const bannerDescription = document.querySelector(".banner p");
    const bannerBtnGreen = document.querySelector(".banner .btn-green");
    const bannerBtnBlue = document.querySelector(".banner .btn-blue");

    // SECCION SNIPPETS
    const snippetsTitle = document.querySelector('.snippets h2')
    const snippetsDescription = document.querySelector('.snippets .text-center > p')
    const snippetsImg = document.querySelector('.snippets img')
    const snippetsCards = document.querySelectorAll('.snippets .card')
    
    // SECCION DEVICES
    const devicesTitle = document.querySelector('.devices h2')
    const devicesDescription = document.querySelector('.devices p')
    const devicesImg = document.querySelector('.devices img')
    
    // SECCION WORKFLOW
    const workflowTitle = document.querySelector('.workflow h2')
    const workflowDescription = document.querySelector('.workflow .text-center > p')
    const workflowCards = document.querySelectorAll('.workflow .card')
    
    //SECCION IMAGES-CONTAINER
    const imagesContainer = document.querySelectorAll('.images-container img')

    // SECCION DOWNLOAD
    const downloadTitle = document.querySelector('.download h2')
    const downloadDescription = document.querySelector('.download p')
    const downloadBtnGreen = document.querySelector(".download .btn-green");
    const downloadBtnBlue = document.querySelector(".download .btn-blue");
    
    // FOOTER
    const footerLogo = document.querySelector("footer .logo");
    const footerLinks1 = document.querySelector("footer .links-1");
    const footerLinks2 = document.querySelector("footer .links-2");
    const footerLinks3 = document.querySelector("footer .links-3");
    const footerSocialIcons = document.querySelector("footer .social-icons");
    const footerAttribution = document.querySelector("footer .attribution");

    const startAnimation = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    };

    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    });

    observer.observe(bannerImg);
    observer.observe(bannerTitle);
    observer.observe(bannerDescription);
    observer.observe(bannerBtnGreen);
    observer.observe(bannerBtnBlue);

    observer.observe(snippetsImg);
    observer.observe(snippetsTitle);
    observer.observe(snippetsDescription);
    snippetsCards.forEach(cardItem => {
        observer.observe(cardItem)
    });

    observer.observe(devicesTitle)
    observer.observe(devicesDescription)
    observer.observe(devicesImg)

    observer.observe(workflowTitle);
    observer.observe(workflowDescription);
    workflowCards.forEach(cardItem => {
        observer.observe(cardItem)
    });
    
    imagesContainer.forEach(image => {
        observer.observe(image)
    });

    observer.observe(downloadTitle)
    observer.observe(downloadDescription)
    observer.observe(downloadBtnGreen)
    observer.observe(downloadBtnBlue)
    
    observer.observe(footerLogo)
    observer.observe(footerLinks1)
    observer.observe(footerLinks2)
    observer.observe(footerLinks3)
    observer.observe(footerSocialIcons)
    observer.observe(footerAttribution)
};
