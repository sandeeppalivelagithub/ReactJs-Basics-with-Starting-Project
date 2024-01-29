import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.jsx';
import Section  from "./Section.jsx";
import Tabs from './Tabs'

export default function Example(){

  const [selectedTopic, setSelectedTopic] = useState("components")

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
}

let tabContent;

if (selectedTopic) {
  tabContent = <div id = "tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
</div>
}
    return(
        <Section title='Example' id='examples'>
        <Tabs ButtonsContainer='menu' buttons={
            <><TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>Prop</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>State</TabButton></>
        }>
         
        </Tabs>
        {tabContent}
      </Section>
    )
}