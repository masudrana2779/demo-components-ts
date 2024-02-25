// import { Button } from '@/comps/uiComps'
// import React, { useEffect, useRef, useState } from 'react'

// // import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/comps/uiComps/DropdownMenu/DropdownMenu'

// type EvenetPopOverProps = { date: string; startTime: string; endTime: string; sellHeight?: string }
// const EvenetPopOver = ({ startTime, endTime, date, sellHeight }: EvenetPopOverProps) => {
//   const [open, setOpen] = useState<boolean>(false)
//   const boxRef = useRef<HTMLDivElement>(null)

//   const handleClick = () => {
//     setOpen((prevState) => !prevState)
//   }
//   const handleClickOutside = (event: MouseEvent) => {
//     if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
//       setOpen(false)
//     }
//   }
//   useEffect(() => {
//     document.body.addEventListener('click', handleClickOutside)

//     return () => {
//       document.body.removeEventListener('click', handleClickOutside)
//     }
//   }, [])

//   return (
//     <>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <div className="py-2 px-4 bg-jg-grey-50 border-l-4 border-jg-green-500 w-full flex items-center min-h-[32px] text-jg-metal-700 text-inputSizeMd font-medium cursor-pointer">
//             {startTime} - {endTime}
//           </div>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="rounded shadow-md bg-white w-72 " align="start">
//           <div className="border-b p-4">
//             <div className="text-base leading-5 font-medium text-jg-metal-900">{date}</div>
//             <div>
//               {startTime} - {endTime}
//             </div>
//           </div>
//           <div className="py-2 px-4 flex space-x-2 justify-end items-center ">
//             <Button btnColor="error" btnSize="lg" fillType="outline" onClick={() => {}} state="default" text="Delete" />
//             <Button
//               btnColor="primary"
//               btnSize="lg"
//               fillType="outline"
//               onClick={() => {}}
//               state="default"
//               text="Reschedule"
//             />
//           </div>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* try to added */}

//       <div
//         className={`relative py-2 px-4 bg-jg-grey-50 border-l-4 border-jg-green-500 w-full flex items-center min-h-[32px]`}
//         style={{ height: sellHeight }}
//       >
//         <div
//           ref={boxRef}
//           className={`text-jg-metal-700 text-inputSizeMd font-medium cursor-pointer`}
//           onClick={() => {
//             handleClick()
//           }}
//         >
//           <div>
//             {startTime} - {endTime}
//           </div>
//         </div>
//         <div
//           className={`shadow-md rounded absolute left-0 z-10 top-full bg-white w-72 transition-all duration-100 ease-linear ${
//             open === true ? `visible opacity-100 mt-1` : `mt-3 invisible opacity-0`
//           }`}
//         >
//           <div className="border-b p-4">
//             <div className="text-base leading-5 font-medium text-jg-metal-900">{date}</div>
//             <div>
//               {startTime} - {endTime}
//             </div>
//           </div>
//           <div className="py-2 px-4 flex space-x-2 justify-end items-center ">
//             <Button btnColor="error" btnSize="lg" fillType="outline" onClick={() => {}} state="default" text="Delete" />
//             <Button
//               btnColor="primary"
//               btnSize="lg"
//               fillType="outline"
//               onClick={() => {}}
//               state="default"
//               text="Reschedule"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default EvenetPopOver
