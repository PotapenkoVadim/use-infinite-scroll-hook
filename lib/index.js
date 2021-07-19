import { useEffect } from 'react';
export function useInfiniteScrollHook(refContainer, onLoad) {
    useEffect(function () {
        if ((refContainer === null || refContainer === void 0 ? void 0 : refContainer.current) && onLoad) {
            var handleScroll_1 = function () {
                var _a = refContainer.current, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight, scrollTop = _a.scrollTop;
                var containerScrollTop = scrollHeight - clientHeight;
                var currentScrollPosition = Math.ceil(Math.abs(scrollTop));
                if (currentScrollPosition >= containerScrollTop) {
                    onLoad();
                }
            };
            refContainer.current.addEventListener('scroll', handleScroll_1);
            return function () { return refContainer.current.removeEventListener('scroll', handleScroll_1); };
        }
    }, [refContainer, onLoad]);
}
