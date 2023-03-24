import { useCallback, useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

/**
 * @description 动画帧hook，使用 rAF 来确保动画流畅执行
 * @param {number} interval 间隔ms
 * @param {function} callback 间隔一定ms后执行回调
 * @param {array} deps 依赖项，当依赖项改变时会触发副作用
 */
export function useRaf(interval, callback, deps = []) {
  let lastTime = useRef(performance.now());
  let rafId = useRef(null);

  const animate = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const now = performance.now();
    if (now - lastTime.current >= interval) {
      lastTime.current = now;
      if (typeof callback === 'function') callback();
    }
    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, deps);
}

export function useStep(opts = {}) {
  const { initValue = 0, step = 1, max = Infinity, min = -Infinity } = opts;
  const [current, setCurrent] = useState(initValue);
  const forward = useCallback(
    (cb) => {
      setCurrent((prev) => {
        if (prev < max) {
          typeof cb === 'function' && cb();
          return prev + step;
        }
        return prev;
      });
    },
    [step, max],
  );
  const backward = useCallback(
    (cb) => {
      setCurrent((prev) => {
        if (prev > min) {
          typeof cb === 'function' && cb();
          return prev - step;
        }
        return prev;
      });
    },
    [step, min],
  );

  return {
    current,
    forward,
    backward,
    setCurrent,
  };
}

// 不同域页面通信
export function useReceiveMsg({ allowOrigin, onReceiveData }) {
  useEffect(() => {
    const handler = (e) => {
      if (
        allowOrigin.includes(e.origin || e.originalEvent.origin) ||
        allowOrigin === '*'
      ) {
        onReceiveData(e.data);
      }
    };

    window.addEventListener('message', handler);
    return () => {
      window.removeEventListener('message', handler);
    };
  }, [allowOrigin]);
}

/**
 * @description resize时进行操作
 * @param {function} callback
 * @param {number} wait
 */
export function useResize(callback, wait) {
  useEffect(() => {
    const throttled = throttle(callback, wait);
    window.addEventListener('resize', throttled);
    return () => {
      window.removeEventListener('resize', throttled);
    };
  }, [callback]);
}

/**
 * @description 容器元素滚动时触发
 * @param callback
 * @param wait
 * @param container
 */
export function useScroll(callback, wait, container) {
  useEffect(() => {
    const throttled = throttle(callback, wait);
    container && container.addEventListener('scroll', throttled);
    return () => {
      container && container.removeEventListener('scroll', throttled);
    };
  }, [callback, container]);
}

export function useToggle(defaultValue) {
  const [t, setT] = useState(defaultValue);
  const toggle = useCallback(() => {
    setT((prev) => !prev);
  }, []);

  return [t, toggle];
}

export function useHeartBeat(callback, interval, immediate = false, dep = []) {
  let id,
    time = +new Date();
  function redo() {
    const now = +new Date();
    if (now - time >= interval) {
      time = now;
      callback();
    }
    id = requestAnimationFrame(redo);
  }
  useEffect(() => {
    immediate && callback();
    redo();
    return () => {
      cancelAnimationFrame(id);
    };
  }, [callback, id, immediate, redo]);
}