import React from 'react'

export default function Cards({gets}) {
    // console.log("gets",gets)
  return (
    <>

<div class="flex justify-center items-center min-h-screen">
    <div class="max-w-[720px] mx-auto">
        <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
            <a 
                target="_blank" 
                href="https://www.material-tailwind.com/docs/html/card" 
                class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
            >
                More components on <b>Material Tailwind</b>.
            </a>
        </div>

    
        <div
            class="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
            <div
                class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
               {/* {gets.map((items)=>{
                console.log("items",items)
            // <p>{items.datetime}</p>
               })} */}
               {/* <h2 className="text-white">datetime:{gets[0].datetime}</h2>  */}
            </div>
            <div class="p-0">
                
            </div>
            <div class="p-0 mt-12">
              
            </div>
        </div>
    </div>
</div>
    </>
  )
}
