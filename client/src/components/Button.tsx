const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex w-full flex-row justify-center gap-2 rounded-3xl border-2 border-[#edf1f2] bg-white p-3 transition-colors hover:cursor-pointer hover:bg-neutral-100">
      {children}
    </button>
  )
}

export default Button
