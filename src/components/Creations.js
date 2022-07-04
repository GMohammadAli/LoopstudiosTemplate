import React from 'react'
import cardsData from '../cardsData'
import Card from './Card'

function Creations() {
  const cardsArrData = cardsData.map(item => {
   return (
    <Card title={item.title} img={item.img}/>
   )
  }) 
  return (
    <section
      id="creations"
      class="mt-24 px-7 lg:px-0 md:mt-[11.5rem] max-w-[69.5rem] mx-auto space-y-12 md:space-y-20 flex flex-col justify-center items-center md:items-start"
    >
      <div class="flex justify-center md:justify-between items-center w-full">
        <h2 class="text-3xl md:text-5xl text-center md:text-left font-josefin uppercase">
          our creations
        </h2>
        <button class="w-40 py-2 border-2 border-black hover:bg-black hover:text-white transition-all font-alata uppercase tracking-[.4rem] hidden md:block">
          see all
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 w-full">
        {cardsArrData}
      </div>
      <button class="w-40 py-2 border-2 border-black hover:bg-black hover:text-white transition-all font-alata text-xs uppercase tracking-[.4rem] block md:hidden">
        see all
      </button>
    </section>
  );
}

export default Creations