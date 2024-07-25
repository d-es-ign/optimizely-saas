const bodyScrollLock = (isScrollLocked: boolean) => {
  const documentElementScroll =
    document.documentElement.style.getPropertyValue('--scroll-y');
  const cacheLocator = documentElementScroll || `${window.scrollY}px`;

  if (!documentElementScroll) {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}px`
      );
    });
  }

  const { body } = document;

  if (isScrollLocked) {
    const scrollY = cacheLocator;
    body.style.scrollbarGutter = 'stable';
    body.style.overflowY = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.left = '0px';
    body.style.right = '0px';
  } else {
    body.style.position = '';
    body.style.overflowY = 'auto';
    const scrollY = body.style.top || cacheLocator;
    body.style.top = '';
    window.scrollTo(0, Math.abs(parseInt(scrollY || '0', 10)));
  }
};

export default bodyScrollLock;
