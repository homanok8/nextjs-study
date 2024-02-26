'use client';
import React, { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default async function MeowArticle() {
   const [text, setText] = useState();
   

  useEffect(() => {
   const res = await fetch('https://meowfacts.herokuapp.com', {
      next: { revalidate: 3 }
      // cache: 'no-store'
   });
  const data = await res.json();
  const factText = data.data[0];
  }, [])
  return (
   <article className={styles.article}>
      {factText}
   </article>
  )
}
