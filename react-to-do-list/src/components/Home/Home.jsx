import InputText from "../InputText/InputText";
import styles from './Home.module.scss';

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
        <div className={styles.Home}>
          <h1 className={styles.HomeText}>ToDo homepage.</h1>
          <InputText onButtonClick={onTitleChanged} buttonTitle="Change" title="Set New Title"/>
        </div>
    );
}