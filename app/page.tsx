import React, { useState, useEffect } from 'react';

export default function Home() {
  
  

  return (
    <main className="flex flex-col items-center justify-center ">
      <h1 className="font-libre_caslon_display text-7xl p-7">arcloset</h1>
      <p className="font-red_hat_display text-xl">Seu site para experimentar roupas sem sair de casa</p>
      <p className="font-red_hat_display text-base p-2">Permita acesso a webcam para poder começar a usar</p>
      <div className=' m-10 flex items-center justify-center h-[30rem] w-1/2 bg-gray-300 rounded-lg'></div>
    </main>
  );
}
