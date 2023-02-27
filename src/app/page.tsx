'use client'
import Header from "./(home)/Header";
import Main from "./(home)/Main";

export default function Home() {
  return (
    <>
      <Header currentPage={'page1'} />
      <Main />
    </>
  )
}
