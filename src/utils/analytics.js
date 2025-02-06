export const trackPageView = (page) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'YOUR-GA4-ID', {
        page_path: page,
        page_title: document.title
      });
    }
  };