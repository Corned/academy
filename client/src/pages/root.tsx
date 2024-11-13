import {
  RiGoogleFill,
  RiGithubFill,
  RiMicrosoftFill,
  RiMailFill,
} from "@remixicon/react"

const Root = () => {
  return (
    <div className="mx-auto flex h-full max-w-[660px] flex-col justify-center gap-5 pb-20">
      <h1 className="font text-[72px] font-extrabold">
        Welcome to Academy! 🚀
      </h1>

      <p className="text-justify">
        This is the home page of Academy, the new learning platform for web
        development. Here, you'll find comprehensive courses, tutorials, and
        projects designed to take your coding skills to the next level.
      </p>

      <div className="flex flex-col gap-2">
        <p>Do you already have an account on Academy? 🥳</p>

        <div className="grid grid-cols-2 gap-2">
          <button className="flex w-full flex-row justify-center gap-2 rounded-3xl border-2 border-[#edf1f2] bg-white p-3 transition-colors hover:cursor-pointer hover:bg-neutral-100">
            <RiMailFill />

            <span>
              Yes, let me <b>sign in</b>!
            </span>
          </button>
          <button className="flex w-full flex-row justify-center gap-2 rounded-3xl border-2 border-[#edf1f2] bg-white p-3 transition-colors hover:cursor-pointer hover:bg-neutral-100">
            <RiMailFill />
            <span>No, but I want to make one!</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p>You can also sign in with an account from another service. 🤯</p>

        <div className="grid grid-cols-3 gap-2">
          <button className="flex w-full flex-row justify-center gap-2 rounded-3xl border-2 border-[#edf1f2] bg-white p-3 transition-colors hover:cursor-pointer hover:bg-neutral-100">
            <RiGoogleFill />
            <span>Google</span>
          </button>
          <button className="flex w-full flex-row justify-center gap-2 rounded-3xl border-2 border-[#edf1f2] bg-white p-3 transition-colors hover:cursor-pointer hover:bg-neutral-100">
            <RiMicrosoftFill />
            <span>Microsoft</span>
          </button>
          <button className="flex w-full flex-row justify-center gap-2 rounded-3xl border-2 border-[#edf1f2] bg-white p-3 transition-colors hover:cursor-pointer hover:bg-neutral-100">
            <RiGithubFill />
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Root
