import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function onSelectHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent =
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => { onSelectHandler("components") }}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => { onSelectHandler("jsx") }}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => { onSelectHandler("props") }}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => { onSelectHandler("state") }}>State</TabButton>
          </menu>

          {/* 3항연산자 사용 방법 1 */}
          {/* {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ?
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div> : null} */}

          {/* 3항연산자 사용 방법 2 */}
          {/* {!selectedTopic ? <p>Please select a topic.</p> :
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>} */}

          {/* && 사용 방법 */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic &&
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          } */}

          {/* 변수를 사용하는 방법 */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
