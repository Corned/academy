enum ComponentType {
  Text,
  EmbedImage,
  EmbedVideo,

  MultipleChoice,
}

interface IComponent {
  id: string
  type: ComponentType
}

interface ITextComponent extends IComponent {
  text: string
}

interface IEmbedImageComponent extends IComponent {
  imageUrl: string
}

interface IEmbedVideoComponent extends IComponent {
  videoUrl: string
}

interface IMultipleChoiceComponent extends IComponent {
  choices: string[]
  correctAnswer: number
  explanation: ITextComponent
}