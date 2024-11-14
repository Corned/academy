import Button from "@/components/Button"
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
          <Button>
            <RiMailFill />
            <span>
              Yes, let me <b>sign in</b>!
            </span>
          </Button>
          <Button>
            <RiMailFill />
            <span>No, but I want to make one!</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p>You can also sign in with an account from another service. 🤯</p>

        <div className="grid grid-cols-3 gap-2">
          <Button>
            <RiGoogleFill />
            <span>Google</span>
          </Button>
          <Button>
            <RiMicrosoftFill />
            <span>Microsoft</span>
          </Button>
          <Button>
            <RiGithubFill />
            <span>GitHub</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Root
