export const ScrollToTopOnRefresh = () => {
    useEffect(() => {
      // Scroll to the top of the window on initial render
      window.scrollTo(0, 0);
    }, [])};

    export default ScrollToTopOnRefresh;

    