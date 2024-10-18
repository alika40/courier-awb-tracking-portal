import {
  KeyboardEvent,
  MouseEvent,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useCarousel = () => {
  const [cardMarginLeft, setCardMarginLeft] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [toggleLockFlag, setToggleLockFlag] = useState<boolean>(false);
  const [triggerMousedown, setTriggerMousedown] = useState<boolean>(true);
  const [microBtnsColorId, setMicroBtnsColorId] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const navPrevButtonRef = useRef<HTMLButtonElement>(null);
  const navNextButtonRef = useRef<HTMLButtonElement>(null);

  const currentCardIndex = useRef<number>(0);
  const cardWidth = useRef<number>(0);
  const parentElemWidth = useRef<number>(0);

  const style = useTheme();
  const matches = useMediaQuery(style.breakpoints.up('sm'));

  useEffect(() => {
    // Check if the code is running on the client side: NodeJS.Process
    if (process) {
      const nextButton = navNextButtonRef.current;
      const prevButton = navPrevButtonRef.current;
      if (matches) {
        // Moble: Hides onNext and onPrev buttons
        nextButton!.setAttribute('hidden', '');
        prevButton!.setAttribute('hidden', '');
      }
      initializeNav();
    }
  }, [matches]);

  // Initial Start up when this component is first navigate to
  const initializeNav = () => {
    let cardStyle: CSSStyleDeclaration;
    const nextButton = navNextButtonRef.current;
    const prevButton = navPrevButtonRef.current;
    const container = carouselRef.current;

    const lastCard = container!.lastElementChild;
    cardWidth.current = container!.firstElementChild!.clientWidth;
    parentElemWidth.current = carouselRef!.current!.parentElement!.clientWidth;

    cardStyle = getComputedStyle(lastCard!!); // .card {margin-left: 5px }
    const num = cardStyle.marginLeft.match(/([0-9]+)/);
    setCardMarginLeft(() => +num!![0]);

    if (!matches) {
      // Moble: Always hide onPrev and onNext buttons
      nextButton!.removeAttribute('hidden');
      prevButton!.removeAttribute('hidden');
    } else {
      // Non Mobile: Hide onPrevious button and show onNext button on page load
      nextButton!.removeAttribute('hidden');
      prevButton!.setAttribute('hidden', '');
    }

    const lock = lockNav();
    const lockonSmallCardLen = lockNavSmallCardLen();
    if (lockonSmallCardLen) {
      // Laptops/Desktops: Hides onNext and onPrev buttons
      // if the total cards' width is lesser than container's width
      nextButton!.setAttribute('hidden', '');
      prevButton!.setAttribute('hidden', '');
      return;
    }
    if (lock) {
      nextButton!.removeAttribute('hidden');
      setTriggerMousedown(() => false);
    }
  };

  // Check whether the remaining cards' width combined is less than its parent container width
  // and then remove nav onNext buttons if true or remove nav onPrev button if false
  const lockNav = (): boolean => {
    const cards = carouselRef!.current!.childNodes;
    const cardsReminder =
      (cards.length - currentCardIndex.current) * cardWidth.current;
    return parentElemWidth.current >= cardsReminder;
  };

  // Check whether the totai cards' width combined is more less its parent container width
  // and then remove nav buttons if true otherwise show buttons
  const lockNavSmallCardLen = (): boolean => {
    const cards = carouselRef!.current!.childNodes;
    const totalCardsSize = cards.length * cardWidth.current;
    return parentElemWidth.current >= totalCardsSize;
  };

  const onPreviousHelperFn = () => {
    const nextButton = navNextButtonRef.current;
    const prevButton = navPrevButtonRef.current;
    const container = carouselRef.current;

    if (currentCardIndex.current > 0) {
      if (!matches) {
        // Moble: Always hide onNext button
        nextButton!.setAttribute('hidden', '');
      } else {
        // Show onNext button
        nextButton!.removeAttribute('hidden');
      }

      currentCardIndex.current--;

      const containerWidthOffset = cardWidth.current * currentCardIndex.current;
      const cardMarginLeftOffset = currentCardIndex.current * cardMarginLeft;
      const currentLeftPos = containerWidthOffset + cardMarginLeftOffset;
      container!.style.marginLeft = -currentLeftPos + 'px';
      setMicroBtnsColorId(currentCardIndex.current);
    }

    if (currentCardIndex.current === 0) {
      // Hide onNext button
      prevButton!.setAttribute('hidden', '');
    }
  };

  const onNextHelperFn = () => {
    const nextButton = navNextButtonRef.current;
    const prevButton = navPrevButtonRef.current;
    const container = carouselRef.current;
    const cards = container!.childNodes;

    if (currentCardIndex.current < cards!.length) {
      if (!matches) {
        // Moble: Always hide onPrevious button
        prevButton!.setAttribute('hidden', '');
      } else {
        // Show onPrevious button
        prevButton!.removeAttribute('hidden');
      }
      currentCardIndex.current++;

      const containerWidthOffset = cardWidth.current * currentCardIndex.current;
      const cardMarginLeftOffset = currentCardIndex.current * cardMarginLeft;
      const currentLeftPos = containerWidthOffset + cardMarginLeftOffset;
      carouselRef!.current!.style.marginLeft = -currentLeftPos + 'px';

      setMicroBtnsColorId(currentCardIndex.current);

      const lock = lockNav();
      if (lock) {
        // Hide onNext button
        nextButton!.setAttribute('hidden', '');
      }
    }
  };

  // For Device with wider screen Section: Screen size above 768px
  const onPrevious = () => {
    onPreviousHelperFn();
  };

  const onNext = () => {
    onNextHelperFn();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    // Add tabindex="0" to the targeted element in the JSX to make Event work
    // carouselRef.current?.blur();
    const code = e.which || e.keyCode;
    // const code = e.which || e.code;

    if (e && code === 37) {
      onPreviousHelperFn();
    }

    const lock = lockNav();
    if (e && code === 39 && !lock) {
      onNextHelperFn();
    }
  };

  const onMouseDown = () => {
    if (triggerMousedown) {
      setToggleLockFlag(() => true);
    }
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (e && toggleLockFlag) {
      if (e.movementX < 0) {
        const lock = lockNav();
        if (!lock) {
          onNextHelperFn();
        }
      }
      if (e.movementX > 0) {
        onPreviousHelperFn();
      }
      setToggleLockFlag(() => false);
    }
  };

  // For Touchsreen Mobile Phones Section: Screen size below 768px
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    // Touchscreen
    setToggleLockFlag(() => true);
    setTouchStart(() => e.touches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    // Touchscreen
    const moveDirection = Math.round(e.touches[0].clientX - touchStart);

    if (e.touches && toggleLockFlag) {
      if (moveDirection >= 0) {
        onPreviousHelperFn();
      }
      if (moveDirection < 0) {
        const lock = lockNav();
        if (!lock) {
          onNextHelperFn();
        }
      }
      setToggleLockFlag(() => false);
    }
  };

  const onHandleMicroRoundedBtns = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cardId = parseInt(
      (e.currentTarget as any).attributes['data-cardindex'].value,
    );

    const container = carouselRef.current!!;

    setMicroBtnsColorId(() => cardId);
    currentCardIndex.current = cardId;

    const containerWidthOffset = cardWidth.current * cardId;
    const cardMarginLeftOffset = cardId * cardMarginLeft;
    const currentLeftPos = containerWidthOffset + cardMarginLeftOffset;
    const diffInWidth = parentElemWidth.current - currentLeftPos;

    // Don't execute on Mobile Devices
    if (matches) {
      // When container width is less than the selected card position leading to -ve value,
      // recalculate to get the nearest +ve value and its button index/id and active it
      if (diffInWidth <= 1) {
        return recalcActiveMiniBtsPos(cardId, container);
      }
    }

    container!.style.marginLeft = -currentLeftPos + 'px';
    navNextButtonRef.current?.removeAttribute('hidden');
    if (currentCardIndex.current > 0) {
      navPrevButtonRef.current?.removeAttribute('hidden');
    } else {
      navPrevButtonRef.current?.setAttribute('hidden', '');
    }
  };

  const recalcActiveMiniBtsPos = (
    cardId: number,
    container: HTMLDivElement,
  ) => {
    const cards = container!.childNodes;
    let calcIndex: number = 0;
    let containerWidthOffset: number;
    let cardMarginLeftOffset: number;
    let currentLeftPos: number = 0;
    let diffInWidth: number;

    for (let i = cardId; i < cards.length; i--) {
      containerWidthOffset = cardWidth.current * i;
      cardMarginLeftOffset = i * cardMarginLeft;
      currentLeftPos = containerWidthOffset + cardMarginLeftOffset; // new card position
      diffInWidth = parentElemWidth.current - currentLeftPos;
      calcIndex = i; // new index or id
      if (diffInWidth >= 1) break;
    }
    setMicroBtnsColorId(() => calcIndex); // update value to stay in sync
    currentCardIndex.current = calcIndex; // update value to stay in sync
    container!.style.marginLeft = -currentLeftPos + 'px';
    navNextButtonRef.current?.setAttribute('hidden', ''); // Hide next button
    navPrevButtonRef.current?.removeAttribute('hidden'); // show prev button
  };

  return {
    carouselRef,
    navPrevButtonRef,
    navNextButtonRef,
    microBtnsColorId,
    onHandleMicroRoundedBtns,
    onNext,
    onPrevious,
    onTouchMove,
    onTouchStart,
    onMouseMove,
    onMouseDown,
    onKeyDown,
  };
};

export default useCarousel;
