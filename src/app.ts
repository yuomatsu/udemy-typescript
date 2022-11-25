class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;


  constructor() {
    this.templateElement = document.getElementById(
      'project-input',
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    // タイトル、説明、人月を取得
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
    this.mandayInputElement = this.element.querySelector('#manday') as HTMLInputElement

    this.configure();
    this.attach();
  }

  //　イベントオブジェクトを取得
  private submitHandler(event: Event) {
    // デフォルトの挙動をキャンセル
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  // イベントリスナー設定
  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
