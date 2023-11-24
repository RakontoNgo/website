const scrollToSection = (id: string, topPosition: number) => {
  const section = document.getElementById(id);
  if (section) {
    const rect = section.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const targetY = rect.top + scrollTop - topPosition;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }
};

export default scrollToSection;
