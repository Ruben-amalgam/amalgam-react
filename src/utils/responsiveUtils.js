// Check screen category: mobile, tablet, or desktop
export function getScreenCategory() {
  const width = window.innerWidth;

  if (width <= 768) {
    return 'mobile';
  } else if (width > 768 && width <= 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}