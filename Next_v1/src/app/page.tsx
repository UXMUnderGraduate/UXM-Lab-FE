'use client';
import Index from '../components/home/Index';
import AboutUs from '../components/home/AboutUs';
import ContactUs from '../components/home/ContactUs';
import useMoveScroll from '../hooks/useMoveScroll';

export default function Home() {
  const { element, onMoveToElement } = useMoveScroll();
  return (
    <>
      <Index onMoveToElement={onMoveToElement} />
      <AboutUs element={element} />
      <ContactUs />
    </>
  );
}
