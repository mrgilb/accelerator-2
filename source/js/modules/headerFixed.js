if (document.querySelector('.body-page')) {
  const body = document.querySelector('.body-page');

  if (document.querySelector('.page-header')) {
    const header = document.querySelector('.page-header');
    const headerHeight = header.clientHeight;

    const onScrollBody = ()=> {
      const scroll = window.scrollY;

      if (scroll > headerHeight) {
        header.classList.add('page-header--fixed');
        body.style.paddingTop = headerHeight + 'px';
      } else {
        header.classList.remove('page-header--fixed');
        body.style.paddingTop = 0;
      }
    };

    window.addEventListener('scroll', onScrollBody);
  }
}

