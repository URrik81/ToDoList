import InputText from "../InputText/InputText";
import './Home.scss';

function onTitleChanged(value) {
    if (value === "") {
      alert("Please add new title first");
      return false;
    }
    document.title = value;
    return true;
  }

export default function Home() {
    return (
        <div className="Home">
          <h1 className="HomeText">ToDo list.</h1>
          <InputText onButtonClick={onTitleChanged} buttonTitle="Change" title="Set New Title"/>
        </div>
    );
}