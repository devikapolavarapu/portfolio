export default function Background() {
  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-3xl animate-pulse"/>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-pulse"/>

<div
  className="absolute
  top-[40%]
  left-[50%]
  w-[300px]
  h-[300px]
  bg-amber-500/5
  rounded-full
  blur-3xl
  animate-pulse"
/>
    </div>

  )
}