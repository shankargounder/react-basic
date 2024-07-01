import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPT } from "../data";
export function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPT.map((contentItem) => 
          (<CoreConcept key={contentItem.title} {...contentItem}/>
        ))}
      </ul>
    </section>
  )
}